const express = require('express');
const router = express.Router();
const controller = require('../controllers/category.controller')

router.get('/', controller.getAllCategory);
router.get('/delete/:categoryID', controller.deleteCategory);
router.post('/create', controller.addCategory);
router.post('/update/:categoryID', controller.updateCategory);

module.exports = router;