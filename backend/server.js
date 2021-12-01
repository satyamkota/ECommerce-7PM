//import express module
//express module used to develop the rest api's
const express = require("express");


//import mongoose module
//mongoose module used to connect to the mongodb database
const mongoose = require("mongoose");


//import cors module
//cors module used to enable the cors policy
const cors = require("cors");


//import express_async_handler
const express_async_handler = require("express-async-handler");


//create the rest object
const app = express();
//where "app" is the rest object
//wherev "app" object used to develop the rest api's   GET, POST, PUT, DELETE,......


//enable the cors policy
app.use(cors());


//set the json as MIME type
app.use(express.json());


//import model
const Product = require("./model/product");


//connect to mongodb database
mongoose.connect(`mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ecommerce-7pm?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});


//create the rest api
app.get("/api/products",express_async_handler(async (req,res)=>{
    const products = await Product.find();
    if(!products){
        res.status(400).send({"message":"products not available"});
    }else{
        res.status(200).send(products);
    }
}));


//create the rest api by using id
app.get("/api/products/:id",express_async_handler(async (req,res)=>{
    const product = await Product.findOne(mongoose.Types.ObjectId(req.params.id));
    if(!product){
        res.status(400).send({"message":"product not available"});
    }else{
        res.status(200).send(product);
    }
}));


//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});