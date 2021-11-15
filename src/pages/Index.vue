<template>
  <div class="index">
    <navigation />
    <div class="index__content" v-if="!isFetched">
      <restaurant-card-skeleton class="index__card" />
      <restaurant-card-skeleton class="index__card" />
      <restaurant-card-skeleton class="index__card" />
    </div>
    <div class="index__content" v-else>
      <restaurant-filter class="index__filter" />
      <restaurant-card
        class="index__card"
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :id="restaurant.id"
        :name="restaurant.name"
        :imageURL="restaurant.image"
        :rating="restaurant.rating"
        :address="restaurant.address"
      />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import RestaurantFilter from '@/components/RestaurantFilter.vue'
import RestaurantCard from '@/components/RestaurantCard.vue'
import RestaurantCardSkeleton from '@/skeletons/RestaurantCardSkeleton.vue'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('RestaurantsModule')

export default {
  name: 'Index',
  components: {
    Navigation,
    RestaurantFilter,
    RestaurantCard,
    RestaurantCardSkeleton,
  },
  computed: {
    ...mapState({
      restaurants: 'restaurants',
      isFetched: 'isFetched',
    }),
  },
  methods: {
    ...mapActions([
        'fetchRestaurants',
    ]),
  },
  created() {
    this.fetchRestaurants()
  },
}
</script>

<style scoped>
.index {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.index__content {
  max-width: 900px;
  width: 100%;
  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.index__filter {
  width: 100%;
}

.index__card {
  margin-top: 10px;
}
</style>
