<template>
  <div id="app">
    <localeSwitcher/>
    <p>{{ $t('main.welcome', {company: 'FoodDesign'})}}</p>
  </div>
</template>
<script>
import LocaleSwitcher from "./components/LocaleSwitcher.vue"

export default {
  components: { LocaleSwitcher },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
