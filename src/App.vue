<template>
  <h1>あちーぶ on Vite</h1>
  <p>日々の予定達成率を記録していくアプリです。Vueのビルドツール「Vite」をつかっています。</p>
  <button @click="sample">サンプル</button>
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
      items: {
        "2020": {
          "08": {
            "01": {
              "work": {
                "percent": 20,
                "memo": "20しかできなかったよ。"
              },
              "house": {
                "percent": 100,
                "memo": "えらい"
              },
              "hobby": {
                "percent": 80,
                "memo": "うわーーーー"
              }
            }
          }
        },
        "2021": {
          "09": {
            "01": {
              "work": {
                "percent": 20,
                "memo": "20しかできなかったよ。"
              },
              "house": {
                "percent": 100,
                "memo": "えらい"
              },
              "hobby": {
                "percent": 80,
                "memo": "うわーーーー"
              }
            },
            "02": {
              "work": {
                "percent": 20,
                "memo": "20しかできなかったよ。"
              },
              "house": {
                "percent": 100,
                "memo": "えらい"
              },
              "hobby": {
                "percent": 80,
                "memo": "うわーーーー"
              }
            }
          },
          "10": {
            "01": {
              "work": {
                "percent": 20,
                "memo": "20しかできなかったよ。"
              },
              "house": {
                "percent": 100,
                "memo": "えらい"
              },
              "hobby": {
                "percent": 80,
                "memo": "うわーーーー"
              }
            },
            "02": {
              "work": {
                "percent": 20,
                "memo": "20しかできなかったよ。"
              },
              "house": {
                "percent": 100,
                "memo": "えらい"
              },
              "hobby": {
                "percent": 80,
                "memo": "うわーーーー"
              }
            }
          }
        }
      }
    }
  },
  mounted() {
    // if (localStorage.getItem('datalist')) {
    //   this.items = JSON.parse(localStorage.getItem('datalist'))
    // }
  },
  methods: {
    sample: function() {
      console.log('sample run')
    },
    handleAdd: function(dataSet) {
      
      // 日付を分解して、重複するデータがないか検索
      const dayArray = dataSet.date.split('-');
      const year = dayArray[0]
      const month = dayArray[1]
      const day = dayArray[2]

      // ここでまず年が一致するデータを探す
      const yearIndex = Object.keys(this.items).indexOf(year)
      if (yearIndex !== -1) {
        // あった場合、さらに月があるか検索
        const monthIndex = Object.keys(this.items[year]).indexOf(month)
        if (monthIndex !== -1) {
          // 月があった場合
          const dayIndex = Object.keys(this.items[year][month]).indexOf(day)
          if (dayIndex !== -1) {
            // 日があった場合
            console.log(day+'あったよ')
          } else {
            this.items[year][month][day] = dataSet
            console.log(this.items[year][month][day])
          }
        } else {
          console.log(month+'なかったよ')
          // 月をつくる（空オブジェクトをわたす
          this.items[year][month] = {}
          // 実際のデータを挿入
          this.items[year][month][day] = dataSet
        }
      } else {
        // 当てはまる年がなかったら年の枠を作る
        console.log(year+'なかったよ')
        // 年と月をつくる（空オブジェクトをわたす
        this.items[year] = {}
        this.items[year][month] = {}
        // 実際のデータを挿入
        this.items[year][month][day] = dataSet
      }
      return

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
