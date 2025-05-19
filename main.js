console.log("Hola desde electron");

const {app, BrowserWindow, Menu} = require('electron');
const {setMainMenu} = require('./menu');


const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    });

    window.loadFile('index.html');
}

setMainMenu();

app.whenReady().then(()=> {
    createWindow()
});

