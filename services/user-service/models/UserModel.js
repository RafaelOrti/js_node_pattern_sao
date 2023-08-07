const mongoose = require('mongoose');

// Define el esquema del usuario
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        // Validar el formato del correo electrónico
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
      },
      message: 'Invalid email address',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Crea y exporta el modelo de Usuario basado en el esquema
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
