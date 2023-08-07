const mongoose = require('mongoose');

// Define el esquema del producto
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Crea y exporta el modelo de Producto basado en el esquema
const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
