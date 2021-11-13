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
      @update="dataUpdate($event, i)"
      @delete="dataDelete(i)"
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