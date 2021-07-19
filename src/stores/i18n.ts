import { derived } from 'svelte/store';
import { locale } from 'svelte-i18n';
import { INIT_OPTIONS } from '../i18n';

export interface Translations {
  en: string;
  ja?: string;
  'zh-cn'?: string;
}

const inlineTranslate = derived(
  locale,
  ($locale) => (translations: Translations) => {
    if ($locale in translations) {
      return translations[$locale];
    }
    return translations[INIT_OPTIONS.fallbackLocale];
  },
);
export const i = inlineTranslate;