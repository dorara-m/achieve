<template>
  <!-- <h2>その月の値</h2>
  <div class="filter">
    <select name="" id="">
      <option value="5月">5月</option>
      <option value="6月">6月</option>
    </select>
  </div> -->
  <h2>ログエリア</h2>
  <ul>
    <LogItem v-for="(item,i) in items"
      :key="i"
      :date="item.date"
      :percentWork="item.percentWork"
      :percentHouse="item.percentHouse"
      :percentHobby="item.percentHobby"
      :memo="item.memo"
      @update="dataUpdate"
      @delete="dataDelete(item.date)"
    />
  </ul>
</template>

<script>
import LogItem from './LogItem.vue'

export default {
  name: 'LogArea',
  props: [
    'items'
  ],
  emits: ['delete'],
  components: {
    LogItem
  },
  methods: {
    dataDelete: function(date) {
      this.$emit('delete', date)
    },
    dataUpdate: function(dataSet) {
      this.$emit('update', dataSet)
    }
  }
}
</script>

<style scoped>
  .logItems {
    margin-top: 60px;
  }
</style>