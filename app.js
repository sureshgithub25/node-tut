// npm global command comes with node
// npm --version
// local dependency - use it only int his particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename>(mac)

//package.json - manifest file (store important info about project/package)
// manual approach (Create package.json int the root , create proprties etc)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [2,[3,[4,[5]]]];

console.log(_.flattenDeep(items));