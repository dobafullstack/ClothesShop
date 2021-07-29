const mongoose = require('mongoose');

const detailCategorySchema = mongoose.Schema({
    category_id: {
        type: String,
        ref: 'Category',
        require: true,
    },
    name: {
        type: String, 
        require: true,
        unique: true
    },
    gender: {
        type: String, 
        default: 'male'
    }
});

const CategoryDetail = new mongoose.model('CategoryDetail', detailCategorySchema, 'category_detail');

module.exports = CategoryDetail;