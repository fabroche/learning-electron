const {app, Menu} = require('electron');

const setMainMenu = () => {
    const template = [
        {
            label: 'File',
            submenu: [
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
                                app.setTheme('light')
                            }
                        },
                        {
                            label: 'Dark',
                            click: () => {
                                app.setTheme('dark')
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