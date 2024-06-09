const { ipcMain, BrowserWindow, session } = require('electron')

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

      // // 获取默认会话
      // const defaultSession = session.defaultSession

      // let pendingRequests = 0
      // // 监听会话的请求
      // defaultSession.webRequest.onBeforeRequest((details, callback) => {
      //   pendingRequests++
      //   // 继续请求
      //   callback({ cancel: false })
      // })

      // defaultSession.webRequest.onCompleted((details) => {
      //   if (--pendingRequests === 0) {
      //     setTimeout(async () => {
      //       if (pendingRequests === 0) {
      //         const title = win.getTitle()
      //         // 截图
      //         try {
      //           const img = await win.webContents.capturePage() // nativeImage
      //           const screenshot = img.toDataURL()
      //           resolve({
      //             screenshot,
      //             title,
      //             url
      //           })
      //         } catch (capturePageError) {
      //           reject(capturePageError)
      //         }
      //       }
      //     }, 1000)
      //   }
      // })

      win.loadURL(url)

      win.webContents.on('did-finish-load', async () => {
        // 注入CSS隐藏滚动条
        win.webContents.insertCSS('body::-webkit-scrollbar { display: none; }')
        const title = win.getTitle()
        // 截图
        try {
          const img = await win.webContents.capturePage() // nativeImage
          let screenshot
          if (img.isEmpty()) {
            resolve({
              errorMsg: '无法访问该站点'
            })
          } else {
            screenshot = img.toDataURL()
            resolve({
              screenshot,
              title,
              url
            })
          }
        } catch (capturePageError) {
          resolve({
            errorMsg: '无法访问该站点'
          })
        }
      })
    })
  })
}

getSource()

module.exports = getSource