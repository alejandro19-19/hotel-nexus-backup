import homePage_en from "./en/homePage.json";
import homePage_es from "./es/homePage.json";
import home_en from "./en/home.json";
import home_es from "./es/home.json";
import settings_en from "./en/settings.json";
import settings_es from "./es/settings.json";

export let languages = {
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      homePage: homePage_es,
      home: home_es,
      settings: settings_es,
    },
    en: {
      homePage: homePage_en,
      home: home_en,
      settings: settings_en,
    },
  },
};
