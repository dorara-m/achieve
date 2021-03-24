<template>
  <h1>あちーぶ on Vite</h1>
  <p>日々の予定達成率を記録していくアプリです。Vueのビルドツール「Vite」をつかっています。</p>
  <InputArea v-on:add="handleAdd" />
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{item.date}}, {{item.percent}}%
    </li>
  </ul>
  <!-- <LogArea /> -->
</template>

<script>
// import { ref } from '@vue/reactivity'

import InputArea from './components/InputArea.vue'
import LogArea from './components/LogArea.vue'

export default {
  name: 'App',
  data() {
    return {
      items: []
    }
  },
  methods: {
    handleAdd: function(dataSet) {
      this.items.push(dataSet)
      console.log(dataSet)
      console.log(this.items)
    }
  },
  
  // setup() {
  //   const items = ref([])
  //   const handleAdd = function(dateSet) {
  //     items.value.push(dateSet)
  //     console.log(items.value)
  //   }
  //   return {items, handleAdd}
  // },
  components: {
    InputArea,
    LogArea
  }
}
</script>
