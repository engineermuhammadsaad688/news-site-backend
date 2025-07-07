const multer = require('multer');
const path = require('path');

// Upload storage settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // folder jahan image save hogi
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  }
});

// File filter - only images allowed
const fileFilter = (req, file, cb) => {
  const allowed = ['.jpg', '.jpeg', '.png'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.includes(ext)) cb(null, true);
  else cb(new Error('Only jpg/jpeg/png files are allowed'), false);
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
