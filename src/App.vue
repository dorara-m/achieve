<template>
  <h1>あちーぶ on Vite</h1>
  <p>日々の予定達成率を記録していくアプリです。Vueのビルドツール「Vite」をつかっています。</p>
  <InputArea v-on:add="handleAdd" />
  <LogArea :val="items" />
  <AverageArea :val="items" />
</template>

<script>
import InputArea from './components/InputArea.vue'
import LogArea from './components/LogArea.vue'
import AverageArea from './components/AverageArea.vue'

export default {
  name: 'App',
  components: {
    InputArea,
    LogArea,
    AverageArea
  },
  data() {
    return {
      items: []
    }
  },
  mounted() {
    if (localStorage.getItem('datalist')) {
      this.items = JSON.parse(localStorage.getItem('datalist'))
    }
  },
  methods: {
    handleAdd: function(dataSet) {
      // datasetのdateと、itemsに既にあるdateを1つ1つ比較、同値のものあればその配列indexを保持しておいて、そこにdatasetをまるっと上書き
      for (let i=0; i<this.items.length; i++) {
        if (dataSet.date == this.items[i].date) {
          this.items[i] = dataSet
          this.saveItems()
          return
        }
      }
      
      this.items.unshift(dataSet)
      this.saveItems()
    },
    saveItems() {
      const parsed = JSON.stringify(this.items)
      localStorage.setItem('datalist', parsed);
    }
  },

  // setupでうまく動作せず、いつか調査↓

  // setup() {
  //   const items = ref([])
  //   const handleAdd = function(dateSet) {
  //     items.value.push(dateSet)
  //     console.log(items.value)
  //   }
  //   return {items, handleAdd}
  // },
}
</script>
