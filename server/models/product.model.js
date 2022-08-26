const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    productTitle: {type: String},
    price: {type: Number},
    description: {type: String}
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;