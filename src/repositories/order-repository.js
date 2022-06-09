const mongoose = require("mongoose");
const Order = require("../models/order");

exports.get = async (data) => {
  let res = Order.find({}).populate("customer");
  return res;
};

exports.create = async (data) => {
  let order = new Order(data);
  await order.save();
};
