const { contextBridge, ipcRenderer } = require('electron')

const sendUrl = async (url) => {
  let res = await ipcRenderer.invoke('on-url-event', url)
  return res
}

contextBridge.exposeInMainWorld('myApi', {
  sendUrl
})