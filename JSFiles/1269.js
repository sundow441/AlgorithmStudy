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

let tempA = input[1].split(" ");
let tempB = input[2].split(" ");

let resultA = tempA.reduce(function (acc, currentValue) {
  for (let i = 0; i < tempB.length; i++) {
    if (currentValue == tempB[i]) {
      acc++;
    }
  }
  // console.log(acc);
  return acc;
}, 0);

resultA = tempA.length - resultA;

let resultB = tempB.reduce(function (acc, currentValue) {
  for (let i = 0; i < tempA.length; i++) {
    if (currentValue == tempA[i]) {
      acc++;
    }
  }
  return acc;
}, 0);

resultB = tempB.length - resultB;
console.log(resultA + resultB);
