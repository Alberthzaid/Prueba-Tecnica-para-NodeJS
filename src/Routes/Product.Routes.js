// Ruta paa cada producto

import express from 'express'
import { AddProduct, GetAllProducts } from '../Controllers/Product.Controller'
const RoutesProduct = express.Router()
RoutesProduct.get('/Products', GetAllProducts)
RoutesProduct.post('/AddProduct', AddProduct)

export{
    RoutesProduct
}