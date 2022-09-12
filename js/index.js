// Iteration 1: Names and Input
let hacker1 = "Bogdan";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Bogdan";
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

const reversedArray = hacker1.toUpperCase().split("").join(" ");
console.log(reversedArray);
const reversed = hacker2.split("");
console.log(reversed.reverse().join(""));
console.log("Joined reserved array", reversed.join(""));

// const hackersNames = [hacker1, hacker2].sort();
// //console.log(hackersNames);
// if (hackersNames[0] === hacker1) {
//   console.log("The driver's name goes first.");
// } else if (hackersNames[0] === hacker2) {
//   console.log("Yo, the navigator goes first definitely.");
// } else if (hackersNames[0] === hackersNames[1]) {
//   console.log("What?! You both have the same name?");
// }

function ordenLexicografico(string1, string2) {
  if (string1 > string2) {
    console.log("The driver's name goes first");
  } else if (string1 > string2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}

ordenLexicografico(hacker1, hacker2);

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices neque ornare. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies. Sit amet commodo nulla facilisi nullam. Feugiat sed lectus vestibulum mattis ullamcorper. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Pharetra pharetra massa massa ultricies mi quis hendrerit. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Enim neque volutpat ac tincidunt vitae semper quis lectus. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.

Quisque id diam vel quam elementum pulvinar etiam non quam. Proin fermentum leo vel orci. Viverra nam libero justo laoreet sit amet cursus sit. Tellus in metus vulputate eu scelerisque. Purus gravida quis blandit turpis cursus in. Sapien eget mi proin sed. Feugiat scelerisque varius morbi enim nunc. Faucibus purus in massa tempor nec feugiat. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Nisl condimentum id venenatis a. Sit amet aliquam id diam maecenas ultricies mi. Mollis nunc sed id semper risus. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. et

Sed arcu non odio euismod lacinia. Eu consequat ac felis donec et odio pellentesque diam volutpat. Bibendum est ultricies integer quis auctor elit sed vulputate. Ante in nibh mauris cursus mattis molestie a iaculis at. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Odio tempor orci dapibus ultrices in iaculis nunc sed. Consequat semper viverra nam libero justo laoreet sit amet cursus. Lectus mauris ultrices eros in cursus turpis. Massa sed elementum tempus egestas sed sed risus. Elementum nibh tellus molestie nunc. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. In aliquam sem fringilla ut. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.`;

function amountOfWords(andreu) {
  return andreu.split("").filter((word) => word !== " ").length;
}

function etFinding(andreu) {
  return andreu.split(" et ").length;
}

// function etFindingWithFilter(juan) {
//   return juan.split(" ").filter((farik) => farik == "et").length;
// }

// function marianoFunction(string) {
//   return `${(string.match(/ et /g) || []).length}`;
// }

// console.log(marianoFunction(lorem));
// console.log(etFindingWithFilter(lorem));
console.log(etFinding(lorem));
console.log(amountOfWords(lorem));

// BONUS 2

let phraseToCheck = "luzazul";

function palindromeCheck(wordToCheck) {
  let length = wordToCheck.length - 1;
  let index = 0;

  while (index < length) {
    if (wordToCheck[index] === " ") index++;
    else if (wordToCheck[length] === " ") length--;
    else if (wordToCheck[index] === wordToCheck[length]) {
      index++;
      length--;
    } else return false;
  }
  return true;
}

console.log(palindromeCheck(phraseToCheck));

const phraseToCheck2 = "Was it a car or a cat I saw?";
const withoutSpecialChars = phraseToCheck.replace(/[\W]/g, "");
const splitSentence = withoutSpecialChars.split("");
const firstCompare = splitSentence.join("").toLowerCase();
const reversedSentence = splitSentence.reverse();
const secondCompare = reversedSentence.join("").toLowerCase();
firstCompare === secondCompare
  ? console.log("It's a Palindrome! :)")
  : console.log("It's not a Palindrome, bad luck! :(");
