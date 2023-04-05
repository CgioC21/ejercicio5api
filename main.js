const {app, BrowserWindow, ipcMain} = require("electron");
const path = require('path')

const mysql = require("mysql2")

/*CREANDO LA CONEXION A LA BASE DE DATOS */
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'PaLF7.rubb',
    database: 'pokemon_db'

})

let ventana;

function createWindow(){
    ventana = new BrowserWindow({
        width: 550,
        height: 675,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventana.loadFile("index.html")
}

app.whenReady().then(createWindow)

//ENVIA A LA BASE DE DATOS LOS REGISTROS 
ipcMain.on('nuevoRegistro',function(event,args){
    conexion.promise().execute('INSERT INTO pokemon(fecha,nombre,altura,peso) VALUES(?,?,?,?)',
    args)
})

//MUESTRA EN CONSOLA LOS REGISTROS ACTUALES EN LA BASE DE DATOS
conexion.query(
    'SELECT * FROM pokemon',
    function(err,result,fields){
        if(err){
            console.log(err)
        }
        console.log(result)
})
