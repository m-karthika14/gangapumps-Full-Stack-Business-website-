const Product = require('../models/Product');

// GET all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// POST - create a new product
exports.createProduct = async (req, res) => {
  try {
    console.log('Received data from frontend:', req.body);

    const {
      name,
      shortDescription,
      category,
      brand,
      useCase,
      image,
      description,
      features
    } = req.body;

    const newProduct = new Product({
      name,
      shortDescription,
      category,
      brand,
      useCase,
      image,
      description,
      features
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
    console.log('✅ Product saved successfully:', savedProduct);
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ error: 'Failed to add product' });
  }
};

// PUT - update a product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

// DELETE - remove a product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};
