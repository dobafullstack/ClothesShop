const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String, 
        require: true,
        unique: true
    }
});

const Category = new mongoose.model('Category', categorySchema, 'category');

module.exports = Category;