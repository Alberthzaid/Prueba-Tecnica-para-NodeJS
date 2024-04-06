// Esquema para Clientes

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Schema_Client= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
});


const Client  = mongoose.model('Client',Schema_Client)
export {Client}

