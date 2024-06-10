import { inject } from 'vue'
import useWebsiteStore from '@/store/websiteStore.js'
import { storeToRefs } from 'pinia'

const useWebsite = () => {
  const websiteStore = useWebsiteStore()
  const { websites, find } = storeToRefs(websiteStore)
  const { deleteItem } = websiteStore

  const { keyWrods } = inject('searchbar-keywrods')

  return {
    websites,
    deleteItem,
    keyWrods,
    find
  }
}

export default useWebsite