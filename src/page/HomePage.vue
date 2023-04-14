<template>
    <div class="home">
        <div class="header">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="" srcset="">
            <input type="text" placeholder="De quoi avez-vous envie ?">
        </div>
        <RestaurantRow v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data"/>
    </div>
</template>

<script>
    import RestaurantRow from '@/components/RestaurantRow.vue';
    import bdd from '@/bdd';
    import { onMounted, ref } from 'vue';

    export default {
        name: 'HomePage',
        components: {
            RestaurantRow,
        },
        setup(){
            class Restaurant {
                constructor (name, note, image, drive_time) {
                    this.name = name;
                    this.note = note;
                    this.image = image;
                    this.drive_time = drive_time;
                }
            }

            let data_restaurant = ref([]);

            const makeDataRestaurant = () => {
                let three_restaurant = [];

                for (const restaurant of bdd) {
                    const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time);

                    if (three_restaurant.length === 2){
                        three_restaurant.push(new_restaurant);
                        data_restaurant.value.push(three_restaurant);
                        three_restaurant = [];
                    }else{
                        three_restaurant.push(new_restaurant);
                    }
                }
            } 
            onMounted(makeDataRestaurant);

            return {
                data_restaurant,
            }
        },
    }
</script>

<style lang="scss">
.home{
    .header{
        display: flex;
        height: 7.5rem;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        img{
            width: 12.5rem;
        }

        input{
            background-color: #f6f6f6;
            border: none;
            height: 3.75rem;
            width: 25rem;
            outline: none;
            padding-left: 1.25rem;
        }

    }
}

</style>