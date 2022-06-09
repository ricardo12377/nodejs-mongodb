const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

mongoose
  .connect(
    "mongodb+srv://zakum023:zakum024@api.jrwy8.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("banco conectado"))
  .catch((err) => {
    console.log("Cannot connect to the database", err);
    process.exit;
  });

//models
const Product = require("./models/product");
const Order = require("./models/order");
const Customer = require("./models/customer");

//rotas
const indexRoute = require("./routes/index-routes");
const productRoute = require("./routes/product-routes");
const customerRoute = require("./routes/customer-routes");
const orderRoute = require("./routes/order-routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/customers", customerRoute);
app.use("/orders", orderRoute);
module.exports = app;
