//Esquema para los Productos

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Schema_Product= new Schema({
    Name:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Brand:{
        type:String,
        required:true
    }
});


const Product  = mongoose.model('Product',Schema_Product)
export {Product}