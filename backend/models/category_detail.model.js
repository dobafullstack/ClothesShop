const mongoose = require("mongoose");

const detailCategorySchema = mongoose.Schema({
    category_id: {
        type: String,
        ref: "Category",
        require: true,
    },
    name: {
        type: String,
        require: true,
        unique: true,
    },
    part_id: {
        type: String,
        default: "male",
        ref: "Part",
    },
});

const CategoryDetail = new mongoose.model(
    "CategoryDetail",
    detailCategorySchema,
    "category_detail"
);

module.exports = CategoryDetail;
