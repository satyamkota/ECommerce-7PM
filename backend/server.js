const express = require("express");
const cors = require("cors");
const Product = require("./model/product");
const mongoose = require("mongoose");


const app = express();
//where "app" is the "rest object"
//where "app" object used to develop the rest apis  Ex. GET,POST,PUT,DELETE


app.use(cors());


//connect to mongodb database
mongoose.connect("mongodb+srv://satyamkota:satyamkota@employee-portal.q9apr.mongodb.net/ecommerce-7pm?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{
    if(err) throw err;
    else{
        console.log("connection success");
    }
});


//create the rest api
app.get("/api/products",async (req,res)=>{
    const products = await Product.find();
    res.send(products);
});


app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});