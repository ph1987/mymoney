import en from "./locales/en";
import es from "./locales/es";
import pt from "./locales/pt";

export type Translation = {
  [key: string]: string;
};

const languages: Record<string, Translation> = {
  pt,
  en,
	es
};

export function getTranslation(lang: string = 'en'): Translation {
  return languages[lang] || languages['en'];
}