const rateLimit = require('express-rate-limit');
const { TooManyRequestsError } = require('../errors');
const { USER_SERVICE } = require('../constants');

// Define el límite de solicitudes por IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite de 100 solicitudes por IP en el período de ventana
  message: `Too many requests from this IP, please try again later.`,
});

function rateLimitRequests(req, res, next) {
  // Ejecuta el middleware de limitación de solicitudes
  limiter(req, res, (error) => {
    if (error instanceof TooManyRequestsError) {
      res.status(429).json({ error: error.message });
    } else {
      next(error);
    }
  });
}

module.exports = rateLimitRequests;
