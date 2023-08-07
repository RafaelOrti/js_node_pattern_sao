const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./services/user-service/routes/userRoutes');
const productRoutes = require('./services/product-service/routes/productRoutes');
const { rateLimitRequests } = require('./shared/middlewares');

const app = express();

app.use(bodyParser.json());

// Agrega middleware de limitación de solicitudes
app.use(rateLimitRequests);

// Configura las rutas para los servicios de usuarios y productos
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
