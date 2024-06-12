const { Menu, dialog } = require("electron")
const got = require('got')
const path = require('path')
const fs = require('fs')
const imageType = require('image-type')
const randomstring = require('randomstring')

const saveas = ({ srcURL: srcUrl }) => {
  if (srcUrl) {
    const contextMenu = Menu.buildFromTemplate([
      {
        label: '图片另存为',
        click: () => {
          got.get(srcUrl).then((res) => {
            const chunk = Buffer.from(res.rawBody)
            const imgType = imageType(chunk)
            dialog.showSaveDialog({
              title: "图片另存为",
              defaultPath: path.resolve(__dirname, '../public/uploads/' + randomstring.generate(10) + '.' + imgType.ext)
            }).then(({ canceled, filePath }) => {
              if (!canceled) {
                fs.writeFileSync(filePath, chunk)
              }
            })
          }).catch(() => { })
        },
        accelerator: "CommandOrControl+S"
      }
    ])
    contextMenu.popup()
  }
}

module.exports = saveas