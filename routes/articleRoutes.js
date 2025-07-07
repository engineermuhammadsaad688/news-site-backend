// module.exports = router;
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');

// Public
router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);

// Protected
router.post('/', authMiddleware, upload.single('image'), articleController.createArticle);
router.put('/:id', authMiddleware, articleController.updateArticle);
router.delete('/:id', authMiddleware, articleController.deleteArticle);

module.exports = router;

