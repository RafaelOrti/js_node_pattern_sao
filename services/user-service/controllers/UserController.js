const UserModel = require('../models/UserModel');
const { NotFoundError, ValidationError } = require('../../shared/errors');

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
  }

  static async getUserById(req, res) {
    try {
      const userId = req.params.id;
      const user = await UserModel.findById(userId);

      if (!user) {
        throw new NotFoundError(`User with ID ${userId} not found.`);
      }

      res.status(200).json(user);
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ error: error.message });
      } else {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'An error occurred while fetching the user.' });
      }
    }
  }

  static async createUser(req, res) {
    try {
      const { name, email } = req.body;
      const newUser = new UserModel({ name, email });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      if (error.name === 'ValidationError') {
        res.status(400).json({ error: error.message });
      } else {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred while creating the user.' });
      }
    }
  }

  // Agrega más métodos del controlador según sea necesario
}

module.exports = UserController;
