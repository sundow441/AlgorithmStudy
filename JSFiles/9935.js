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
let bomb = input[1].split("");

for (let i = 0; i < tempA.length; i++) {
  let flag = false;
  if (tempA[i] == bomb[bomb.length - 1]) {
    for (let j = 0; j < bomb.length - 1; j++) {
      if (tempB[tempB.length - (j + 1)] == bomb[bomb.length - (j + 2)]) {
        continue;
      }
      flag = true;
      break;
    }
    if (flag) {
      tempB.push(tempA[i]);
    } else {
      for (let k = 0; k < bomb.length - 1; k++) {
        tempB.pop();
      }
    }
  } else {
    tempB.push(tempA[i]);
  }
}

if (tempB.join("") == "") {
  console.log("FRULA");
} else {
  process.stdout.write(tempB.join(""));
}
