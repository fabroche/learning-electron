console.log("Hola desde electron");

const {app, BrowserWindow, Menu} = require('electron');
const {setMainMenu} = require('./menu');
const path= require("path");


const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile('index.html');
    setMainMenu(mainWindow);
}


app.whenReady().then(() => {
    createWindow()
});

