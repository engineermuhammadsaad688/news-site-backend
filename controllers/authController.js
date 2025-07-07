// controllers/authController.js
const authService = require('../services/authService');

const signup = async (req, res) => {
  try {
    const user = await authService.signup(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await authService.login(email, password);
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  signup,
  login
};
