function logEvent(eventType, data) {
  // Aquí puedes agregar la lógica para registrar eventos en el sistema de registro
  // Por ejemplo, enviar registros a un servicio de registro o guardar en una base de datos

  console.log(`[${eventType}] -`, data);
}

module.exports = logEvent;
