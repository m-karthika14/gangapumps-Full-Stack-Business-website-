const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  shortDescription: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  brand: { type: String, required: true, trim: true },
  useCase: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  description: {
    type: String,
    required: true,
    default: 'No description provided.',
    trim: true
  },
  features: {
    type: [String],
    required: true,
    default: ['Feature not specified']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
