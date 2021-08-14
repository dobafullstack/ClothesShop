const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    category_detail_id: {
        type: String,
        ref: "category_detail"
    },
    name: {
        type: String, 
        required: true,
        unique: true
    },
    images: {
        type: Array,
        default: []
    },
    size: {
        type: Array,
        default: [
            {name: 'XS', count: 10},
            {name: 'S', count: 10},
            {name: 'M', count: 10},
            {name: 'L', count: 10},
            {name: 'XL', count: 10},
            {name: 'XXL', count: 10},
        ]
    },
    price: {
        type: Number, 
        required: true,
    },
    sale: {
        type: Number, 
        default: 0
    },
    descriptions: {
        type: String,
        default: ''
    },
    reviews: {
        type: Array,
        default: []
    },
    rating_point:{
        type: Number,
        default: 0
    }
});

const Product = new mongoose.model('Product', productSchema, 'products');

module.exports = Product;