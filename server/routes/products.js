var express = require('express');
var router = express.Router();

const {
  createProduct,
  getAllProducts,
  updateProduct,
  getAllProductsWithHistory,
} = require('../controllers/productsController');

router.post('/product', createProduct);
router.put('/updateProduct', updateProduct);
router.get('/getAllProducts', getAllProducts);
router.get('/getAllProductsWithHistory', getAllProductsWithHistory);

module.exports = router;
