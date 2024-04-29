const string = "The revolution will not be televised";
console.log(string);
const badstring=string;
console.log(badstring);

const single= 'Single quotes';
const double= "double quotes";
const backtick =`backtick`; //template literal: a special way to declare a string. 1. embed javaScript 2. use over multiple lines

console.log(single);
console.log(double);
console.log(backtick);

//wrapping JavaScript variables in side template literals
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting)

const one= "Hello, ";
const two = "how are you?"
const joined = `${one}${two}`;
console.log(joined);

// expression in strings
const song="Fight the Youth";
const score= 9;
const highestScoore =10;
const output = `I like the song ${song}, I gave it a score of ${(score/highestScoore)* 100}%.`;
console.log(output);

//creating a new line
const newline = `One day you finally knew
what you had to do, and began`
console.log(newline);

const newline1 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline1);

//adding quotes
const goodquotes1 ='She said "I thin so"';
const goodquotes2 = `She said "I'm not going in there!"`;
const bigmouth = 'I\'ve got no right to take my place...'; // Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a backslash just before the character
console.log(bigmouth);

//convert to a string or a string variable that you want to convert to a number, 
// number(): converts anything passed to it in to a number
const myString ="123";
const myNum = Number(myString);
console.log(typeof myNum);

//String(): function converts its argument to a string
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);


                                  // String Methods
//String length: return the length of the string
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);



            //Extracting Sting Characters
                
//String charAt(): returns the character at a specified index (position) in a string
let text1 = "HELLO WORLD";
let char = text1.charAt(0);
console.log(char);

//String charCodeAt(): method returns a UTF-16 code (an integer between 0 and 65535)
let text2 = "HELLO WORLD";
let char2 = text2.charCodeAt(0);
console.log(char2);

//String at(): eturns the character at a specified index (position) in a string
const name2 = "W3Schools";
let letter = name2.at(2);
console.log(letter);

const name3 = "W3Schools";
let letter3 = name3[2];
console.log(letter3);
//String [ ]
let text3 = "HELLO WORLD";
let char3 = text3[0];
console.log(char3);


//Extracting String Parts

//String slice(): Extract a part of a string from a position
let text4 = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part); //output Banana

//String substring(): extracts a part of a string and returns the extracted parts in a new string
                    //takes 2 parameters: start position, and end position (end not included)
let str = "Apple, Banana, Kiwi";
let part1 = str.substring(7, 13); //output: Banana

//String substr(): extract a part of a string and returns the extracted parts in a new string
                //the second parameter specifies the length of the extracted part




//String toUpperCase(): A string is converted to upper case 
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

//String toLowerCase(): string is converted to lower case
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower

//String concat(): joins two or more strings
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

//String trim(): method removes whitespace from both sides of a string
let text1 = "      Hello World!      ";
let text2 = text1.trim();

//String trimStart(): removes whitespace only from the start of a string
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

//String trimEnd() :removes whitespace only from the end of a string.
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();

//String padStart():pads a string with another string (multiple times) until it reaches a given length.
let text = "5";
let padded = text.padStart(4,"0"); //Pad a string with "0" until it reaches the length 4:
/*The padStart() method is a string method. To pad a number, convert the number to a string first. */
let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");

//String padEnd(): pads a string from the end.
let text = "5";
let padded = text.padEnd(4,"x");

//String repeat(): returns a string with a number of copies of a string
//Syntax: string.repeat(count)
let text = "Hello world!";
let result = text.repeat(2);

//String replace(): eplaces a specified value with another value in a string ***eplaces only the first match***
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

//String replaceAll()

//String split(): string can be converted to an array with the split() method
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

/*JavaScript String Methods
charAt()	        Returns the character at a specified index (position)
charCodeAt()	    Returns the Unicode of the character at a specified index
concat()	        Returns two or more joined strings
constructor	        Returns the string's constructor function
endsWith()	        Returns if a string ends with a specified value
fromCharCode()	    Returns Unicode values as characters
includes()	        Returns if a string contains a specified value
indexOf()	        Returns the index (position) of the first occurrence of a value in a string
join                Joins words together
lastIndexOf()	    Returns the index (position) of the last occurrence of a value in a string
length	            Returns the length of a string
localeCompare()	    Compares two strings in the current locale
match()	            Searches a string for a value, or a regular expression, and returns the matches
prototype	        Allows you to add properties and methods to an object
repeat()	        Returns a new string with a number of copies of a string
replace()	        Searches a string for a pattern, and returns a string where the first match is replaced
replaceAll()	    Searches a string for a pattern and returns a new string where all matches are replaced
search()	        Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	            Extracts a part of a string and returns a new string
split()	            Splits a string into an array of substrings
startsWith()	    Checks whether a string begins with specified characters
substr()	        Extracts a number of characters from a string, from a start index (position)
substring()	        Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	    Returns a string converted to lowercase letters
toString()	        Returns a string or a string object as a string
toUpperCase()	    Returns a string converted to uppercase letters
trim()	            Returns a string with removed whitespaces
trimEnd()	        Returns a string with removed whitespaces from the end
trimStart()	        Returns a string with removed whitespaces from the start
valueOf()	        Returns the primitive value of a string or a string object


*/