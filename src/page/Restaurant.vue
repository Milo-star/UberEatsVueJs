<template>
  <router-link to="/">
    <div>
      <p id="return">Retour à la page d'accueil</p>
    </div>
  </router-link>

  <div>
    <div>
      <img :src="restaurant.image" alt="">
    </div>
    <p>Nom du restaurant: <b>{{ restaurant.name }}</b></p>
    <p>Note du restaurant: <b>{{ restaurant.note }}</b></p>
    <p>Temps de livraison: <b>{{ restaurant.drive_time }}</b></p>
  </div>
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

  img{
    width: 25%;
    height: 25%;
  }

</style>