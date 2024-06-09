<script setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import useWebsiteStore from '@/store/websiteStore.js'
const websiteStore = useWebsiteStore()
const { websites } = storeToRefs(websiteStore)
const { deleteItem } = websiteStore

</script>

<template>
  <div class="list-wrap">
    <p v-if="websites.length < 1" id="no-item">暂无数据</p>
    <div v-else id="items">
      <div class="read-item selected" v-for="ws in websites" :key="ws.url">
        <img :src="ws.screenshot" :alt="ws.title">
        <h2>{{ ws.title }}</h2>
        <button @click="deleteItem(ws.url)">X</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#no-item {
  font-weight: bold;
  color: silver;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 100px;
  z-index: -1;
}

#items {
  margin-top: 5px;
  .read-item {
    display: flex;
    align-items: center;
    align-content: center;
    border-bottom: lightgray 2px solid;
    background: #fafafa;
    border-left: 10px solid lightgray;
    user-select: none;
    // -webkit-user-select: none;
    position: relative;
    padding: 10px;

    img {
      width: 20%;
      margin-right: 25px;
      border: solid 1px #ccc;
    }

    &:hover {
      background: #eee;
    }

    &:hover button {
      display: inline-block;
    }

    &.selected {
      border-left-color: dodgerblue;
    }

    button {
      position: absolute;
      display: none;
      right: 10px;
      top: 10px;
      width: 30px;
      height: 30px;
      background: #f44336;
      border: none;
      border-radius: 50%;
      color: white;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>