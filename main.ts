// Modules to control application life and create native browser window
import { app, BrowserWindow } from 'electron';
import path from 'path';
import { Config } from './config/Config';
import _config from './config/config.json';
const env = process.env.NODE_ENV || 'development';
const config = _config as Config;

/**
 * create Window
 */
const createWindow = ()  => {

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    //show: false,
    titleBarOverlay: true,
    titleBarStyle: 'hidden',
    darkTheme: true,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png'),
    autoHideMenuBar: true,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      allowRunningInsecureContent: true,
      webSecurity: false,
      sandbox: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  if(config.isFullScreen) {
    mainWindow.maximize();
  } else {
    const width = config.width || 800;
    const height = config.height || 600;
    mainWindow.setSize(width, height)
    mainWindow.show()
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
