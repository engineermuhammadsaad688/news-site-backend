// services/authService.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (userData) => {
  const result = await User.findOne({ email: userData.email });
  if (result) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const updatedUser={ ...userData, password: hashedPassword }
  
  const user = new User(updatedUser);
  await user.save();

  return user;
};

const login = async (userData) => {
  const user = await User.findOne({ email:userData.email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isMatch = await bcrypt.compare(userData.password, user.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return { token, user };
};

module.exports = {
  signup,
  login
};
