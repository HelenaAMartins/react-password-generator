/**
 * Generates a number between min and max
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

/**
 * Generates an uppercase letter randomly
 * @returns {String}
 */
const getUpperCase = () => String.fromCharCode(rand(65, 91));

/**
 * Generates an lowercase letter randomly
 * @returns {String}
 */
const getLowerCase = () => String.fromCharCode(rand(97, 123));

/**
 * Generates a number randomly
 * @returns {String}
 */
const getNumber = () => String.fromCharCode(rand(48, 58));

/**
 * Generates a special character randomly
 * @returns {String}
 */
const getSymbols = () => {
  const symbols = ",.;~^[]{}!@#$%*()_+=-";
  return symbols[rand(0, symbols.length)];
};

/**
 * Generates password following the attributes
 * @param {Number} quantity 
 * @param {Boolean} upperCase 
 * @param {Boolean} lowerCase 
 * @param {Boolean} numbers 
 * @param {Boolean} symbols 
 * @returns {String} returns password as string
 */
export default function getPassword(
  quantity,
  upperCase,
  lowerCase,
  numbers,
  symbols
) {
  const password = [];
  quantity = Number(quantity);

  for (let i = 0; i < quantity; i++) {
    upperCase && password.push(getUpperCase());
    lowerCase && password.push(getLowerCase());
    numbers && password.push(getNumber());
    symbols && password.push(getSymbols());
  }

  return password
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("")
    .slice(0, quantity);
}
