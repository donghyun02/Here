<template>
  <div class="filter">
    <b-button v-b-toggle.collapse-1 variant="primary">필터<b-icon-filter /></b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <b-button class="filter__button" size="sm">전체</b-button>
        <b-button class="filter__button" size="sm">뷔페</b-button>
        <b-button class="filter__button" size="sm">레스토랑</b-button>
        <b-button class="filter__button" size="sm">일반식당</b-button>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { BIconFilter } from 'bootstrap-vue'

export default {
  name: 'RestaurantFilter',
  components: {
    BIconFilter,
  },
}
</script>

<style lang="css" scoped>
.filter {
  width: 100%;
}

.filter__button:not(:first-of-type) {
  margin-left: 10px;
}
</style>
