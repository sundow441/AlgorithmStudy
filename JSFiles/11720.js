let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// let input = require("fs")
//   .readFileSync("./../inputfile.txt")
//   .toString()
//   .trim()
//   .split("\n");

let temp = input[1].split("");

let result = temp.reduce(function (acc, currentValue) {
  return (acc += currentValue * 1);
}, 0);

console.log(parseInt(result));
