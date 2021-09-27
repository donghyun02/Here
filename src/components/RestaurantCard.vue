<template>
    <div class="restaurant-card">
        <div class="restaurant-card__image">
            <b-skeleton-img no-aspect></b-skeleton-img>
        </div>
        <div class="restaurant-card__content">
            <p class="restaurant-card__name"><b-skeleton width="10%"></b-skeleton></p>
            <p class="restaurant-card__rating"><b-skeleton width="20%"></b-skeleton></p>
            <p class="restaurant-card__address"><b-skeleton width="40%"></b-skeleton></p>
        </div>
        <div class="restaurant-card__button-wrapper">
            <b-button disabled>예약하기</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RestaurantCard',
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
