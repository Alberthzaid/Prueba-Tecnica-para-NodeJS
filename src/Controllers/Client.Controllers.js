import { Client } from "../Models/Model.Client.js";

export const GetAllClients = async (req,res)=>{
    try {
        const Clients = await Client.find()
        return res.json({Clients}).status(200)
    } catch (error) {
        console.log(error)
    }
}

export const GetOneClient = async (req,res)=>{
    try {
        const Clients = await Client.findById(req.params.id)
        return res.json({Clients}).status(200)
    } catch (error) {
        console.log(error)
    }
}

export const AddClient = async(req,res)=>{
    try {
        const Clients = req.body
        const data = await Client.create({...Clients})
        return res.json({data}).status(200)
    } catch (error) {
        console.log(error)
    }
}

export const DeleteClient = async(req,res)=>{
    const {id} = req.params
    try {
        const DeleteClient = await Client.findByIdAndDelete(id)
        return res.json(DeleteClient).status(200)
    } catch (error) {
        console.log(error)
    }
}

export const UpdateClient = async(req,res)=>{
    const {id} = req.params
    const newdata = req.body
    try {
        const UpdateClient = await Client.findByIdAndUpdate(id,newdata,{new:true})
        return res.json(UpdateClient).status(200)
    } catch (error) {
        console.log(error)
    }
}