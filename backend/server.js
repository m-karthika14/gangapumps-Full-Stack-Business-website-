const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const leadRoutes = require('./routes/leadRoutes'); // ✅ Step 1: Import lead routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/leads', leadRoutes); // ✅ Step 2: Use lead routes

// ✅ Health check route (Add before DB connection)
app.get('/', (req, res) => {
  res.send('✅ Backend is live!');
});

app.get('/health', (req, res) => {
  res.status(200).send('✅ OK');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT || 5000, () =>
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
  );
})
.catch(err => {
  console.error('❌ MongoDB connection failed:', err);
});
