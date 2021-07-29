const Category = require('../models/category.model');
const _ = require('lodash');

module.exports.getAllCategory = async (req, res) => {
    try{
        const category = await Category.find().sort({_id: 1});

        res.status(200).json(category);
    }catch(err) {
        res.status(403).json(err);
    }
}

module.exports.addCategory = async (req, res) => {
    try{
        const category = await Category.create(req.body);

        res.status(200).json(category);
    }catch(err){
        res.status(403).json(err);
    }
}

module.exports.updateCategory = async (req, res) => {
    try{
        const category = await Category.findById(req.params.categoryID);

        _.extend(category, req.body)

        category.save();

        res.status(200).json(category);
    }catch(err){
        res.status(403).json(err);
    }
}

module.exports.deleteCategory = async (req, res) => {
    try{
        await Category.findByIdAndDelete(req.params.categoryID)

        res.status(200).json({message: "Deleted!"});
    }catch(err){
        res.status(403).json(err);
    }
}