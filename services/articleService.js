const Article = require('../models/Article');

const createArticle = async (data) => {
  const article = new Article(data);
  await article.save();
  return article;
};

const getAllArticles = async () => {
  const result =await Article.find();
  return result
};

 const getArticleById = async (id) => {
 const result =await Article.findById(id).populate('userId', 'name')
.populate('categoryId', 'name');
 return result
};

const updateArticle = async (id,data) => {
  const result = await Article.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteArticle = async (id) => {
  const result = await Article.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle
};
