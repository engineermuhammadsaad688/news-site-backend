
const articleService = require('../services/articleService');

const createArticle = async (req, res) => {
  try {
    const data = {
      ...req.body,
      userId: req.user.id,
      image: req.file ? req.file.filename : null // multer se milta hai
    };
    const article = await articleService.createArticle(data);
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const getAllArticles = async (req, res) => {
  try {
    const articles = await articleService.getAllArticles();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await articleService.getArticleById(req.params.id);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    const updated = await articleService.updateArticle(req.params.id, req.user.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    await articleService.deleteArticle(req.params.id, req.user.id);
    res.json({ message: 'Article deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle
};
