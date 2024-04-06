// Configuracion para la conexion a la base de datos

import mongoose from 'mongoose';
import { config } from 'dotenv';
config()
export const MongoConnect = async ()=>{
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'RetoZaid' 
    };
    try {
        await mongoose.connect(process.env.URI, options)
        console.log("Succesfull")
    } catch (error) {
        console.log(error)
    }
}