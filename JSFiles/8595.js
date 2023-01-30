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
let hidden = "";

let result = temp.reduce(function (acc, currentValue, currentIndex, array) {
  if (currentValue >= 0 && currentValue <= 9) {
    hidden += currentValue;
    if (array[currentIndex + 1] == null) {
      acc = acc + parseInt(hidden);
    }
  } else {
    if (hidden == "") {
      hidden = "0";
      acc = acc + parseInt(hidden);
      hidden = "";
    } else {
      acc = acc + parseInt(hidden);
      hidden = "";
    }
  }
  return acc;
}, 0);

console.log(result);
