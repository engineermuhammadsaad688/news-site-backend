const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public (get all comments or by article)
router.get('/', commentController.getComments);

// Protected
router.post('/', authMiddleware, commentController.addComment);
router.put('/:id', authMiddleware, commentController.updateComment);

module.exports = router;
