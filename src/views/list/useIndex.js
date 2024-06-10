import { ref, reactive, watch } from 'vue'

const useIndex = () => {
  const isSelectedIndex = ref(-1)
  const handleClickReadItem = (clickIndex, url) => {
    isSelectedIndex.value = (isSelectedIndex.value === clickIndex) ? -1 : clickIndex
    window.open(url, '_blank', "width=1100,height=800")
  }
  return {
    isSelectedIndex,
    handleClickReadItem
  }
}

export default useIndex