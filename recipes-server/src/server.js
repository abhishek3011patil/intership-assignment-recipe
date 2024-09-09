const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // You can change this port number if needed

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhishek3011patil:Abhi1289@cluster0.w1zwk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/recipes', require('../routes/recipes'));

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
