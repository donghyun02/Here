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

            <table-card-skeleton class="reservation__card" @click.native="showModal" />
            <table-card-skeleton class="reservation__card" @click.native="showModal" />
            <table-card-skeleton class="reservation__card" @click.native="showModal" />

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
            name: '',
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
            ],
            timeState: null,
        }
    },
    methods: {
        showModal() {
            this.$refs['modal'].show()
        },
        hideModal() {
            this.$refs['modal'].hide()
        },
        reserve() {
            console.log('test')
        },
        cancel() {
            this.hideModal()
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

.reservation__time {
    width: 100%;
    height: 36px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding-left: 5px;
    margin-right: 15px;
}
</style>
