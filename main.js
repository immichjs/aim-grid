const { app, BrowserWindow } = require('electron')


function createWindow () {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 700,
        icon: __dirname + '/src/img/osu-icon.png',
        resizable: false
    })

    mainWindow.loadFile(__dirname + '/src/index.html')
    mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', createWindow)