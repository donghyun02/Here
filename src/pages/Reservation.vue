<template>
    <div class="reservation">
        <navigation />
        <div class="reservation__content">
            <h3>{{ restaurant.name }}</h3>
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
                <b-carousel-slide v-for="carousel in restaurant.carousel" :key="carousel.id">
                    <template #img>
                        <img class="reservation__carousel-image" :src="carousel.image">
                    </template>
                </b-carousel-slide>
            </b-carousel>

            <table-card
              class="reservation__card"
              @click.native="showModal"
              v-for="seat in restaurant.seats"
              :key="seat.id"
              :name="seat.name"
              :imageURL="seat.image"
              :description="seat.description"
            />

            <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="예약하기"
                hide-header-close
            >
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group
                        label="예약자 성명"
                        label-for="name-input"
                        invalid-feedback="예약자 성명을 입력 부탁드립니다."
                        :state="nameState"
                    >
                        <b-form-input
                            id="name-input"
                            v-model="name"
                            :state="nameState"
                            required
                        >
                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="전화번호"
                        label-for="phone-number-input"
                        invalid-feedback="전화번호를 입력 부탁드립니다."
                        :state="phoneNumberState"
                    >
                        <b-form-input
                            id="phone-number-input"
                            v-model="phoneNumber"
                            :state="phoneNumberState"
                            required
                        >
                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="날짜"
                        label-for="date-input"
                        invalid-feedback="예약날짜를 선택 부탁드립니다."
                        :state="dateState"
                    >
                        <b-form-datepicker id="date-input" v-model="date" :state="dateState" required></b-form-datepicker>
                    </b-form-group>

                    <b-form-group
                        label="시간"
                        label-for="time-input"
                        invalid-feedback="예약시간을 선택 부탁드립니다."
                        :state="timeState"
                    >
                        <b-form-select id="time-input" class="reservation__time mb-2" size="md" v-model="time" :options="timeOptions">{{ time }}</b-form-select>
                    </b-form-group>
                </form>

                <template #modal-footer>
                    <b-button size="sm" variant="dark" @click="reserve">
                        예약
                    </b-button>
                    <b-button size="sm" variant="secondary" @click="cancel">
                        취소
                    </b-button>
                </template>
            </b-modal>
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import TableCard from '@/components/TableCard.vue'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('RestaurantsModule')

export default {
    name: 'Reservation',
    components: {
        Navigation,
        TableCard,
    },
    data() {
        return {
            slide: 0,
            nameState: null,
            phoneNumber: '',
            phoneNumberState: null,
            date: '',
            dateState: null,
            time: null,
            timeOptions: [
                { value: null, text: '시간을 선택해주세요.' },
                { value: '13:00', text: '13:00' },
                { value: '14:00', text: '14:00' },
                { value: '15:00', text: '15:00' },
                { value: '16:00', text: '16:00' },
                { value: '17:00', text: '17:00' },
                { value: '18:00', text: '18:00' },
            ],
            timeState: null,
        }
    },
    computed: {
      ...mapState({
          restaurant: 'restaurant',
      }),
    },
    methods: {
        ...mapActions([
            'fetchRestaurant',
        ]),
        showModal() {
            this.$refs['modal'].show()
        },
        hideModal() {
            this.$refs['modal'].hide()
        },
        reserve() {
            this.$router.push('/done')
        },
        cancel() {
            this.hideModal()
        },
    },
    created() {
      this.fetchRestaurant(this.$route.params.id);
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

    user-select: none;
}

.reservation__content {
    max-width: 900px;
    width: 100%;
    height: 100%;
    padding: 40px 0 120px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.reservation__carousel {
    max-width: 900px;
    width: 100%;
    height: 320px;
    margin-bottom: 20px;
}

.reservation__carousel-image {
    width: 900px;
    height: 320px;
    object-fit: cover;
}

.reservation__card {
    margin-top: 10px;
}

.reservation__time {
    width: 100%;
    height: 36px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding-left: 5px;
    margin-right: 15px;
}
</style>
