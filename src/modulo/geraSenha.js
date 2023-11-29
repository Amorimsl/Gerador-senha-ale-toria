

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const uppercase = () => String.fromCharCode(rand(65, 91));
const lowercase = () => String.fromCharCode(rand(97, 123));
const geneNumber = () => String.fromCharCode(rand(48, 58));
const symbols = '!"#$%¨&*()_-+[]}{^~;.//,=';
const takeSymbols = () => symbols[rand(0, symbols.length)];


export default function randomPassword(qtd, upper, lower, number, symbol) {
  const passArray = [];
  qtd = Number(qtd);
  for (let i = 0; i < qtd; i++) {
    upper && passArray.push(uppercase());
    lower && passArray.push(lowercase());
    number && passArray.push(geneNumber());
    symbol && passArray.push(takeSymbols());
  }
  return passArray.join('').slice(0, qtd);
}
