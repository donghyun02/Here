<template>
    <div class="index">
        <navigation />
        <div class="index__content">
            <restaurant-card class="index__card" />
            <restaurant-card class="index__card" />
            <restaurant-card class="index__card" />
            <restaurant-card class="index__card" />
            <restaurant-card class="index__card" />
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import RestaurantCard from '@/components/RestaurantCard.vue'

export default {
    name: 'Index',
    components: {
        Navigation,
        RestaurantCard,
    }
}
</script>

<style scoped>
.index__content {
    margin: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.index__card {
    margin-top: 10px;
}
</style>
