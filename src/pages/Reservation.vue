<template>
    <div class="reservation">
        <navigation />
        <div class="reservation__content">
            <h3>레스토랑 이름</h3>
            <b-carousel
                id="carousel"
                class="reservation__carousel"
                v-model="slide"
                no-animation
                controls
                indicators
                :interval="0"
                label-next=""
                label-prev=""
            >
                <b-carousel-slide>
                    <template #img>
                        <div class="reservation__carousel-image">
                            <b-skeleton-img no-aspect></b-skeleton-img>
                        </div>
                    </template>
                </b-carousel-slide>

                <b-carousel-slide>
                    <template #img>
                        <div class="reservation__carousel-image">
                            <b-skeleton-img no-aspect></b-skeleton-img>
                        </div>
                    </template>
                </b-carousel-slide>

                <b-carousel-slide>
                    <template #img>
                        <div class="reservation__carousel-image">
                            <b-skeleton-img no-aspect></b-skeleton-img>
                        </div>
                    </template>
                </b-carousel-slide>
            </b-carousel>

            <table-card-skeleton class="reservation__card" />
            <table-card-skeleton class="reservation__card" />
            <table-card-skeleton class="reservation__card" />
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import TableCardSkeleton from '@/skeletons/TableCardSkeleton.vue'

export default {
    name: 'Reservation',
    components: {
        Navigation,
        TableCardSkeleton,
    },
    data() {
        return {
            slide: 0,
            sliding: null,
        }
    },
    methods: {
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        },
    },
}
</script>

<style scoped>
.reservation {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.reservation__content {
    max-width: 900px;
    width: 100%;
    height: 100%;
    padding: 40px 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.reservation__carousel {
    max-width: 900px;
    width: 100%;
    height: 320px;
}

.reservation__carousel-image {
    width: 900px;
    height: 320px;
}

.reservation__card {
    margin-top: 20px;
}
</style>
