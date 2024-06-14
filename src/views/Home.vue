<script setup>
import { ref, reactive, onMounted } from 'vue'
import SearchBar from "./SearchBar.vue"
import Dialog from "./Dialog.vue"
import List from './list/List.vue'

const action = ref('')
const searchBarRef = ref(null)
onMounted(() => {
  window.myApi.opendialog()
  window.myApi.onRendererEvent(searchBarRef.value.handleClick)
})

</script>

<template>
  <main>
    <SearchBar ref="searchBarRef"></SearchBar>
    <Teleport to="body">
      <Dialog></Dialog>
    </Teleport>
    <List></List>
  </main>
</template>