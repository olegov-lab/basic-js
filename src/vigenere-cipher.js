const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (flag = true) {
    this.flag = flag;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    this.n = this.alphabet.length;
  }

  encrypt(message, key) {

    if (!message && !key) {
      throw 'Error';
    }

    let result = '';
    let modernMessage = message.toUpperCase();
    let modernKey = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {

      if (this.alphabet.includes(modernMessage[i])) {
        modernKey += key[j % key.length];
        j++;
      } else {
        modernKey += message[i];
      }
    }

    modernKey = modernKey.toUpperCase();

    for (let i = 0; i < message.length; i++) {

      if (this.alphabet.includes(modernMessage[i])) {
        let item = (this.alphabet.indexOf(modernMessage[i]) + this.alphabet.indexOf(modernKey[i])) % this.n;
        result += this.alphabet[item];
      } else {
        result += modernMessage[i];
      }
    }

    if (this.flag) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }

  }

  decrypt(message, key) {

    if (!message && !key) {
      throw 'Error';
    }

    let result = '';
    let modernMessage = message.toUpperCase();
    let modernKey = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {

      if (this.alphabet.includes(modernMessage[i])) {
        modernKey += key[j % key.length];
        j++;
      } else {
        modernKey += message[i];
      }
    }

    modernKey = modernKey.toUpperCase();

    for (let i = 0; i < message.length; i++) {

      if (this.alphabet.includes(modernMessage[i])) {
        let item = (this.alphabet.indexOf(modernMessage[i]) + this.n - this.alphabet.indexOf(modernKey[i])) % this.n;
        result += this.alphabet[item];
      } else {
        result += modernMessage[i];
      }
    }

    if (this.flag) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }

    }

}

module.exports = VigenereCipheringMachine;
