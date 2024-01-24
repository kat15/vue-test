import {createI18n} from 'vue-i18n';
import {messages} from './locales/index.js';

export default createI18n({
    fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'pl',
    legacy: false,
    locale: import.meta.env.VITE_I18N_LOCALE || 'pl',
    // messages: messages
    messages: messages
});