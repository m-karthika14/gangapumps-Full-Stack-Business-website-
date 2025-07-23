const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.get('/', getProducts);        // GET /api/products
router.post('/', createProduct);     // POST /api/products
router.put('/:id', updateProduct);   // PUT /api/products/:id
router.delete('/:id', deleteProduct); // DELETE /api/products/:id

module.exports = router;
