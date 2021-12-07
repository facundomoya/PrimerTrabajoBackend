import express from "express"

const app = express()

const port = 4000 //elegir un puerto que se que no esta en uso

app.listen(port,()=>{//que escuche o muestre lo que esta pasando en el puerto 4000
console.log("estoy en el puerto"+port)//no se ejecutan por orden si no por el tiempo que lleva la tarea en ejecutar
})
console.log("HOLA MUNDO")