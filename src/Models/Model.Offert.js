// Esquema para Ofertas de precio

import mongoose from 'mongoose'

const offerSchema = new mongoose.Schema({
    Client :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    Product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    Price:{
        type: Number,
        required: true
    },
    Start_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    Finish_date: {
        type: Date,
        required: true
    }
});

const Offer = mongoose.model('Offers', offerSchema);
export{Offer}
