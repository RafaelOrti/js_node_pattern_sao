const { UnauthorizedError } = require('../errors');
const { USER_SERVICE } = require('../constants');

function authenticateUser(req, res, next) {
  // Aquí puedes agregar la lógica de autenticación de usuarios
  // Por ejemplo, verificar tokens de autenticación, sesiones, etc.

  // Simulación de autenticación exitosa
  const isAuthenticated = true;

  if (!isAuthenticated) {
    throw new UnauthorizedError(`User authentication failed for ${USER_SERVICE}`);
  }

  // Si la autenticación es exitosa, continúa con la siguiente función en la cadena
  next();
}

module.exports = authenticateUser;
