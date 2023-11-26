/* eslint-disable */

import {createI18n} from 'vue-i18n';
import {App} from 'vue';

const messages = {
    fr: require('@/translations/fr.json'),
    en: require('@/translations/en.json'),
    // Add more languages as needed
};

// Create an instance of `vue-i18n`
export const i18n = createI18n({
    legacy: false, // Use Composition API (optional, for Vue 3)
    locale: 'fr', // Set the default locale
    fallbackLocale: 'en', // Set the fallback locale
    messages, // Pass in messages
});

export function switchLanguage(lang: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    i18n.global.locale = lang;
    console.log(lang, i18n.global.locale);
}

// Plugin to install i18n instance
export function setupI18n(app: App) {
    app.use(i18n);
}
