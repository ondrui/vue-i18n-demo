import { i18n } from "../i18n";

const Trans = {
  get defaultLocale() {
    return process.env.VUE_APP_I18N_LOCALE;
  },
  get supportedLocale() {
    return process.env.VUE_APP_I18N_SUPPORTED_LOCALE;
  },
  get currentLocale() {
    return i18n.locale;
  },
  set currentLocale(locale) {
    i18n.locale = locale;
  },
  changeLocale(locale) {
    if (!Trans.isLocaleSupported(locale))
      return Promise.reject(new Error("Locale not supported!"));
    if (i18n.locale === locale) return Promise.resolve(locale);
    return Trans.loadLocaleFile(locale).then((msgs) => {
      i18n.setLocaleMessage(locale, msgs.default || msgs);
      return Trans.seti18nLocaleInServices(locale);
    });
  },
};

export { Trans };
