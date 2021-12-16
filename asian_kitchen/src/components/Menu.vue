<template>
  <div class="container text-center">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <Card
      v-for="food in $store.state.foods"
      :key="food.id" 
      :data="food" /> <!-- Burada Vuex yardımı ile yemeklerimizi getirdik ve for ile döndürdük. data prop'u içerisinde ise food object'imizi gönderdik 'Card' componenti içerisine -->
    </div>
  </div>
</template>

<script>
import Card from "../partials/Card";
export default {
  data() {
    return {};
  },
  components: {
    Card,
  },
};
</script>