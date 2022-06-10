const mongoose = require("mongoose");
const Customer = require("../models/customer");

exports.create = async (data) => {
  let customer = new Customer(data);
  await customer.save();
};

exports.authenticate = async (data) => {
  const res = await Customer.findOne({
    email: data.email,
    password: data.password,
  });
  return res;
};
