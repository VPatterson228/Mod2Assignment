map(): used to do something to each item in a collection and create a new collection containing the changed items
Example:
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

filter() used to test each item in a collection, and create a new collection containing only items that match
Example:
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);  // Alt method: const filtered = cats.filter((cat) => cat.startsWith("L"));

console.log(filtered);


The standard for loop:
for (initializer; condition; final-expression) {
    // code to run
  }  
An initializer — this is usually a variable set to a number, 
which is incremented to count the number of times the loop has run. 
It is also sometimes referred to as a counter variable.

A condition — this defines when the loop should stop looping. 
This is generally an expression featuring a comparison operator,
 a test to see if the exit condition has been met.

 A final-expression — this is always evaluated (or run) each 
time the loop has gone through a full iteration. It usually serves to 
increment (or in some cases decrement) the counter variable, to bring 
it closer to the point where the condition is no longer true.

while and do...while
initializer
while (condition) {
  // code to run

  final-expression

}

Example:
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

do...while loop is very similar, but provides a variation on the while structure:
initializer
do {
  // code to run

  final-expression
} while (condition)

Example:
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."