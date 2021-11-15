<template>
  <div class="filter">
    <b-button v-b-toggle.collapse-1 variant="primary">필터<b-icon-filter /></b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <b-button class="filter__button" @click="changeType('')" size="sm">전체</b-button>
        <b-button class="filter__button" @click="changeType('BUFFET')" size="sm">뷔페</b-button>
        <b-button class="filter__button" @click="changeType('RESTAURANT')" size="sm">레스토랑</b-button>
        <b-button class="filter__button" @click="changeType('NORMAL')" size="sm">일반식당</b-button>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { BIconFilter } from 'bootstrap-vue'
import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('RestaurantsModule')

export default {
  name: 'RestaurantFilter',
  components: {
    BIconFilter,
  },
  methods: {
    ...mapActions([
      'setType',
    ]),
    changeType(code) {
      this.setType(code);
    },
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
