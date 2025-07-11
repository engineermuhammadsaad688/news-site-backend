const Category = require('../models/Category');

const createCategory = async (data) => {
  const category = new Category(data);
  await category.save();
  return category;
};

const getAllCategories = async () => {
  return await Category.find().populate('userId', 'name');
};

const getCategoryById = async (id) => {
  return await Category.findById(id).populate('userId', 'name');
};

const updateCategory = async (id,data) => {
  const result = await Category.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteCategory = async (id) => {
  const result = await Category.findByIdAndDelete(id);

  return result;
};


module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
