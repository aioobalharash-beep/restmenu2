import type { Menu } from "@/lib/types";

/**
 * The sample menu that ships with the project. It seeds the local JSON store on
 * first run and the Postgres database via `npm run db:seed`. Prices are in baisa.
 * Bilingual (English base + Arabic) to demonstrate the RTL menu.
 *
 * Replace these with the restaurant's own transparent PNGs and copy.
 */
export const sampleMenu: Menu = [
  {
    id: "cat-hot-drinks",
    name: "Hot Drinks",
    nameAr: "المشروبات الساخنة",
    kicker: null,
    position: 0,
    items: [
      {
        id: "item-espresso",
        name: "Espresso",
        nameAr: "إسبريسو",
        description:
          "A short, dense shot of our house blend — dark chocolate, toasted almond and a lingering crema.",
        descriptionAr:
          "جرعة قصيرة مركّزة من خلطتنا الخاصة — شوكولاتة داكنة، لوز محمّص، وكريما تدوم.",
        priceBaisa: 1400,
        imageUrl: "/sample/item-espresso.png",
        position: 0,
      },
      {
        id: "item-cafe-creme",
        name: "Café Crème",
        nameAr: "كافيه كريم",
        description:
          "The Parisian morning classic: espresso lengthened with silky steamed milk and a fine leaf of foam.",
        descriptionAr:
          "كلاسيكية الصباح الباريسي: إسبريسو مع حليب مبخّر حريري وورقة رقيقة من الرغوة.",
        priceBaisa: 2200,
        imageUrl: "/sample/item-cafe-creme.png",
        position: 1,
      },
      {
        id: "item-chocolat-chaud",
        name: "Chocolat Chaud",
        nameAr: "شوكولاتة ساخنة",
        description:
          "Thick, glossy hot chocolate melted from 70% dark chocolate, crowned with a spoon of Chantilly.",
        descriptionAr:
          "شوكولاتة ساخنة كثيفة ولامعة من شوكولاتة داكنة ٧٠٪، تعلوها ملعقة من كريمة شانتيي.",
        priceBaisa: 2600,
        imageUrl: "/sample/item-chocolat-chaud.png",
        position: 2,
      },
    ],
  },
  {
    id: "cat-cold-drinks",
    name: "Cold Drinks",
    nameAr: "المشروبات الباردة",
    kicker: null,
    position: 1,
    items: [
      {
        id: "item-iced-latte",
        name: "Iced Latte",
        nameAr: "لاتيه مثلّج",
        description:
          "Double espresso poured over cold milk and ice, left to swirl.",
        descriptionAr:
          "جرعتا إسبريسو تُسكبان فوق الحليب البارد والثلج، تتمازج على مهل.",
        priceBaisa: 2400,
        imageUrl: "/sample/item-iced-latte.png",
        position: 0,
      },
      {
        id: "item-citronnade",
        name: "Citronnade",
        nameAr: "سيترونـاد",
        description:
          "Fresh-pressed French lemonade, lightly sweet, with lemon and garden mint.",
        descriptionAr:
          "ليموناضة فرنسية معصورة طازجة، قليلة الحلاوة، بالليمون والنعناع.",
        priceBaisa: 2000,
        imageUrl: "/sample/item-citronnade.png",
        position: 1,
      },
      {
        id: "item-cold-brew-tonic",
        name: "Cold Brew Tonic",
        nameAr: "كولد برو تونيك",
        description:
          "Eighteen-hour cold brew floated over sparkling tonic with a twist of orange.",
        descriptionAr:
          "قهوة مُحضّرة على البارد لثماني عشرة ساعة فوق ماء التونيك الفوّار مع قشر البرتقال.",
        priceBaisa: 2600,
        imageUrl: "/sample/item-cold-brew-tonic.png",
        position: 2,
      },
    ],
  },
  {
    id: "cat-tea",
    name: "Tea",
    nameAr: "الشاي",
    kicker: null,
    position: 2,
    items: [
      {
        id: "item-earl-grey",
        name: "Earl Grey",
        nameAr: "إيرل غراي",
        description:
          "Black tea scented with bergamot, served with a slice of lemon.",
        descriptionAr:
          "شاي أسود معطّر بالبرغموت، يُقدَّم مع شريحة ليمون.",
        priceBaisa: 1600,
        imageUrl: "/sample/item-earl-grey.png",
        position: 0,
      },
      {
        id: "item-mint-tea",
        name: "Moroccan Mint Tea",
        nameAr: "شاي مغربي بالنعناع",
        description:
          "Gunpowder green tea steeped with fresh spearmint, poured tall and sweet.",
        descriptionAr:
          "شاي أخضر بارود منقوع بالنعناع الطازج، يُسكب عاليًا ومحلّى.",
        priceBaisa: 1800,
        imageUrl: "/sample/item-mint-tea.png",
        position: 1,
      },
      {
        id: "item-matcha-latte",
        name: "Matcha Latte",
        nameAr: "ماتشا لاتيه",
        description:
          "Ceremonial-grade matcha whisked with steamed milk — grassy, creamy, calm.",
        descriptionAr:
          "ماتشا فاخرة مخفوقة مع حليب مبخّر — عشبية، كريمية، وهادئة.",
        priceBaisa: 2500,
        imageUrl: "/sample/item-matcha-latte.png",
        position: 2,
      },
    ],
  },
  {
    id: "cat-smoothies",
    name: "Smoothies",
    nameAr: "السموذي",
    kicker: null,
    position: 3,
    items: [
      {
        id: "item-berry-smoothie",
        name: "Berry Smoothie",
        nameAr: "سموذي التوت",
        description:
          "Raspberry, blueberry and strawberry blended with yoghurt and a little honey.",
        descriptionAr:
          "توت العليق والتوت الأزرق والفراولة مخفوقة مع اللبن وقليل من العسل.",
        priceBaisa: 2800,
        imageUrl: "/sample/item-berry-smoothie.png",
        position: 0,
      },
      {
        id: "item-mango-passion",
        name: "Mango & Passion Fruit",
        nameAr: "مانجو وباشن فروت",
        description:
          "Ripe mango and tangy passion fruit, blended thick and sunny.",
        descriptionAr:
          "مانجو ناضجة وباشن فروت منعش، مخفوقة كثيفة ومشمسة.",
        priceBaisa: 2800,
        imageUrl: "/sample/item-mango-passion.png",
        position: 1,
      },
      {
        id: "item-green-smoothie",
        name: "Green Smoothie",
        nameAr: "سموذي أخضر",
        description:
          "Spinach, green apple, banana and fresh ginger, finished with chia.",
        descriptionAr:
          "سبانخ وتفاح أخضر وموز وزنجبيل طازج، مع بذور الشيا.",
        priceBaisa: 2700,
        imageUrl: "/sample/item-green-smoothie.png",
        position: 2,
      },
    ],
  },
];

/** A deep clone so callers can mutate freely without touching the template. */
export function cloneSampleMenu(): Menu {
  return JSON.parse(JSON.stringify(sampleMenu));
}
