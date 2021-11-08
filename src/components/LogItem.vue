<template>
  <li>
    <div class="log_date">{{ formatedDate(date) }}</div>
    <div class="log_memo">
      <div class="log_memo_head">
        <div class="percent">仕事: <span class="log_percent" :contentEditable="isEdit" ref="percentWork">{{ percentWork }}</span></div>
        <div class="percent">家事: <span class="log_percent" :contentEditable="isEdit" ref="percentHouse">{{ percentHouse }}</span></div>
        <div class="percent">趣味: <span class="log_percent" :contentEditable="isEdit" ref="percentHobby">{{ percentHobby }}</span></div>
      </div>
      <div class="log_memo_body" :contentEditable="isEdit" ref="memo">{{ memo }}</div>
    </div>

    <div class="log_btnArea" v-if="!isEdit">
      <div class="log_btn" @click="isEdit=true">編集</div>
      <div class="log_btn log_btn_delete" @click="deleteItem(date)">削除</div>
    </div>
    <div class="log_btnArea" v-if="isEdit">
      <div class="log_btn" @click="editItem(date)">保存</div>
      <div class="log_btn" @click="isEdit=false">キャンセル</div>
    </div>
  </li>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'LogItem',
  props: ['date', 'percentWork', 'percentHouse', 'percentHobby', 'memo'],
  emits: ['delete'],
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    // dateを受け取ってそれを 5/28（金）にする
    formatedDate: function(date) {
      const dayjsType = dayjs(date)
      // 日付を日本語表記にするための配列
      const weeks = ['日', '月', '火', '水', '木', '金', '土']
      const formated = `${dayjsType.format('M/D')}（${weeks[dayjsType.day()]}）`
      return formated
    },

    editItem: function(date) {
      this.isEdit = false
      this.$emit('update', {
        date: date,
        work: {
          percent: this.$refs.percentWork.innerHTML,
          memo: this.$refs.memoWork.innerHTML
        },
        house: {
          percent: this.$refs.percentHouse.innerHTML,
          memo: this.$refs.memoHouse.innerHTML
        },
        hobby: {
          percent: this.$refs.percentHobby.innerHTML,
          memo: this.$refs.memoHobby.innerHTML
        }
      })
    },

    deleteItem: function(date) {
      if (window.confirm(`${date}のデータを削除しますか？`)) {
        this.$emit('delete')
      }
    }
  }
}
</script>

<style scoped>
li {
  padding: 5px 0;
  border-bottom: 1px solid #707070;
  display: flex;
  text-align: left;
  align-items: flex-start;
}
li + li {
  margin-top: 20px;
}
.log_date {
  flex-basis: 110px;
  font-size: 18px;
}
.log_memo {
  flex: 1;
  padding-right: 30px;
}

.log_memo_head {
  display: flex;
}
.percent {
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
}
.log_percent {
  font-size: 20px;
  display: inline-block;
  color: slateblue;
}
.log_percent[contentEditable="true"] {
  border: 1px solid #999;
  padding: 2px 5px;
}
.log_memo_body {
  margin-top: 10px;
  white-space: pre-wrap;
}
.log_memo_body[contentEditable="true"] {
  border: 1px solid #999;
  padding: 2px 5px;
}
.log_btn {
  background-color: #444;
  font-size: 15px;
  color: #fff;
  padding: 5px 7px;
  border-radius: 20px;
  cursor: pointer;
  margin: 3px;
}
.log_btnArea {
  display: flex;
}
.log_btn_delete {
  background-color: darkred;
}
</style>