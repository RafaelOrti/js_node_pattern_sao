const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const connectToDatabase = require('../../config/database/connectToDatabase');

const app = express();

app.use(bodyParser.json());

app.use('/api/products', productRoutes);

// Conéctate a la base de datos antes de iniciar el servidor
connectToDatabase()
  .then(() => {
    const PORT = process.env.PORT || 3002;

    app.listen(PORT, () => {
      console.log(`Product service is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
