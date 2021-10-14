<template>
  <!-- <h2>その月の値</h2>
  <div class="filter">
    <select name="" id="">
      <option value="5月">5月</option>
      <option value="6月">6月</option>
    </select>
  </div> -->
  <h2>ログエリア</h2>
  <section v-for="(months,year) in val" :key="year">
    <h3>{{ year }}年</h3>
    <section v-for="(days, month) in months" :key="month">
      <h4>{{ month }}月</h4>
      <ul>
        <LogItem v-for="(item,day) in days"
          :key="day"
          :date="year+month+day"
          :percentWork="item.work.percent"
          :memoWork="item.work.memo"
          :percentHouse="item.house.percent"
          :memoHouse="item.house.memo"
          :percentHobby="item.hobby.percent"
          :memoHobby="item.hobby.memo"
          @update="dataUpdate($event, index)"
          @delete="dataDelete(index)"
        />
      </ul>
    </section>
  </section>
</template>

<script>
import LogItem from './LogItem.vue'

export default {
  name: 'LogArea',
  props: [
    'val'
  ],
  emits: ['delete'],
  components: {
    LogItem
  },
  methods: {
    dataDelete: function(index) {
      this.$emit('delete', index)
    },
    dataUpdate: function(dataSet, index) {
      this.$emit('update', {
        dataSet: dataSet,
        index: index
      })
    }
  }
}
</script>

<style scoped>
  .logItems {
    margin-top: 60px;
  }
</style>