import homePage_en from "./en/homePage.json";
import homePage_es from "./es/homePage.json";

export let languages = {
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      homePage: homePage_es,
    },
    en: {
      homePage: homePage_en,
    },
  },
};
