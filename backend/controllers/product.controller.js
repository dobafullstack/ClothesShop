const Product = require('../models/product.model');
const CategoryDetail = require('../models/category_detail.model')
const _ = require('lodash');

module.exports.getAllProducts = async (req, res) => {
    try{
        const products = await Product.find();

        res.status(200).json(products);
    }catch(err){
        res.status(403).json(err);
    }
}

module.exports.getProductById = async (req, res) => {
    const {productID} = req.params
    try{
        const product = await Product.findById(productID);

        res.status(200).json(product);
    }catch(err){
        res.status(403).json(err);
    }
}

module.exports.getProductByCategoryId = async (req, res) => {
    const {categoryID} = req.params
    try{
        const category_detail = await CategoryDetail.find({category_id: categoryID});
        var category_detail_id = [];

        category_detail.forEach(item => {
            category_detail_id.push(item._id);
        })

        const products = await Product.find({category_detail_id: {$in: category_detail_id}})

        res.status(200).json(products);
    }catch(err){
        res.status(403).json(err);
    }
}

module.exports.getProductByCategoryDetailId = async (req, res) => {
    const {categoryDetailId} = req.params
    try{
        const product = await Product.findOne({category_detail_id: categoryDetailId});
        
        res.status(200).json(product);
    }catch(err){
        res.status(403).json(err);
    }
}

module.exports.addProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body);

        res.status(200).json(product);
    }catch(err){
        res.status(403).json(err);
    }
}

module.exports.updateProduct = async (req, res) => {
    const { productID } = req.params;
    try{
        var product = await Product.findById(productID);

        
        _.extend(product, req.body);
        
        await product.save();

        res.status(200).json(product);
    }catch(err){
        res.status(403).json(err);
    }
}

module.exports.deleteProduct = async (req, res) => {
    const { productID } = req.params;
    try{
        await Product.findByIdAndDelete(productID);

        res.status(200).json({message: "Deleted!"});
    }catch(err){
        res.status(403).json(err);
    }
}