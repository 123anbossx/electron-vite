
const { BrowserWindow, ipcMain, app } = require('electron')
const path = require('path')
function createMainWundow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    win.loadURL('http://localhost:5173')
    win.webContents.openDevTools()
}
app.whenReady().then(() => {
    createMainWundow()
})