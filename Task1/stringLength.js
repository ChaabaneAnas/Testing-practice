const stringlength = (string) => {
  if(string.length <= 1 || string.length >= 10 ){
    return 'invalid'
  }
  return string.length
};


module.exports = stringlength