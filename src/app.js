// Ajuste de rutas y conexion a la base de datos

import express from 'express'
import cors from 'cors'
import { MongoConnect } from './Config/DataBase.js'
import { RoutesClient} from './Routes/Client.Routes.js'
import { RoutesProduct } from './Routes/Product.Routes.js'
import { RoutesOffert } from './Routes/Offert.Route.js'
const app = express()
app.use(express.json())
MongoConnect()
app.use(cors())
app.use(RoutesClient)
app.use(RoutesProduct)
app.use(RoutesOffert)
export {app}