<template>
    <div class="table-card">
        <div class="table-card__image-warpper">
          <img class="table-card__image" :src="imageURL" width="180px" height="180px">
        </div>
        <div class="table-card__content">
            <p class="table-card__name">{{ name }}</p>
            <p class="table-card__description">{{ description }}</p>
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
}

.table-card__content {
    max-width: 720px;
    width: 100%;
    padding: 20px;
}

.table-card__button-wrapper {
    width: 90px;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
