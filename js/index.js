// Iteration 1: Names and Input
let hacker1 = "Bogdan";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Andreu";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops

const reversedArray = hacker1.toUpperCase().split("");
console.log(reversedArray);
const reversed = hacker2.split("");
console.log(reversed.reverse());
console.log("Joined reserved array", reversed.join(""));

// console.log(reversed, reversedArray);
if (reversedArray[0] > reversed[0]) {
  console.log("The driver's name goes first.");
} else if (reversedArray[0] < reversed[0]) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
