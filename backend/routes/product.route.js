const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller')

router.get('/', controller.getAllProducts);
router.get('/:productID', controller.getProductById);
router.get('/category/:categoryID', controller.getProductByCategoryId);
router.get('/category-detail/:categoryDetailId', controller.getProductByCategoryDetailId);
router.get('/delete/:productID', controller.deleteProduct);
router.post('/create', controller.addProduct);
router.post('/update/:productID', controller.updateProduct);

module.exports = router;