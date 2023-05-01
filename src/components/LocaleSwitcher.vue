<template>
  <ul>
    <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
      {{ locale }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
    };
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        const to = this.$router.resolve({ params: { locale } });
        console.log(to);
        this.$router.push(to.location);
      }
    },
  },
};
</script>
<style scoped>
li {
  list-style-type: none;
  text-decoration: underline;
  cursor: pointer;
  color: #459ce7;
}
</style>
