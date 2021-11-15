<template>
    <div class="table-card">
        <div class="table-card__image-warpper">
          <img class="table-card__image" :src="imageURL" width="180px" height="180px">
        </div>
        <div class="table-card__content">
            <h3 class="table-card__text">{{ name }}</h3>
            <p class="table-card__sub-text">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableCard',
    props: ['imageURL', 'name', 'description'],
}
</script>

<style scoped>
.table-card {
    max-width: 900px;
    width: 100%;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}

.table-card__image {
    width: 180px;
    height: 180px;
    border-radius: 10px;
}

.table-card__content {
    max-width: 720px;
    width: 100%;
    padding: 20px;
}

.table-card__text {
  margin-bottom: 20px;
  font-weight: bold;
}

.table-card__sub-text {
  margin: 10px 0 0;
  font-weight: bold;
  color: #858d94;
}

.table-card__button-wrapper {
    width: 90px;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
