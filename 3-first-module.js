// CommonJS, every file is module(by default)
// Modules - Encpasulted Code (Only share Minimum)



const names = require('./4-name');
const sayHi = require('./5-utils');
console.log(require('./6-alternative-flavor'));
require('./7-mind-granade');
 console.log(names);
  sayHi('Suresh');
 sayHi(names.peter);
sayHi(names.john);