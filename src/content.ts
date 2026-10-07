import "@fontsource/baloo-2/800.css";
import type { Site } from "./lib";

const SPLIT: [number, number][] = [[5, 11], [15, 22]];

export const SITE: Site = {
  name: "JS Fitness Gym",
  sub: { en: "Saini Colony, Sohna · by Jai Prakash Saini", hi: "सैनी कॉलोनी, सोहना · जय प्रकाश सैनी" },
  banner: { en: "Morning and evening batches, Monday to Saturday: WhatsApp to plan your first visit", hi: "सोमवार से शनिवार सुबह और शाम के बैच: पहली विज़िट के लिए व्हाट्सऐप करें" },
  phone: "919813041892",
  phoneDisplay: "+91 98130 41892",
  lat: 28.2576126,
  lon: 77.0674768,
  hours: [[], SPLIT, SPLIT, SPLIT, SPLIT, SPLIT, SPLIT],
  theme: {
    dark: true,
    bg: "#0c0912",
    bg2: "#120e1b",
    panel: "#191324",
    ink: "#f4effc",
    ink2: "#c7bdd8",
    ink3: "#877d99",
    line: "#261d36",
    accent: "#a66bff",
    onAccent: "#16002e",
    display: "Baloo 2",
    weight: 800,
    upper: false,
  },
  scene: "kettlebell",
  align: "left",
  hero: {
    title: [
      { en: "Clean floor. Good kit.", hi: "साफ़ जगह। बढ़िया मशीनें।" },
      { en: "Sohna's JS Fitness.", hi: "सोहना का JS फ़िटनेस।" },
    ],
    proof: {
      en: "4.9 on Google from 35 reviews. Modern machines, great hygiene and an owner, Jai Prakash Saini, members call the most experienced in the field.",
      hi: "गूगल पर 35 रिव्यू से 4.9। मॉडर्न मशीनें, बढ़िया साफ़-सफ़ाई, और मालिक जय प्रकाश सैनी, जिन्हें मेंबर्स इस फ़ील्ड में सबसे अनुभवी बताते हैं।",
    },
    fallback: "/img/p1.jpg",
  },
  marquee: ["Strength", "Machines", "Cardio", "Hygiene", "Supportive trainers", "Delhi–Alwar Road", "Sohna"],
  dishes: {
    title: { en: "What members come for", hi: "मेंबर किसलिए आते हैं" },
    body: { en: "Every line is quoted from a Google review.", hi: "हर लाइन गूगल रिव्यू से ली गई है।" },
    layout: "cards",
    items: [
      { name: { en: "Hygiene", hi: "साफ़-सफ़ाई" }, quote: "Great experience great hygiene equipments are neet and clean gym trainer is very helping always motivates us for fulfilling to goals", img: "/img/p1.jpg" },
      { name: { en: "Equipment", hi: "इक्विपमेंट" }, quote: "Very good gym in sohna, all modern equipment and machines are available. Atmosphere is very good for workout.", img: "/img/p9.jpg" },
      { name: { en: "Serious training", hi: "सीरियस ट्रेनिंग" }, quote: "Top-tier equipment, great atmosphere, and helpful trainers—easily the best gym in Sohna for serious training!", img: "/img/p12.jpg" },
      { name: { en: "Timing", hi: "समय" }, quote: "Good time management and excellent equipment" },
      { name: { en: "Staff", hi: "स्टाफ़" }, quote: "J s fitness gym is good to workout the staff is very supportive" },
      { name: { en: "Comfort", hi: "आराम" }, quote: "Good atmosphere and very comfortable" },
    ],
  },
  gallery: {
    title: { en: "Inside JS Fitness", hi: "JS फ़िटनेस के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p1.jpg", alt: "Purple-lit training floor at JS Fitness Gym", wide: true },
      { src: "/img/p9.jpg", alt: "Machines on the gym floor" },
      { src: "/img/p7.jpg", alt: "JS Fitness Gym sign" },
      { src: "/img/p12.jpg", alt: "Strength area", wide: true },
      { src: "/img/p3.jpg", alt: "Gym storefront" },
      { src: "/img/p13.jpg", alt: "The building on Delhi–Alwar Road" },
    ],
  },
  feature: {
    kind: "hosts",
    title: { en: "Run by Jai Prakash Saini", hi: "जय प्रकाश सैनी का जिम" },
    body: { en: "Members name the owner in their reviews.", hi: "मेंबर्स अपने रिव्यू में मालिक का नाम लेते हैं।" },
    img: "/img/p3.jpg",
    hosts: [
      { name: "JAI PRAKASH SAINI", quote: "A very nice place for workout ,Neat and clean environment owner :- Jai is most experience person in this field" },
      { name: "JAI PRAKASH SAINI", quote: "best gym in sohna by jaiprakash saini" },
      { name: "THE OWNER", quote: "Great place, nature of the owner is also very good, you can consider it as the machine’s and equipment’s are also in good condition…." },
    ],
  },
  reviews: {
    title: { en: "Sohna's best gym, say members", hi: "मेंबर्स कहते हैं, सोहना का बेस्ट जिम" },
    rating: 4.9,
    dist: [33, 1, 1, 0, 0],
    quotes: [
      { quote: "Amazing workout atmosphere and well-maintained machines. Highly recommended!", stars: 5 },
      { quote: "Best gym of sohna all machine available here", stars: 5 },
      { quote: "J S Fitness is very good to workout and the environment is also very good You guy's can consider J S Fitness Gym", stars: 5 },
      { quote: "Best gym 💪 to visit in sohna staff is very good", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Chungi No. 1, Delhi–Alwar Road", hi: "चुंगी नंबर 1, दिल्ली–अलवर रोड" },
    img: "/img/p13.jpg",
    alt: "JS Fitness Gym building",
    address: { en: "Chungi No. 1, Delhi–Alwar Road, near Bal Bharti School, Saini Colony, Sohna, Haryana", hi: "चुंगी नंबर 1, दिल्ली–अलवर रोड, बाल भारती स्कूल के पास, सैनी कॉलोनी, सोहना, हरियाणा" },
    note: { en: "Monday to Saturday, 5 to 11 am and 3 to 10 pm. Closed Sunday.", hi: "सोमवार से शनिवार, सुबह 5 से 11 और दोपहर 3 से रात 10। रविवार बंद।" },
  },
  story: [
    { kicker: { en: "Hygiene", hi: "साफ़-सफ़ाई" }, title: { en: "Neat, clean kit.", hi: "साफ़-सुथरी मशीनें।" }, quote: "great hygiene equipments are neet and clean" },
    { kicker: { en: "Owner", hi: "मालिक" }, title: { en: "Years in the field.", hi: "इस फ़ील्ड का अनुभव।" }, quote: "owner :- Jai is most experience person in this field" },
    { kicker: { en: "Training", hi: "ट्रेनिंग" }, title: { en: "Built for serious training.", hi: "सीरियस ट्रेनिंग के लिए।" }, quote: "easily the best gym in Sohna for serious training!" },
  ],
  build: {
    title: { en: "Plan your first visit", hi: "अपनी पहली विज़िट प्लान करें" },
    body: { en: "Pick a goal and a time. It goes to WhatsApp exactly as you see it.", hi: "लक्ष्य और समय चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Goal", hi: "लक्ष्य" }, options: [
      { name: { en: "Weight loss", hi: "वज़न कम करना" } },
      { name: { en: "Muscle gain", hi: "मसल बनाना" } },
      { name: { en: "General fitness", hi: "जनरल फ़िटनेस" } },
      { name: { en: "Just starting out", hi: "अभी शुरुआत" } },
    ] },
    when: true,
    hello: { en: "Hi JS Fitness Gym, I'd like to visit:", hi: "नमस्ते JS फ़िटनेस जिम, मुझे विज़िट करनी है:" },
  },
  waHello: {
    en: "Hi JS Fitness Gym, I'd like to know about joining. Goal: , batch (morning/evening): ",
    hi: "नमस्ते JS फ़िटनेस जिम, मुझे जॉइन करने के बारे में जानना है। लक्ष्य: , बैच (सुबह/शाम): ",
  },
  order: ["dishes", "feature", "build", "reviews", "gallery", "visit"],
};
