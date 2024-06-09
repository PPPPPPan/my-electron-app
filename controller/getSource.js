const { ipcMain, BrowserWindow } = require('electron')

const getSource = () => {
  ipcMain.handle('on-url-event', (e, url) => {
    return new Promise((resolve, reject) => {
      const win = new BrowserWindow({
        width: 500,
        height: 500,
        show: false,
        webPreferences: {
          offscreen: true
          // defaultEncoding: "utf-8"
        }
      })

      win.loadURL(url)

      win.webContents.on('did-finish-load', async () => {
        const title = win.getTitle()
        // 截图
        try {
          const img = await win.webContents.capturePage() // nativeImage
          const screenshot = img.toDataURL()
          resolve({
            screenshot,
            title,
            url
          })
        } catch (capturePageError) {
          reject(capturePageError)
        }
      })
    })
  })
}

getSource()

module.exports = getSource