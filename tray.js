const { app, Tray } = require("electron")

function createTray(win) {
  const tray = new Tray('./logo.jpg')
  tray.setToolTip('readit')

  tray.on('click', (e) => {
    if (e.shiftKey) {
      app.quit()
    } else {
      win.isVisible() ? win.hide() : win.show()
    }
  })
}

module.exports = createTray
