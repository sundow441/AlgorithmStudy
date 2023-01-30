const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let i = 2;
while (i <= input) {
  if (input % i == 0) {
    console.log(i);
    input = input / i;
  } else {
    i++;
  }
}
