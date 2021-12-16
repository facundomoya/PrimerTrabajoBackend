import Producto from "../models/producto"
//la logica de las rutas
export const productoCtrl={}

//le añado una propiedad al objeto
//el req es el request el pedido del front y res es response osea la respuesta del back
productoCtrl.borrarProducto = (req,res)=>{
    res.send("ALGUIEN QUIERE BORRAR")
}

productoCtrl.nuevoProducto = async(req,res)=>{
    try{
        console.log(req.body)
        //validar 
        //crear un objeto para guardar en la BD
        const productoNuevo = new Producto({
            nombreProducto: req.body.nombreProducto,
            precioProducto: req.body.precioProducto,
            categoria: req.body.categoria})
            console.log(productoNuevo)
            //guardar en BD
            await productoNuevo.save();
            res.status(201).json({mensaje: "Producto creado correctamente"})
    }catch(error){
        console.log(error)
        res.status(400).json({mensaje: "Error al crear el producto"})
    }
    
}