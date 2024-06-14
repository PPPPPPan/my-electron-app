<script setup>
import { inject } from 'vue'
import _ from 'lodash'

const { setIsShow } = inject('dialog-visible')
const handleClick = () => {
  setIsShow(true)
}
defineExpose({ handleClick })

const { setKeyWrods } = inject('searchbar-keywrods')
const search = _.debounce((e) => {
  let keyWrods = e.target.value
  setKeyWrods(keyWrods)
}, 500)

</script>

<template>
  <div class="search-container">
    <div class="button" @click="handleClick">+</div>
    <div class="input">
      <input @keyup="search" type="text" placeholder="请输入关键字...">
    </div>
  </div>
</template>

<style lang="scss">
div.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  height: 60px;
  background-color: #d3d3d3;

  .button {
    padding-left: 0;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #1e90ff;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    cursor: default;
  }

  .input {
    flex: 1;
    height: 36px;
    padding: 0 10px;

    input {
      padding: 0 10px;
      height: 100%;
      width: 100%;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
}
</style>