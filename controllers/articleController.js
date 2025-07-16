
const articleService = require('../services/articleService');

const createArticle = async (req, res) => {
  try {
    const data = {
      ...req.body,
      userId: req.user.id, 
      image: req.file.filename
    };
    const result = await articleService.createArticle(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// const getAllArticles = async (req, res) => {
//   try {
//     const result = await articleService.getAllArticles();
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   } 
// };
const getAllArticles = async (req, res) => {
  try {
    const data = {...req.query };
    
    const result = await articleService.getAllArticles(data);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getArticleById = async (req, res) => {
  try {

    const id = req.params.id
    const result = await articleService.getArticleById(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    const data = {
      ...req.body,
      image: req.file ? req.file.filename : req.body.image
    };
    const id = req.params.id
    const result = await articleService.updateArticle(id, data);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const id = req.params.id
    const result = await articleService.deleteArticle(id);
    res.json(result);
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
