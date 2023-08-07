const ProductModel = require('../models/ProductModel');
const { NotFoundError, ValidationError } = require('../../shared/errors');

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await ProductModel.find();
      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'An error occurred while fetching products.' });
    }
  }

  static async getProductById(req, res) {
    try {
      const productId = req.params.id;
      const product = await ProductModel.findById(productId);

      if (!product) {
        throw new NotFoundError(`Product with ID ${productId} not found.`);
      }

      res.status(200).json(product);
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ error: error.message });
      } else {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'An error occurred while fetching the product.' });
      }
    }
  }

  static async createProduct(req, res) {
    try {
      const { name, price } = req.body;
      const newProduct = new ProductModel({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      if (error.name === 'ValidationError') {
        res.status(400).json({ error: error.message });
      } else {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'An error occurred while creating the product.' });
      }
    }
  }

  // Agrega más métodos del controlador según sea necesario
}

module.exports = ProductController;
