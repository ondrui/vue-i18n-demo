<template>
  <ul>
    <li
      v-for="locale in supportedLocales"
      :key="locale"
      @click="switchLocale(locale)"
    >
      {{ locale }}
    </li>
  </ul>
</template>
<script>
import { Trans } from "@/plugins/Translation";

export default {
  name: "LocaleSwitcher",
  computed: {
    supportedLocales() {
      return Trans.supportedLocales;
    },
  },
  methods: {
    async switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        const to = this.$router.resolve({ params: { locale } });
        await Trans.changeLocale(locale);
        this.$router.push(to.location).catch(() => {});
      }
    },
  },
};
</script>
<style scoped>
ul {
  padding: 0;
}
li {
  list-style-type: none;
  text-decoration: underline;
  cursor: pointer;
  color: #459ce7;
}
</style>
