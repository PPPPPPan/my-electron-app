const { ipcMain } = require("electron")
const fs = require('fs')
const path = require("path")

ipcMain.handle('on-getfiles-event', () => {
  const list = fs.readdirSync(path.resolve(__dirname, '../public/uploads/'))
  return list
})
