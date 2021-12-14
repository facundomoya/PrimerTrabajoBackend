import mongoose from "mongoose";

//cadena de conexion de mongoose
//en node.js el localhost = 127.0.0.1:PUERTO
const url = "mongodb://127.0.0.1:27017/crudcafe"

//me quiero conenctar a "tal" base de datos
//el UseNewUrlParser evita los warnings, es un parseador de url, siempre en true
//por defecto viene en false
mongoose.connect(url)

//guardar la conexion en una variable
const connection = mongoose.connection

//una vez que hayas hecho la conexion, le decimos lo que sucedio, en los parametros
//practicamente es revisar si estamos bien 
 connection.once("open",()=>{
    console.log("BD conectada")
}) 