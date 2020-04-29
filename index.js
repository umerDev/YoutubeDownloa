const { app, BrowserWindow } = require('electron')

module.exports = createWindow = () => {
    let win = new BrowserWindow({
        width:800,
        height:800,
        webPreferences:{
            nodeIntegration:true
        }
    })

    win.loadFile('index.html')
    win.setMenu(null);
    win.webContents.openDevTools()
}
app.whenReady().then(createWindow);

app.on('window-all-closed',() => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0)
    {
        createWindow();
    }
})