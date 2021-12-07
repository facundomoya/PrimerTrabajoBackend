import express from "express"
import morgan from "morgan"
import cors from "cors"

//instanciar express
const app = express()
//crear un puerto
app.set("port",process.env.PORT || 4000) //elegir un puerto que se que no esta en uso

//el app.get trae el contenido de la variable port
app.listen(app.get("port"),()=>{//que escuche o muestre lo que esta pasando en el puerto 4000
console.log("estoy en el puerto "+app.get("port"))//no se ejecutan por orden si no por el tiempo que lleva la tarea en ejecutar
})

//configuraciones extras (middlewares), van antes de las rutas
app.use(morgan("dev")) //dev me da la informacion necesaria de las peticiones, dev es de las palabras mas completas
app.use(cors())
//middlewares de express, sirven para que nuestro servidor cuando recibe una peticion remota interprete los archivos de formato json
app.use(express.json())
app.use(express.urlencoded({extended:true}))//este si recibe un parametro, ese parametro recibe un objeto y lo interpreta en formato json

//rutas (ruta de prueba) req(request) es la consulta del frontend y res(response) es la respuesta del backend
app.get("/",(req,res)=>{//localhost:4000
    res.send("HOLA ESTO ES UNA PRUEBA DESDE EL BACKEND")
}) //una ruta para cuando alguien me haga una peticion get

//borrar producto (no se puede probar desde el navegador)
app.delete("/borrarproducto",(req,res)=>{//localhost:4000/borrarproductos
    res.send("ALGUIEN QUIERE BORRAR")
}) //una ruta para cuando alguien me haga una peticion get