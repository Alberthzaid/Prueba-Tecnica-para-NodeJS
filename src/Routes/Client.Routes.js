//Rutas para los clientes 

import express from 'express'
const RoutesClient = express.Router()
import { AddClient, DeleteClient, GetAllClients, GetOneClient, UpdateClient } from '../Controllers/Client.Controllers.js'
RoutesClient.get("/get", GetAllClients)
RoutesClient.post("/add",AddClient)
RoutesClient.delete("/delete", DeleteClient )
RoutesClient.get("/get/:id",GetOneClient)
RoutesClient.put("/update", UpdateClient)
export {
    RoutesClient
}
