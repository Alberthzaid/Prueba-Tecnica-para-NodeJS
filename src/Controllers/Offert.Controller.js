import { Offer } from "../Models/Model.Offert.js";
import { Client } from "../Models/Model.Client.js";
import { Product } from "../Models/Model.Product.js";

export const GetAllOffers = async (req,res)=>{
    try {
        const offers = await Offer.find();
        return res.json({offers}).status(200)
    } catch (error) {
        console.log(error)
    }
};

export const GetOneOffer = async(req,res)=>{
    const user_id = req.params.id;
    const nombre_producto = req.params.nombre_producto;
    try {
        const client = await Client.findById(user_id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        const product = await Product.findOne({ Name: nombre_producto });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const offer = await Offer.findOne({ Client: client._id, Product: product._id });
        if (!offer) {
            return res.status(404).json({ message: 'Offer not found for this product and client' });
        }
        return res.json({ price: offer.Price });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Intern error from server ' });
    }
}

export const AddOffert = async (req,res)=>{
    try {
        const Offert = req.body
        const data = await Offer.create({...Offert})
        return res.json({data}).status(200)
    } catch (error) {
        console.log(error)
    }
}
