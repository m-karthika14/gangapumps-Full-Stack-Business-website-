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
if (process.env.MONGO_URI) {
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
} else {
  // Development fallback: start server without DB so frontend and health checks work
  console.warn('⚠️  MONGO_URI not set — starting backend in dev mode WITHOUT a database.');
  app.listen(process.env.PORT || 5000, () =>
    console.log(`🚀 Server running (no DB) on port ${process.env.PORT || 5000}`)
  );
}
