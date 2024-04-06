// Rutas para las ofertas con precios especiales

import express from 'express'
import { AddOffert, GetAllOffers, GetOneOffer } from '../Controllers/Offert.Controller.js'
const RoutesOffert = express.Router()
RoutesOffert.get("/getoffer",GetAllOffers)
RoutesOffert.get("/price/:id/:nombre_producto",GetOneOffer)
RoutesOffert.post("/addoffert", AddOffert)

export{
    RoutesOffert
}