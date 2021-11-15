<template>
  <div class="restaurant-card">
    <img class="restaurant-card__image" :src="imageURL">
    <div class="restaurant-card__content">
      <h3 class="restaurant-card__text">{{ name }}</h3>
      <p class="restaurant-card__sub-text">{{ rating || '후기 없음' }}</p>
      <p class="restaurant-card__sub-text">{{ address }}</p>
      <div class="restaurant-card__type-wrapper">
        <div class="restaurant-card__type" v-for="type in types" :key="type.code">
          <span>#{{ type.name }}</span>
        </div>
      </div>
    </div>
    <div class="restaurant-card__button-wrapper">
      <b-button class="restaurant-card__button" :to="`/reservation/${id}`">예약하기</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantCard',
  props: ['id', 'imageURL', 'name', 'rating', 'address', 'types'],
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
  border-radius: 10px;
}

.restaurant-card__content {
  max-width: 630px;
  width: 100%;
  padding: 20px;
}

.restaurant-card__text {
  margin-bottom: 20px;
  font-weight: bold;
}

.restaurant-card__sub-text {
  margin: 10px 0 0;
  font-weight: bold;
  color: #858d94;
}

.restaurant-card__type-wrapper {
  margin-top: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.restaurant-card__type {
  width: fit-content;
  padding: 6px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(33, 37, 41);
  color: white;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
}

.restaurant-card__type:not(:first-of-type) {
  margin-left: 4px;
}

.restaurant-card__button-wrapper {
  width: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.restaurant-card__button {
  background-color: rgb(33, 37, 41);
}
</style>
