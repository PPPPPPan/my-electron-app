import { ref, reactive, watch } from 'vue'

const useIndex = () => {
  const isSelectedIndex = ref(-1)
  const handleClickReadItem = (clickIndex) => {
    isSelectedIndex.value = (isSelectedIndex.value === clickIndex) ? -1 : clickIndex
  }
  return {
    isSelectedIndex,
    handleClickReadItem
  }
}

export default useIndex