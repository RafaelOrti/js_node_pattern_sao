// Importa los módulos necesarios para la conexión a la base de datos
const mongoose = require('mongoose');
const { databaseConfig } = require('../services');

// Función para conectar a la base de datos
async function connectToDatabase() {
  try {
    // Construye la cadena de conexión usando la configuración del servicio
    const dbUrl = `mongodb://${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.name}`;

    // Conéctate a la base de datos
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conexión exitosa a la base de datos.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// Exporta la función para poder utilizarla en otros archivos
module.exports = connectToDatabase;
