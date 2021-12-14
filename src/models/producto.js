import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        required:true,
        type: String,
        maxlength: 100,
        unique:true
    },
    precioProducto:{
        required:true,
        type: Number,

    },
    categoria:{
        required:true,
        type: String,

    }
})

//le estoy pidiendo que me modele un esquema "productoSchema" y que lo guarde en la variable producto
const Producto = mongoose.model("producto",productoSchema)

export default Producto;