<template lang="html">
  <div class="done">
    <navigation />
    <div class="done__content">
      <h2 class="done__title">예약 확정</h2>
      <p class="done__subtitle">고객님의 예약 내역입니다.</p>
      <h4 class="done__category"><strong>식당 정보</strong></h4>
      <div class="done__text-set">
        <p class="done__item-title">식당명</p>
        <b-skeleton width="40%" v-if="isLoading"></b-skeleton>
        <p class="done__text" v-else>{{ reservation.seat.restaurant.name }}</p>
      </div>

      <div class="done__text-set">
        <p class="done__item-title">날짜</p>
        <b-skeleton width="30%" v-if="isLoading"></b-skeleton>
        <p class="done__text" v-else>{{ formatDate(reservation.reservedDatetime) }}</p>
      </div>

      <div class="done__text-set">
        <p class="done__item-title">시간</p>
        <b-skeleton width="20%" v-if="isLoading"></b-skeleton>
        <p class="done__text" v-else>{{ formatTime(reservation.reservedDatetime) }}</p>
      </div>

      <div class="done__text-set">
        <p class="done__item-title">좌석</p>
        <b-skeleton width="40%" v-if="isLoading"></b-skeleton>
        <p class="done__text" v-else>{{ reservation.seat.name }}</p>
      </div>

      <div class="done__separator"></div>

      <h4 class="done__category"><strong>예약자 정보</strong></h4>

      <div class="done__text-set">
        <p class="done__item-title">성명</p>
        <b-skeleton width="20%" v-if="isLoading"></b-skeleton>
        <p class="done__text" v-else>{{ reservation.bookerName }}</p>
      </div>

      <div class="done__text-set">
        <p class="done__item-title">전화번호</p>
        <b-skeleton width="30%" v-if="isLoading"></b-skeleton>
        <p class="done__text" v-else>{{ reservation.bookerPhoneNumber }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('RestaurantsModule')

export default {
  name: 'Done',
  components: {
    Navigation,
  },
  computed: {
    ...mapState({
      reservation: 'reservation',
      isLoading: 'isLoading',
    }),
  },
  methods: {
    formatDate(datetimeString) {
      if (!datetimeString) {
        return
      }
      const date = datetimeString.split('T')[0]
      const [year, month, day] = date.split('-')
      return `${year}년 ${month}월 ${day}일`
    },
    formatTime(datetimeString) {
      if (!datetimeString) {
        return
      }
      const time = datetimeString.split('T')[1]
      const [hour, minute] = time.split(':')
      return `${hour}:${minute}`
    },
  },
}
</script>

<style lang="css" scoped>
.done {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  user-select: none;
}

.done__content {
  width: 900px;
  padding: 40px 0 120px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.done__title {
  width: 100%;

  font-weight: bold;
}

.done__subtitle {
  width: 100%;
  margin-bottom: 20px;

  opacity: 0.6;
  font-weight: bold;
}

.done__category {
  width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;

  font-weight: bold;
}

.done__text-set {
  width: 500px;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.done__item-title {
  margin: 0;
  font-weight: bold;
}

.done__text {
  color: #858d94;
  font-weight: bold;
}

.done__separator {
  width: 500px;
  height: 1px;
  margin-top: 4px;

  background-color: #DEE2E5;
}
</style>
