const { app, ipcMain, BrowserWindow, createWindow } = require('electron')
const path = require('path')

const cssText = `height:30px;border-radius:5px;text-aligin:center;line-height:30px;z-index:99;position:fixed;right:50px;bottom:200px;border:1px solid red;background-color:cornflowerblue;`

const js = `
  const btn = document.createElement('div')
  btn.innerHTML = '关闭窗口'
  btn.style = "${cssText}"
  btn.addEventListener('click',()=>{window.myApi.close()})
  document.body.appendChild(btn)
`
let win = null
ipcMain.handle('on-open-event', (e, url) => {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'), // 预加载
    },
  })

  win.loadURL(url)

  win.on('ready-to-show', () => {
    win.show()
  })

  win.webContents.executeJavaScript(js).catch(() => { })


  win.webContents.on('context-menu', (e, args) => {
    console.log('args : >>>>>>>>>>>>>>>>', args)
  })
})

ipcMain.handle('on-close-event', () => {
  win.close()
})
