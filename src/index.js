import express from "express"
import morgan from "morgan"
import cors from "cors"
import path from "path"
import router from "./routes/producto.routes"
import "./database" //importa todo el archivo database.js

//instanciar express
const app = express()
//crear un puerto
app.set("port",process.env.PORT || 4000) //elegir un puerto que se que no esta en uso

//el app.get trae el contenido de la variable port
app.listen(app.get("port"),()=>{//que escuche o muestre lo que esta pasando en el puerto 4000
console.log("estoy en el puerto "+app.get("port"))//no se ejecutan por orden si no por el tiempo que lleva la tarea en ejecutar
console.log(path.join(__dirname,"../public"))//necestio la ruta del index.html para poder cargarlo
})

//configuraciones extras (middlewares), van antes de las rutas
app.use(morgan("dev")) //dev me da la informacion necesaria de las peticiones, dev es de las palabras mas completas
app.use(cors())
//middlewares de express, sirven para que nuestro servidor cuando recibe una peticion remota interprete los archivos de formato json
app.use(express.json())
app.use(express.urlencoded({extended:true}))//este si recibe un parametro, ese parametro recibe un objeto y lo interpreta en formato json
//configurar el index.html
app.use(express.static(path.join(__dirname,"../public")))//quiero que express use un middleware static, lo que devolves es un archivo estatico
//cuando escribo el dominio localhost:4000 o el dominio que me den, se den ver index.html 

//cuando usar las rutas
//el host es apicafeteria
app.use("/apicafeteria",router)