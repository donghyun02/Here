<template>
    <div class="restaurant-card-skeleton">
        <div class="restaurant-card-skeleton__image">
            <b-skeleton-img no-aspect></b-skeleton-img>
        </div>
        <div class="restaurant-card-skeleton__content">
            <p class="restaurant-card-skeleton__name"><b-skeleton width="10%"></b-skeleton></p>
            <p class="restaurant-card-skeleton__rating"><b-skeleton width="20%"></b-skeleton></p>
            <p class="restaurant-card-skeleton__address"><b-skeleton width="40%"></b-skeleton></p>
        </div>
        <div class="restaurant-card-skeleton__button-wrapper">
            <b-button disabled>예약하기</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RestaurantCardSkeleton',
}
</script>

<style scoped>
.restaurant-card-skeleton {
    max-width: 900px;
    width: 100%;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.restaurant-card-skeleton__image {
    width: 180px;
    height: 180px;
}

.restaurant-card-skeleton__content {
    max-width: 630px;
    width: 100%;
    padding: 20px;
}

.restaurant-card-skeleton__button-wrapper {
    width: 90px;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
