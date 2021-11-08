const Order = require("../models/orderModel");
const Product = require("../models/productModel");

const createOrder = async (req, res) => {
  try {
    const product = await Product.findById(req.body.product);
    const tempOrder = new Order({
      product: req.body.product,
      customer: req.body.customer,
      address: req.body.address,
      amount: product.price,
    });

    const savedOrder = await tempOrder.save();
  } catch (error) {
    console.log(error);
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Order not found" });
  }
};

const getOrderByMerchentId = async (req, res) => {
  try {
    console.log("merc order", req.body);
    if (req.body.all) {
      const order = await Order.find({ merchantId: req.params.id });
      res.json(order);
    } else {
      const order = await Order.find({
        merchantId: req.params.id,
        date: { $gte: req.body.startDate, $lte: req.body.endDate },
      });
      res.json(order);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Order not found" });
  }
};

module.exports = { createOrder, getOrderById, getOrderByMerchentId };
