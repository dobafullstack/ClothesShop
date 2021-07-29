const express = require('express');
const router = express.Router();
const controller = require('../controllers/category_detail.controller')

router.get('/', controller.getAllCategoryDetail);
router.get('/delete/:categoryID', controller.deleteCategoryDetail);
router.post('/create', controller.addCategoryDetail);
router.post('/update/:categoryID', controller.updateCategoryDetail);

module.exports = router;