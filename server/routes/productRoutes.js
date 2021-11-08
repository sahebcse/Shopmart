const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProductById,
  editProductById,
  getAllProducts,
  deleteProductById,
  getProductsByMerchant,
  addReview,
  searchProducts,
  getProductsByCategory,
  getCategoriesList,
  deleteAllProducts,
} = require("../controllers/productController");
const { isInCache } = require("../middleware/isInCache");
const { queryIsInCache } = require("../middleware/queryIsinCache");

router.post("/product", createProduct);

router.get("/product/:id", getProductById);

router.put("/product/:id", editProductById);

router.get("/products", isInCache, getAllProducts);

router.delete("/product/:id", deleteProductById);

router.get("/products/merchant/:merchantId", getProductsByMerchant);

router.post("/product/:id/review", addReview);

router.get("/product/search/:query", queryIsInCache, searchProducts);

router.get("/products/category/:category", getProductsByCategory);

router.get("/categories/list", getCategoriesList);

router.get("/clearproducts", deleteAllProducts);

module.exports = router;
