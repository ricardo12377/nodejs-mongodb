const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express();
const router = express.Router();

const indexRoute = require("./routes/index-routes")
const  productRoute = require("./routes/product-routes")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute)
app.use('/products', productRoute)
module.exports = app;

mongoose.connect('mongodb+srv://zakum023:zakum024@api.jrwy8.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("banco conectado"))
.catch(err => {
    console.log("Cannot connect to the database", err);
    process.exit
})