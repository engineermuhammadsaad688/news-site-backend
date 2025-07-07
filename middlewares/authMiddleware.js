// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // 1. Token lena header se
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // decoded object mein user id, email, role hota hai
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
