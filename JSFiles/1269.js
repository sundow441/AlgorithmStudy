let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// let input = require("fs")
//   .readFileSync("./../inputfile.txt")
//   .toString()
//   .trim()
//   .split("\r\n");

let tempA = new Set(input[1].split(" ").map(Number));
let tempB = new Set(input[2].split(" ").map(Number));

let result = new Set([...tempA, ...tempB]);

tempA.forEach(function (number) {
  if (tempB.has(number)) {
    result.delete(number);
  }
});
console.log(result.size);
