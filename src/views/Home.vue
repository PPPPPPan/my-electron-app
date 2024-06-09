<script setup>
import { ref, reactive } from 'vue'
import SearchBar from "./SearchBar.vue"
import Dialog from "./Dialog.vue"
import List from './List.vue'

</script>

<template>
  <main>
    <SearchBar></SearchBar>
    <Dialog></Dialog>
    <List></List>
  </main>
</template>