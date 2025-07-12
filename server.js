const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes =require('./routes/userRoutes');

// load env variables
dotenv.config();

// DB connection
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/users',userRoutes)

app.get("/", (req, res) => {
  console.log("called");
  res.send("Server is running!");
});

// Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});