<template>
  <router-link to="/">
    <div>
      <p id="return">Retour à la page d'accueil</p>
    </div>
  </router-link>

  <div>
    <img :src="restaurant.image" alt="">
  </div>
  <p>{{ restaurant.name }}</p>
  <p>Note du restaurant: {{ restaurant.note }}</p>
  <p>Temps de livraison: {{ restaurant.drive_time }}</p>
</template>

<script>
import bdd from '@/bdd';
import { useRoute } from 'vue-router';

export default {
    name: 'RestaurantPage',
    setup () {
      const route = useRoute();
      const restaurant = bdd.find((restaurant) => restaurant.name === route.params.name)

      return {
        restaurant
      }
    }
}
</script>

<style lang="scss" scoped>
#return{
  margin: 1.5rem 2rem;
  cursor: pointer;
  pointer-events: none;
  text-decoration: none;
  color: #000;
}

</style>