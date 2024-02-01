// Import the dotenv package and load environment variables from .env file
require('dotenv').config();

// Import modules
const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');

// Connect to MongoDB
connectToMongo();

// Create Express app
const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Start the server
app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`);
});
