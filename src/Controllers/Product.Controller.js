import { Product } from "../Models/Model.Product.js";

export const GetAllProducts = async (req,res)=>{
    try {
        const Products = await Product.find()
        return res.json({Products}).status(200)
    } catch (error) {
        console.log(error)
    }
}

export const GetOneProduct = async(req,res)=>{
    try {
        const Clients = req.params.id
        const data = await Product.findById(Clients)
        return res.json({data}).status(200)
    } catch (error) {
        console.log(error)
    }
}

export const AddProduct = async(req,res)=>{
    try {
        const Products = req.body
        const data = await Product.create({...Products})
        return res.json({data}).status(200)
    } catch (error) {
        console.log(error)
    }
}

export const DeleteProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const DeleteProducts = await Product.findByIdAndDelete(id)
        return res.json({DeleteProducts}).status(200)
    } catch (error) {
        console.log(error)
    }
}