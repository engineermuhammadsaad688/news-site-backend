const Article = require('../models/Article');

const createArticle = async (data) => {
  const article = new Article(data);
  await article.save();
  return article;
};

// const getAllArticles = async () => {
//   const result =await Article.find().populate('categoryId','name');
//   return result
// };


const getAllArticles = async (data) => {
  const {
    search = '',
    category,
    sortBy = 'createdAt',
    order = 'desc'
  } = data;

  const page = Number(data.page) || 1;
  const limit = Number(data.limit) || 10;

  const query = {};

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
    ];
  }

  if (category) {
    query.categoryId = category;
  }

  const skip = (page - 1) * limit;
  const sortOrder = order === 'asc' ? 1 : -1;

  // 🟢 Step 1: Get the articles based on query, with pagination and sorting
  const articles = await Article.find(query)
    .populate('categoryId', 'name')
    .populate('userId', 'name')
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder });

  // 🟢 Step 2: Get the total count of matching articles (for pagination)
  const total = await Article.countDocuments(query);

  // 🟢 Step 3: Build the result object
  const totalPages=Math.ceil(total / limit)
  const result = {
    total,
    page,
    limit,
    totalPages,
    articles,
  };

  return result;
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
