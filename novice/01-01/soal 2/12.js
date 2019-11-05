(100 + 4) * 11


`Down on the sea`
"Lie on the ocean"
'Float on the ocean'

"This is the first line\nAnd this is the second"

console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

console.log(- (10 - 2))
// → -8

console.log(3 > 2)
// → true
console.log(3 < 2)
// → false

console.log("Aardvark" < "Zoroaster")
// → true

console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false

console.log(NaN == NaN)
// → false




console.log(true && false)
// → false
console.log(true && true)
// → true

console.log(false || true)
// → true
console.log(false || false)
// → false


1 + 1 == 2 && 10 * 10 > 50

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2




console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true



console.log(null == undefined);
// → true
console.log(null == 0);
// → false

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes








1;
!false;

let caught = 5 * 5;



let ten = 10;
console.log(ten * ten);
// → 100


let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark


let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105


let one = 1, two = 2;
console.log(one + two);
// → 3

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda

prompt("Enter passcode");



let x = 30;
console.log("the value of x is", x);
// → the value of x is 30

console.log(Math.max(2, 4));
// → 4


console.log(Math.min(2, 4) + 100);
// → 102

let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
            theNumber * theNumber);


let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}

if (1 + 1 == 2) console.log("It's true");
// → It's true


let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}


let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}


console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);



let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera


let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024

let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

if (false != true) {
    console.log("That makes sense.");
    if (1 < 2) {
      console.log("No surprise there.");
    }
  }

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
  }
  // → 0
  // → 2
  //   … etcetera


  let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024


for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  }
  // → 21


  if (x == "value1") action1();
  else if (x == "value2") action2();
  else if (x == "value3") action3();
  else defaultAction();


  switch (prompt("What is the weather like?")) {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Dress lightly.");
    case "cloudy":
      console.log("Go outside.");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  }



  let accountBalance = calculateBalance(account);
  // It's a green hollow where a river sings
  accountBalance.adjust();
  // Madly catching white tatters in the grass.
  let report = new Report();
  // Where the sun on the proud mountain rings:
  addToReport(accountBalance, report);
  // It's a little valley, foaming like light in a glass.



/*
  I first found this number scrawled on the back of an old notebook.
  Since then, it has often dropped by, showing up in phone numbers
  and the serial numbers of products that I've bought. It obviously
  likes me, so I've decided to keep it.
*/
const myNumber = 11213;



