<template>
    <div class="restaurant-card">
        <img class="restaurant-card__image" :src="imageURL">
        <div class="restaurant-card__content">
            <h3 class="restaurant-card__name">{{ name }}</h3>
            <p class="restaurant-card__rating">{{ rating || '후기 없음' }}</p>
            <p class="restaurant-card__address">{{ address }}</p>
        </div>
        <div class="restaurant-card__button-wrapper">
            <b-button disabled>예약하기</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RestaurantCard',
    props: ['imageURL', 'name', 'rating', 'address'],
}
</script>

<style scoped>
.restaurant-card {
    max-width: 900px;
    width: 100%;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.restaurant-card__image {
    width: 180px;
    height: 180px;
}

.restaurant-card__content {
    max-width: 630px;
    width: 100%;
    padding: 20px;
}

.restaurant-card__button-wrapper {
    width: 90px;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
