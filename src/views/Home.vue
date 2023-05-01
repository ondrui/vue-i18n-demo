
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <p>{{ $t('main.welcome', {company: 'FoodDisign'}) }}</p>
    <p>{{ $tc('main.new_message', 10) }}</p>
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $n(100, 'currency') }}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>
