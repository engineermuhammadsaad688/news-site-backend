const Comment = require('../models/Comment');

const addComment = async (data) => {
  const category = new Category(data);
  await category.save();
  return category;
};

const getComments = async () => {
  return await Category.find().populate('userId', 'name');
};

const updateComment = async (id,data) => {
  const result = await Category.findByIdAndUpdate(id, data, { new: true });
  return result;
};

module.exports = {
  addComment,
  getComments,
  updateComment
};
