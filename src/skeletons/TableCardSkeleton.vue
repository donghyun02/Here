<template>
    <div class="table-card-skeleton">
        <div class="table-card-skeleton__image">
            <b-skeleton-img no-aspect></b-skeleton-img>
        </div>
        <div class="table-card-skeleton__content">
            <p class="table-card-skeleton__name"><b-skeleton width="30%"></b-skeleton></p>
            <p class="table-card-skeleton__rating"><b-skeleton width="50%"></b-skeleton></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableCardSkelton',
}
</script>

<style scoped>
.table-card-skeleton {
    max-width: 900px;
    width: 100%;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.table-card-skeleton__image {
    width: 180px;
    height: 180px;
}

.table-card-skeleton__content {
    max-width: 630px;
    width: 100%;
    padding: 20px;
}

.table-card-skeleton__button-wrapper {
    width: 90px;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>