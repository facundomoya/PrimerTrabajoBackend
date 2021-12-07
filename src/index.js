import express from "express"
//instanciar express
const app = express()
//crear un puerto
app.set("port",process.env.PORT || 4000) //elegir un puerto que se que no esta en uso

//el app.get trae el contenido de la variable port
app.listen(app.get("port"),()=>{//que escuche o muestre lo que esta pasando en el puerto 4000
console.log("estoy en el puerto "+app.get("port"))//no se ejecutan por orden si no por el tiempo que lleva la tarea en ejecutar
})

