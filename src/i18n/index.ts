// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import uzb from "./locales/uzb.json";

const storedLanguage = localStorage.getItem("language");
const browserLanguage = navigator.language.split("-")[0]; // e.g., 'en-US' -> 'en'
const fallbackLanguage = "uzb"; // Default language
const language =
	storedLanguage || (browserLanguage in { en, ru, uzb } ? browserLanguage : fallbackLanguage);

const resources = {
	en: { translation: en },
	ru: { translation: ru },
	uzb: { translation: uzb },
};

i18n.use(initReactI18next).init({
	resources,
	lng: language,
	fallbackLng: fallbackLanguage,
	interpolation: {
		escapeValue: false, // React already escapes values
	},
	debug: import.meta.env.MODE === "development", // Debug in development mode
});

export default i18n;
