import { ref, reactive, watch } from 'vue'
import useWebsiteStore from '@/store/websiteStore.js'
import { storeToRefs } from 'pinia'

const useWebsite = () => {
  const websiteStore = useWebsiteStore()
  const { websites } = storeToRefs(websiteStore)
  const { deleteItem } = websiteStore

  return {
    websites,
    deleteItem
  }
}

export default useWebsite