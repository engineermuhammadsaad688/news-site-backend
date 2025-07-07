const Article = require('../models/Article');

const createArticle = async (data) => {
  const article = new Article(data);
  await article.save();
  return article;
};

const getAllArticles = async () => {
  return await Article.find().populate('userId', 'name').populate('categoryId', 'name');
};

const getArticleById = async (id) => {
  return await Article.findById(id).populate('userId', 'name').populate('categoryId', 'name');
};

const updateArticle = async (id, userId, updatedData) => {
  const article = await Article.findById(id);
  if (!article) throw new Error('Article not found');
  if (article.userId.toString() !== userId) throw new Error('Unauthorized');

  Object.assign(article, updatedData);
  await article.save();
  return article;
};

const deleteArticle = async (id, userId) => {
  const article = await Article.findById(id);
  if (!article) throw new Error('Article not found');
  if (article.userId.toString() !== userId) throw new Error('Unauthorized');

  await article.remove();
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle
};
