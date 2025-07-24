const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const leadRoutes = require('./routes/leadRoutes');

const app = express();

// -------------------- CORS Setup --------------------
app.use(cors({
  origin: [
    'http://localhost:5173',         // for local dev
    'https://gangapumps.com',        // your live domain
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// -------------------- Middleware --------------------
app.use(express.json());

// -------------------- Test Route --------------------
app.get('/', (req, res) => {
  res.send('🚀 Backend is running!');
});

// -------------------- API Routes --------------------
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/leads', leadRoutes);

// -------------------- MongoDB & Server --------------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected');

  const PORT = process.env.PORT || 5000;

  // Bind to 0.0.0.0 for Render
  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });

  // Prevent timeout-related 502 errors on Render
  server.keepAliveTimeout = 120000;
  server.headersTimeout = 120000;

})
.catch(err => {
  console.error('❌ MongoDB connection failed:', err);
});
