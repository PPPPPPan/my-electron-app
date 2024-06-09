<script setup>
import { inject, ref, watch } from 'vue'
import useWebsiteStore from '@/store/websiteStore.js'
const websiteStore = useWebsiteStore()
const { add } = websiteStore

const { isShow, setIsShow } = inject('dialog-visible')

const url = ref('')
const isSubmit = ref(false)
const handleAddClick = async () => {
  isSubmit.value = true
  let result = await window.myApi.sendUrl(url.value)
  if (result.errorMsg) {
    window.myApi.alert(result.errorMsg)
  } else {
    add(result)
    setIsShow(false)
  }
  isSubmit.value = false
}

watch(isShow, () => {
  url.value = ''
})

</script>

<template>
  <div v-if="isShow" class="dialog-wrap">
    <div class="content">
      <div class="input">
        <input v-model="url" :disabled="isSubmit" type="text" placeholder="请输入网址...">
      </div>
      <div class="btns">
        <button :disabled="isSubmit" @click="handleAddClick">添加</button>
        <button :disabled="isSubmit" @click="setIsShow(false)">取消</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dialog-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .content {
    width: 100%;
    padding: 0 20px;

    input {
      height: 30px;
      width: 100%;
      outline: none;
      margin-bottom: 10px;
      font-size: 12px;
    }

    .btns {
      button {
        height: 30px;
        margin-right: 10px;
        font-size: 12px;
        padding: 0 20px;
      }
    }
  }
}
</style>