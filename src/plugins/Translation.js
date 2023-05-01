import { i18n } from "../i18n";

const Trans = {
  get defaultLocale() {
    return process.env.VUE_APP_I18N_LOCALE;
  },
  get supportedLocales() {
    return process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',');
  },
  get currentLocale() {
    return i18n.locale;
  },
  set currentLocale(locale) {
    i18n.locale = locale;
  },
  async changeLocale(locale) {
    if (!Trans.isLocaleSupported(locale))
      return Promise.reject(new Error("Locale not supported!"));
    if (i18n.locale === locale) return Promise.resolve(locale);
    const msgs = await Trans.loadLocaleFile(locale);
    console.log(msgs);
    i18n.setLocaleMessage(locale, msgs.default || msgs);
    return Trans.seti18nLocaleInServices(locale);
  },
  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale);
  },
  loadLocaleFile(locale) {
    return import(`@/locales/${locale}.json`);
  },
  seti18nLocaleInServices(locale) {
    Trans.currentLocale = locale;
    document.querySelector("html").setAttribute("lang", locale);
    return locale;
  },
  routeMiddleware(to, from, next) {
    const locale = to.params.locale;
    if (!Trans.isLocaleSupported(locale)) return next(Trans.defaultLocale);
    return Trans.changeLocale(locale).then(() => next());
  },
  i18nRoute(to) {
    return {
      ...to,
      params: { locale: this.currentLocale, ...to.params },
    };
  },
};

export { Trans };
