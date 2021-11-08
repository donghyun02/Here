<template lang="html">
  <div class="done">
      <navigation />
      <div class="done__content">
        <h1>예약 확정</h1>
        <h5 class="done__category"><strong>식당 정보</strong></h5>
        <p>식당명: 말랑 파스타</p>
        <p>날짜: 2021년 11월 10일</p>
        <p>시간: 17:00</p>
        <p>좌석: 창가 좌석</p>
        <h5 class="done__category"><strong>예약자 정보</strong></h5>
        <p>성명: 구민영</p>
        <p>전화번호: 000-1111-2222</p>
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
}

.done__content {
  width: 900px;
  margin-top: 60px;
}

.done__category {
  margin-top: 40px;
}
</style>
