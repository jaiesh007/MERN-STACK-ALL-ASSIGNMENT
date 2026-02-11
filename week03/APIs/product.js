
// import express to start subRouter
import exe from 'express'

// import productModel
import { ProductModel } from "../models/productModel.js";

// export subRouter so that server will use
export const productApp=exe.Router()

productApp.post('/products',async(req,res)=>{
    let newProduct=req.body
    let newProductDoc=new ProductModel(newProduct)
    await newProductDoc.save()
    res.status(201).json({message:"product created"}) 
})
productApp.get('/products',async(req,res)=>{
    let products=await ProductModel.find()
    res.status(200).json({message:"all product",payload:products})
})
productApp.get('/products/:objid',async(req,res)=>{
    let requiredProductId=req.params.objid
    let productObj=await ProductModel.findById(requiredProductId)
    res.status(200).json({message:"product by id",payload:productObj})
})
productApp.put('/products/:objid',async(req,res)=>{
    let requiredProductId=req.params.objid
    let newObj=req.body
    let lastObj=await ProductModel.findByIdAndUpdate(requiredProductId,{$set:{...newObj}},{new :true})
    res.status(200).json({message:"product updated",payload:lastObj})
})
