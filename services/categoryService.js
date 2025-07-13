const Category = require('../models/Category');

const createCategory = async (data) => {
  const category = new Category(data);
  await category.save();
  return category;
};

const getAllCategories = async () => {
 const result= await Category.find().populate('userId','name email',) ;
 return result
};

const getCategoryById = async (id) => {
  const result=await Category.findById(id);
  return result
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
