const mongoose = require("mongoose");

const partSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
});

const Part = new mongoose.model(
    "Part",
    partSchema,
    "part"
);

module.exports = Part;
