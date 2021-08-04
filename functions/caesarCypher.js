const caesarCipher = (str, shift) => {
  if (shift === 0) return str;

  if (shift < 0) {
    shift = 26 + (shift % 26);
  }

  return str.replace(/[a-zA-Z]/g, (char) => {

    // Upper case
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      return String.fromCharCode(((char.charCodeAt() - 65 + shift) % 26) + 65)
    } 
  
    // Lower case
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      return String.fromCharCode(((char.charCodeAt() - 97 + shift) % 26) + 97)
    }

    return char; 
  });
};

console.log(caesarCipher('Hello!', -1))

module.exports = caesarCipher;
