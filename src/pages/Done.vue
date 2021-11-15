<template lang="html">
  <div class="done">
      <navigation />
      <div class="done__content">
        <h2 class="done__title">예약 확정</h2>
        <p class="done__subtitle">고객님의 예약 내역입니다.</p>
        <h5 class="done__category"><strong>식당 정보</strong></h5>
        <div class="done__text-set">
          <p class="done__item-title">식당명</p>
          <p class="done__text">63빌딩 레스토랑</p>
        </div>

        <div class="done__text-set">
          <p class="done__item-title">날짜</p>
          <p class="done__text">2021년 11월 11일</p>
        </div>

        <div class="done__text-set">
          <p class="done__item-title">시간</p>
          <p class="done__text">17:00</p>
        </div>

        <div class="done__text-set">
          <p class="done__item-title">좌석</p>
          <p class="done__text">창가 좌석</p>
        </div>

        <div class="done__separator"></div>

        <h5 class="done__category"><strong>예약자 정보</strong></h5>

        <div class="done__text-set">
          <p class="done__item-title">성명</p>
          <p class="done__text">구민영</p>
        </div>

        <div class="done__text-set">
          <p class="done__item-title">전화번호</p>
          <p class="done__text">000-1111-2222</p>
        </div>
      </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Done',
  components: {
    Navigation,
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

.done__title {
  width: 100%;
}

.done__subtitle {
  width: 100%;
  margin-bottom: 30px;
  opacity: 0.6;
}

.done__content {
  width: 900px;
  margin-top: 60px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.done__category {
  width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.done__text-set {
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.done__item-title {
  font-weight: bold;
}

.done__separator {
  width: 500px;
  height: 1px;
  margin-top: 4px;

  background-color: #DEE2E5;
}
</style>
