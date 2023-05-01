import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "@/i18n";

function load(component) {
  return () => import(`@/views/${component}.vue`);
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/:locale",
    component: {
      template: "<router-view></router-view>",
    },
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale;
      const supported_locale =
        process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",");
      if (!supported_locale.includes(locale)) return next("en");
      if (i18n.locale !== locale) {
        i18n.locale = locale;
      }
      return next();
    },
    children: [
      {
        path: "",
        name: "Home",
        component: load("Home"),
      },
      {
        path: "about",
        name: "About",
        component: load("About"),
      },
    ],
  },
  {
    path: "*",
    redirect() {
      return process.env.VUE_APP_I18N_SUPPORTED_LOCALE;
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
