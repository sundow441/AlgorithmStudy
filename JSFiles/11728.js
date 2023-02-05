// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
let input = require("fs")
  .readFileSync("./../inputfile.txt")
  .toString()
  .trim()
  .split("\r\n");

let tempA = input[1].length === 1 ? [input[1]] : input[1].split(" ");
let tempB = input[2].length === 1 ? [input[2]] : input[2].split(" ");
let result = [];

tempA = tempA.map((e) => parseInt(e));
tempB = tempB.map((e) => parseInt(e));

let indexA = 0;
let indexB = 0;

while (indexA < tempA.length || indexB < tempB.length) {
  if (indexA < tempA.length && indexB < tempB.length) {
    if (tempA[indexA] < tempB[indexB]) {
      result.push(tempA[indexA]);
      indexA++;
    } else {
      result.push(tempB[indexB]);
      indexB++;
    }
  } else {
    if (indexA < tempA.length) {
      result.push(...tempA.slice(indexA));
      indexA = tempA.length;
    } else {
      result.push(...tempB.slice(indexB));
      indexB = tempB.length;
    }
  }
}
process.stdout.write(`${result.join(" ")}`);
