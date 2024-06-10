<script setup>
import { ref, reactive, provide } from 'vue'
import Home from "./views/Home.vue"

// 窗口显示状态
const isShow = ref(false)
const setIsShow = (value) => {
  isShow.value = value
}
provide('dialog-visible', {
  isShow,
  setIsShow
})

const keyWrods = ref('')
const setKeyWrods = (newValue) => {
  keyWrods.value = newValue
}
provide('searchbar-keywrods', {
  keyWrods,
  setKeyWrods
})

</script>

<template>
  <div>
    <Home></Home>
  </div>
</template>

<style lang="css">
</style>