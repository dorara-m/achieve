import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

var STORAGE_KEY = 'my-date'
var itemStorage = {
  fetch: function() {
    var items = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    items.forEach(function(item, index) {
      item.id = index
    })
    itemStorage.uid = items.length
    return items
  },
  save: function(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}

createApp(App).mount('#app')
