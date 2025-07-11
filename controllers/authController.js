// controllers/authController.js
const authService = require('../services/authService');

const signup = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };
    const result = await authService.signup(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };
    const result = await authService.login(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  signup,
  login
};
