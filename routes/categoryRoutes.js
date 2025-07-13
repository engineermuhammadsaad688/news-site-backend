const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');
// Public
router.post('/', authMiddleware, categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id',categoryController.updateCategory);
router.delete('/:id',categoryController.deleteCategory);

module.exports = router;
