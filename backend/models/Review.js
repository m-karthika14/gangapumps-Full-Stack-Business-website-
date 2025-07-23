const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productId: String,
  name: String,
  rating: Number,
  comment: String,
  date: String
});

module.exports = mongoose.model('Review', reviewSchema);
