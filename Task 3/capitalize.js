const capitalize = (string) => {
  const verified = string.toLowerCase();
  return verified[0].toUpperCase() + verified.slice(1);

}

module.exports = capitalize;