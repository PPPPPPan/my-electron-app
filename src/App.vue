<script setup>
import { ref, reactive, provide } from 'vue'
import Home from "./views/Home.vue"
import Header from "./views/Header.vue"

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
  <Header></Header>
  <router-view></router-view>
</template>

<style lang="css">
</style>