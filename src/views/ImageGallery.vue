<script setup>
import { ref, reactive, onMounted } from 'vue'

const imgList = ref([])
onMounted(async () => {
  imgList.value = await window.myApi.getFileList()
})
</script>

<template>
  <div class="img-container">
    <img class="item" v-for="(imgName,imgIndex) in imgList" :key="imgIndex" :src="`/uploads/${imgName}`">
  </div>
</template>

<style lang="scss">
.img-container {
  padding: 20px;
  .item {
    width: 200px;
    img {
      width: 100%;
    }
  }
}
</style>