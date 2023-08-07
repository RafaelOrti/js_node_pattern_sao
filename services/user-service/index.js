const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const connectToDatabase = require('../../config/database/connectToDatabase');

const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoutes);

// Conéctate a la base de datos antes de iniciar el servidor
connectToDatabase()
  .then(() => {
    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
      console.log(`User service is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
