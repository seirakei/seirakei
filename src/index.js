const { readFileSync } = require("fs");

const surpriseArray = readFileSync("./src/surprise.txt")
  .toString()
  .split("--Split--");

const surprise = Buffer.from(
  surpriseArray[surpriseArray.length * Math.random() | 0],
  "base64"
).toString();

console.clear();
console.log("\n\n\n\n\n");
console.log(surprise);
console.log("\n\n\n\n\n");