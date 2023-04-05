const {ipcRenderer, contextBridge} = require('electron')

contextBridge.exposeInMainWorld(
    'comunicacion',
    {
        nuevoRegistro: (datos)=>ipcRenderer.send('nuevoRegistro',datos)
    }

)