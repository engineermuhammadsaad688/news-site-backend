const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  try {
    const data = { ...req.body, userId: req.user.id };
    const category = await categoryService.createCategory(data);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await categoryService.updateCategory(req.params.id, req.user.id, req.body);
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await categoryService.deleteCategory(req.params.id, req.user.id);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
