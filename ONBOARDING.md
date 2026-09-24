# Client onboarding playbook

How to stand up a new restaurant on RestMenu. One client = one deployment
(its own repo, database, storage, domain, and admin password) — clean, isolated,
and fully free to host.

**Free stack:** GitHub (template) → Netlify (host) → Neon (Postgres) → Cloudflare R2 (images).

---

## 0. One-time setup (accounts)
Create free accounts: **GitHub**, **Netlify**, **Neon** (neon.tech), **Cloudflare** (for R2).
Mark this repo as a **GitHub Template**: repo → Settings → check **“Template repository.”**

## 1. Intake — collect from the client
- **Brand:** restaurant name, tagline (optional), logo (SVG or transparent PNG), brand colour (hex).
- **Menu:** dish photos (ideally transparent PNGs) + who writes the copy/prices.
- **Contact:** Google Maps link, Instagram URL, WhatsApp number.
- **Domain:** e.g. `menu.theircafe.com` (or use the free `*.netlify.app` to start).

## 2. Create the client repo
On this repo → **Use this template** → create `restmenu-<client>`.

## 3. Brand it (Claude Code session)
Open a Claude Code session on the new repo and paste a prompt like:

> Update the branding for this client. In `src/brand.config.ts` set
> **name** = "Client Name", **tagline** = "…", **accent** = "#RRGGBB",
> **accentDeep** = "#RRGGBB" (a darker shade). I'm adding their logo at
> `public/brand/logo.svg` — set **logo** to "/brand/logo.svg". Set the
> **contact** links: map, instagram, whatsapp. Then commit and push.

Also drop their favicon at `src/app/icon.png` (optional). That's the whole
white-label — one file plus two assets.

## Theme recipes
Swappable visual presets. Do the white-label steps in §3 first; a preset only
changes the colour tokens, fonts, and any signature details — never the data
model, bilingual/RTL, ordering, admin, prices, or deploy config.

### The Parisian Bistro Moderne (café) — *current default*
**Vibe:** sophisticated, vintage-meets-modern Parisian café menu card.

**Dark-first.** The forest-green "Bistro Night" card is the default view; the
champagne-cream "Café Card" is the light toggle. In
`src/components/menu/MenuExperience.tsx` the initial state is
`useState<"light" | "dark">("dark")` (a guest's saved choice in `rm_theme` still wins).

**Evening — `[data-theme="dark"]` in `src/app/globals.css`**
```css
--color-porcelain: #16231E;
--color-porcelain-deep: #12201A;
--color-cream: #1B2C25;
--color-shell: #21362D;
--color-ink: #F3EFEA;
--color-ink-soft: #C6CFC7;
--color-ink-faint: #94A3B8;
--color-saffron: #C7A96B;
--color-saffron-deep: #B4924E;
--color-clay: #C7A96B;
--color-indigo: #94A3B8;
--color-sage: #94A3B8;
--color-hairline: rgba(243, 239, 234, 0.16);
--color-hairline-soft: rgba(243, 239, 234, 0.08);
```

**Light — `@theme` in `src/app/globals.css`**
```css
--color-porcelain: #F3EFEA;
--color-porcelain-deep: #E9E3DA;
--color-cream: #F8F5F0;
--color-shell: #FCFAF6;
--color-ink: #16231E;
--color-ink-soft: #47554E;
--color-ink-faint: #8A968D;
--color-saffron: #9A7B3F;
--color-saffron-deep: #7E6330;
--color-clay: #9A7B3F;
--color-indigo: #6E7C72;
--color-sage: #6E7C72;
--color-hairline: rgba(22, 35, 30, 0.16);
--color-hairline-soft: rgba(22, 35, 30, 0.08);
```

> **Alt:** Midnight Navy is a drop-in for the forest green — evening
> `--color-porcelain: #111827`, `--color-porcelain-deep: #0E1420`.

**Fonts** (`src/app/layout.tsx`, via `next/font/google`)

| Role | Font | CSS variable |
|---|---|---|
| Headers, dish names | **Playfair Display** 400/500/600, normal + italic | `--font-serif` |
| Body + prices | **Libre Franklin** 300/400/500/600 | `--font-grotesk` |
| Label voice (prices, eyebrows) | Libre Franklin — `--font-mono-face` points at `--font-grotesk` in `globals.css`; **Space Mono removed** | `--font-mono-face` |
| Arabic | **Aref Ruqaa** (display) + **Tajawal** (body), unchanged | `--font-ar-display`, `--font-tajawal` |

Labels are spaced caps (`uppercase tracking-[0.2–0.34em]`); prices keep `tabular-nums`.

**Signature details**
- **Printed-card frame:** `<div className="card-frame pointer-events-none fixed z-30" />`
  in the shell root of `MenuExperience.tsx`. `.card-frame` in `globals.css` draws a
  1px ink rule (22% mix) plus a faint champagne-gold inner rule 3px in; inset
  0.75rem (1.25rem from `sm`), clamped to safe-area insets. Sits above the page,
  below the controls (z-40), cart/modals (z-50) and intro (z-60). Logo, controls
  and scene padding were nudged inward to clear it.
- **Issue-number running header:** in `src/components/menu/CategoryScene.tsx`,
  e.g. *No.* 04 — APPETIZERS (Playfair italic "No.", zero-padded number, gold
  dash, sage `text-indigo` spaced caps). Arabic: `رقم ٠٤ — المقبّلات` (Arabic-Indic
  digits). The giant faint ghost course-name masthead stays behind the spread.

**`src/brand.config.ts`**
```ts
name: "Café Moderne",
tagline: "carte du jour",   // hidden below `sm` so the wordmark clears the controls
accent: "",                 // "" = palette default champagne-gold
accentDeep: "",
```

**`viewport.themeColor`** (`src/app/layout.tsx`): `#16231E`

**Files touched**
- `src/app/globals.css` — tokens, palette header, `--font-mono-face`, `.card-frame`, dish shadows
- `src/app/layout.tsx` — fonts, `themeColor`
- `src/brand.config.ts` — name, tagline
- `src/components/menu/MenuExperience.tsx` — dark default, `HUES`, frame
- `src/components/menu/CategoryScene.tsx` — issue label, frame-safe padding
- `src/components/menu/BackgroundField.tsx` — background pool colour
- `src/components/menu/PriceTag.tsx` — light-weight tabular price, spaced-caps unit
- `src/components/menu/FloatingLogo.tsx`, `TopControls.tsx` — inset inside the frame
- `src/components/menu/DishImage.tsx` — shadow tint
- `scripts/gen-sample-images.mjs` → `public/sample/*.svg` — gold plate rim (re-run `node scripts/gen-sample-images.mjs`)

### Charcoal & Ember (original default)
**Vibe:** warm editorial food magazine — charcoal ink on soft neutral paper,
one ember (terracotta-red) accent; light-first.

Tokens and fonts live in the initial commit: `git show 950b389:src/app/globals.css`
and `git show 950b389:src/app/layout.tsx`. Fonts: Instrument Serif (display),
Schibsted Grotesk (body), Space Mono (label voice). Accent `#b5482f` light /
`#d55f3f` evening; `themeColor` `#efece7`; initial theme `"light"` (falls back to
`prefers-color-scheme`).

## 4. Provision data + images (free)
- **Neon:** new project → copy the connection string (pooled) → this is `DATABASE_URL`.
  Also grab the **non-pooling** string for `DIRECT_URL`.
- **Cloudflare R2:** create a bucket → enable public access (r2.dev or a custom
  domain) → create an API token (Access Key + Secret). Note the account endpoint.

## 5. Create the Netlify site
Netlify → **Add new site → Import from GitHub** → pick the client repo.
Add **Environment variables** (Site settings → Environment):

| Variable | Value |
|---|---|
| `ADMIN_PASSWORD` | the client's admin password |
| `SESSION_SECRET` | `openssl rand -base64 32` |
| `DATABASE_URL` | Neon pooled string |
| `DIRECT_URL` | Neon non-pooling string |
| `S3_BUCKET` | R2 bucket name |
| `S3_ACCESS_KEY_ID` | R2 access key |
| `S3_SECRET_ACCESS_KEY` | R2 secret |
| `S3_ENDPOINT` | `https://<account-id>.r2.cloudflarestorage.com` |
| `S3_REGION` | `auto` |
| `S3_PUBLIC_BASE_URL` | the bucket's public URL (e.g. `https://pub-xxx.r2.dev`) |

Deploy. The build auto-creates the tables and seeds the sample menu.

## 6. Load the real menu
- **Fastest:** the client (or you) adds dishes in the **admin panel** (`/admin`).
- **Bulk replace:** put the real menu in `src/lib/store/sample-menu.ts` (names,
  descriptions, prices, image paths), set `IMPORT_MENU=1` in Netlify env, redeploy
  once (this **wipes** the sample and loads the real menu), then **remove** the flag.

## 6b. Optional: table ordering + POS
- **Enable ordering:** set `features.ordering: true` in `src/brand.config.ts`.
  Diners get an "Add" control on each dish, a cart, and can place orders; staff
  see them live at `/admin/orders`. Works with no POS.
- **Table QR codes:** print them from `/admin/tables` (each opens the menu with
  that table pre-selected, so orders arrive tagged with the table).
- **POS connector:** implement a `PosAdapter` in `src/lib/pos` (e.g. Foodics),
  register it, and set `POS_PROVIDER` + credentials in env. The webhook endpoint
  is `/api/pos/webhook`. Bilingual + RTL apply to ordering too.

## 7. Domain + handover
- Add the custom domain in Netlify (free SSL).
- Give the client: the menu URL, `/admin` URL, their admin password, and a short how-to.
- Store their secrets in your password manager. Never commit secrets.

---

## Notes
- **Secrets:** every client gets a unique `ADMIN_PASSWORD` and `SESSION_SECRET`.
- **Backups:** Neon keeps history; you can also export via the admin later.
- **Updates:** client repos are template copies — core fixes don't auto-propagate.
  Re-pull from the template when needed (fine for a handful of clients).
- **Costs:** all tiers here are free for a menu's traffic; upgrade a single layer
  only if a client outgrows it.
