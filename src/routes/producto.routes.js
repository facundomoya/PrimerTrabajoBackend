import { Router } from "express";
import { productoCtrl } from "../controllers/producto.controllers";

const router = Router()

//aqui creo las rutas
router.route("/borrarproducto").delete(productoCtrl.borrarProducto)

//solo se usa este export cuando se exporta un solo elemento
//cuando son varias cosas se exporta con el export a la par de la const
export default router;