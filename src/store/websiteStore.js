import { defineStore } from 'pinia'
import store from "store2"


const useWebsiteStore = defineStore('websiteStore', {
  state() {
    return {
      websites: store('websites') || []
    }
  },
  actions: {
    add(newItem) {
      const isHas = this.websites.some(item => {
        return item.url === newItem.url
      })
      if (isHas) {
        window.myApi.alert('此网站已经被添加')
      } else {
        this.websites.unshift(newItem)
        store('websites', this.websites)
      }
    },
    deleteItem(url) {
      this.websites = this.websites.filter(item => {
        return item.url !== url
      })
      store('websites', this.websites)
    }
  },
  getters: {
    find() {
      return (keyWords) => {
        return this.websites.filter(item => {
          let patten = new RegExp(keyWords, 'i')
          return patten.test(item.title)
          // return item.title.includes(keyWords)
        })
      }
    }
  }
})

export default useWebsiteStore