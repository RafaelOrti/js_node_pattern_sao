// Configuración de servicios externos utilizados en la aplicación
const serviceConfig = {
  userService: {
    baseURL: 'https://api.userservice.com',
    apiKey: 'your-api-key',
  },
  productService: {
    baseURL: 'https://api.productservice.com',
    apiKey: 'your-api-key',
  },
  // Agrega más configuraciones de servicios según sea necesario
};

// Exporta la configuración para poder utilizarla en otros archivos
module.exports = serviceConfig;
