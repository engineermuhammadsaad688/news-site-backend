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

const updateCategory = async (id, userId, updatedData) => {
  const category = await Category.findById(id);
  if (!category) throw new Error('Category not found');
  if (category.userId.toString() !== userId) throw new Error('Unauthorized');

  Object.assign(category, updatedData);
  await category.save();
  return category;
};

const deleteCategory = async (id, userId) => {
  const category = await Category.findById(id);
  if (!category) throw new Error('Category not found');
  if (category.userId.toString() !== userId) throw new Error('Unauthorized');

  await category.remove();
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
