const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile('frontend/dist/index.html');
  console.log("hello world");
}

app.whenReady().then(() => {
  createWindow()
})
