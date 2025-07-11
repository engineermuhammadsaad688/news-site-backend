const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  try {
    const data = { ...req.body, userId: req.user.id };
    const result = await categoryService.createCategory(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const result = await categoryService.getAllCategories();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const id=req.params.id
    const result = await categoryService.getCategoryById(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };
    const id = req.params.id

    const result = await categoryService.updateCategory(id,data);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id

   const result= await categoryService.deleteCategory(id);
    res.json(result);
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


