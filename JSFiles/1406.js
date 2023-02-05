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

let tempA = input[0].split("");
let tempB = [];

for (let i = 2; i < 2 + parseInt(input[1]); i++) {
  let [order, value] = input[i].split(" ");

  if (tempA.length && order == "L") {
    tempB.push(tempA.pop());
  } else if (tempB.length && order == "D") {
    tempA.push(tempB.pop());
  } else if (order == "B") {
    tempA.pop();
  } else if (order == "P") {
    tempA.push(value);
  }
}
process.stdout.write(tempA.join("") + tempB.reverse().join(""));
