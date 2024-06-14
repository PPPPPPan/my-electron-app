const { contextBridge, ipcRenderer } = require('electron')

const sendUrl = async (url) => {
  let res = await ipcRenderer.invoke('on-url-event', url)
  return res
}

const alert = (msg) => {
  ipcRenderer.invoke('on-alert-event', msg)
}

const openWindow = (url) => {
  ipcRenderer.invoke('on-open-event', url)
}

const close = () => {
  ipcRenderer.invoke('on-close-event')
}

const getFileList = async () => {
  const filelist = await ipcRenderer.invoke('on-getfiles-event')
  return filelist
}

contextBridge.exposeInMainWorld('myApi', {
  sendUrl,
  alert,
  openWindow,
  close,
  getFileList
})