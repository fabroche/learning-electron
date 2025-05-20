const {app, Menu, dialog} = require('electron');

const setMainMenu = (mainWindow) => {
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open',
                    click: () => {
                        dialog.showOpenDialog(mainWindow, {
                            filters: [
                                {name: 'Images', extensions: ['jpg', 'jpeg', 'png']}
                            ],
                            properties: ['openFile', 'openFile']
                        }).then(result => {
                            console.log(result.canceled)
                            console.log(result.filePaths)
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                },
                {type: 'separator'},
                {role: 'reload'},
                {role: 'toggleDevTools'},
                {type: 'separator'},
                {
                    label: 'About',
                    role: 'about'
                },
                {type: 'separator'},
                // {role: 'services'},
                // {role: 'hide'},
                // {role: 'hideOthers'},
                // {role: 'unhide'},
                // {type: 'separator'},
                {role: 'quit'}
            ]
        },

        {
            label: 'Edit',
            submenu: [
                {
                    label: 'Theme',
                    submenu: [
                        {
                            label: 'Light',
                            click: () => {
                                mainWindow.webContents.send('update-theme', 'light')
                            }
                        },
                        {
                            label: 'Dark',
                            click: () => {
                                mainWindow.webContents.send('update-theme', 'dark')
                            }
                        }
                    ]
                }
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}


module.exports = {
    setMainMenu
}