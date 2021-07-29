const CategoryDetail = require('../models/category_detail.model');
const _ = require('lodash');

module.exports.getAllCategoryDetail = async (req, res) => {
    try{
        const category = await CategoryDetail.find().sort({_id: 1});

        res.status(200).json(category);
    }catch(err) {
        res.status(403).json(err);
    }
}

module.exports.addCategoryDetail = async (req, res) => {
    try{
        const category = await CategoryDetail.create(req.body);

        res.status(200).json(category);
    }catch(err){
        res.status(403).json(err);
    }
}

module.exports.updateCategoryDetail = async (req, res) => {
    try{
        const category = await CategoryDetail.findById(req.params.categoryID);

        _.extend(category, req.body)

        category.save();

        res.status(200).json(category);
    }catch(err){
        res.status(403).json(err);
    }
}

module.exports.deleteCategoryDetail = async (req, res) => {
    try{
        await CategoryDetail.findByIdAndDelete(req.params.categoryID)

        res.status(200).json({message: "Deleted!"});
    }catch(err){
        res.status(403).json(err);
    }
}