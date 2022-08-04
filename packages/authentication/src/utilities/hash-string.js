function hashString(string, hmac) {
  const rawHash = hmac.digest(string);
  const hash = rawHash.toString('hex');

  return hash;
}

module.exports = hashString;
