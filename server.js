// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const cors = require('cors');




dotenv.config();
const app = express();
app.use(cors());


app.use(express.json());

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes






// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
