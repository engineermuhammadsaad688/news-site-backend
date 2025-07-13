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

const login = async (userDataFromFE) => {
  const userFromDB = await User.findOne({ email:userDataFromFE.email });
  if (!userFromDB) {
    throw new Error('Invalid email or password');
  }

  const isMatch = await bcrypt.compare(userDataFromFE.password, userFromDB.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  const newToken = jwt.sign(
    { id: userFromDB._id, email: userFromDB.email, role: userFromDB.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return { token:newToken, user:userFromDB };
};

module.exports = {
  signup,
  login
};
