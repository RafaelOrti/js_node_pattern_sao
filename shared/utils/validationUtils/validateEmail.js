function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email || typeof email !== 'string') {
    return false;
  }

  return emailRegex.test(email);
}

module.exports = validateEmail;
