const { app, BrowserWindow } = require("electron")
const WinState = require("electron-win-state").default
const path = require('path')
// 获取网站的截图
require('./controller/getSource.js')
// 消息弹窗
require('./controller/alert.js')

const createWindow = () => {
  const winState = new WinState({
    // defaultWidth: 1000,
    // defaultHeight: 600,
    // defaultX: 100,
    // defaultY: 100,
  })
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    x: 100,
    y: 100,
    ...winState.winOptions, // 自定义窗口状态
    webPreferences: {
      preload: path.join(__dirname, './preload/index.js'), // 预加载
    },
    show: false,
  })
  winState.manage(win)
  win.loadURL('http://localhost:3000')

  // 打开开发者工具
  win.webContents.openDevTools()

  win.on('ready-to-show', () => {
    win.show()
  })
}

app.whenReady().then(() => {
  createWindow()
  // 激活的时候
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== 'darwin') app.quit()
})