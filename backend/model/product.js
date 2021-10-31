const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    "_id":{type:String,required:true},
    "name":{type:String,required:true},
    "brand":{type:String,required:true},
    "rating":{type:Number,required:true},
    "numReviews":{type:Number,required:true},
    "image":{type:String,required:true},
    "description":{type:String,required:true}
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;

