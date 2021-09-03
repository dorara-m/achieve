<template>
  <h1>あちーぶ on Vite</h1>
  <p>日々の予定達成率を記録していくアプリです。Vueのビルドツール「Vite」をつかっています。</p>
  <!-- <button @click="sample">サンプル</button> -->
  <InputArea v-on:add="handleAdd" />
  <LogArea :val="items" @delete="handleDelete" @update="handleUpdate" />
  <!-- <AverageArea :val="items" /> -->
</template>

<script>
import InputArea from './components/InputArea.vue'
import LogArea from './components/LogArea.vue'
import AverageArea from './components/AverageArea.vue'
import dayjs from 'dayjs'

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
    // sample: function() {
    //   console.log('js-sample-test')
    // },
    handleAdd: function(dataSet) {
      
      // const dayArray = dataSet.date.split('-');
      // const year = dayArray[0]
      // const month = dayArray[1]
      // const day = dayArray[2]

      // // ここでまず年が一致するデータを探す
      // const yearIndex = Object.keys(this.items).indexOf(year)
      // if (yearIndex !== -1) {
      //   // あった場合、さらに月があるか検索
      //   const monthIndex = Object.keys(this.items[year]).indexOf(month)
      //   if (monthIndex !== -1) {
      //     // 月があった場合
      //     const dayIndex = Object.keys(this.items[year][month]).indexOf(day)
      //     if (dayIndex !== -1) {
      //       // 日があった場合
      //       console.log(day+'あったよ')
      //     } else {
      //       console.log(day+'なかったよ')
      //     }
      //   } else {
      //     // 月をつくる
      //     console.log(month+'なかったよ')
      //   }
      // } else {
      //   // 当てはまる年がなかったら年の枠を作る
      //   console.log(year+'なかったよ')
      // }
      // return



      // datasetのdateと、itemsに既にあるdateを1つ1つ比較、同値のものあればその配列indexを保持しておいて、そこにdatasetをまるっと上書き
      for (let i=0; i<this.items.length; i++) {
        if (dataSet.date == this.items[i].date) {
          this.items[i] = dataSet
          this.saveItems()
          return
        }
      }
      
      // 追加する前の状態で最新の日付をとっておく
      const latestDate = this.items[0].date

      this.items.unshift(dataSet)

      // 日付が最新より古い場合だけ日付順sortを発動する。
      if (dayjs(dataSet.date).diff(dayjs(latestDate), 'day') < 0) {
        console.log('過去の日付')
        // ここでitemsを日付順に降順
        this.items.sort((a,b) => {
          return dayjs(b.date) - dayjs(a.date)
        })
      }


      this.saveItems()
    },
    handleDelete: function(index) {
      this.items.splice(index, 1)
      this.saveItems()
    },
    handleUpdate: function(data) {
      const newData = data.dataSet
      const i = data.index
      this.items[i].percentWork = newData.percentWork
      this.items[i].percentHouse = newData.percentHouse
      this.items[i].percentHobby = newData.percentHobby
      this.items[i].memo = newData.memo
      this.items[i].memo1 = newData.memo1
      this.items[i].memo2 = newData.memo2
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
