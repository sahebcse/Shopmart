const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrderById,
  getOrderByMerchentId,
} = require("../controllers/orderController");

router.post("/order", createOrder);

router.get("/order/:id", getOrderById);

router.post("/order/merchant/:id", getOrderByMerchentId);

module.exports = router;
