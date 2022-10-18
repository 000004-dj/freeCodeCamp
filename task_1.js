// it's my first comment 
/* it's my second comment */
function a(){
    return 'hello'
}

// task 2 
var myName;

// task 3
var a;
a = 7;
var b;

//task 4 

var a;
a = 7;
var b;
b = a

//task 5 

var a = 9

//task 6 

var myFirstName = 'Samuil' 
var myLastName = 'Prytchyn' 

//task 7
var a = 5;
var b = 10;
var c = 'I am a';

a = a + 1;
b = b + 5;
c = c + " String!";

//task 8
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
//task 9
let catName = "Oliver";
let catSound = "Meow!";
//task 10 
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
//task 11
const sum = 10 + 10;
//task 12 
const difference = 45 - 33;
//task 13
const product = 8 * 10;
//task 14 
const quotient = 66 / 33;
//task 15 
let myVar = 87;
myVar++
//task 16 
let myVar = 11;
myVar--
//task 17 
const ourDecimal = 5.7;
let myDecimal = 3.14159
//task 18 
const product = 2.0 * 2.5;
//task 19
const quotient = 4.4 / 2.0; 
//task 20 
const remainder = 11 % 3
console.log (remainder) 
//task 21 
let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;
console.log(a,b,c)
//task 22
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;
//task 23
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= 3;
c *= 10;
//task 24 
let a = 48;
let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11;
//task 25
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
//task 26
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
// 27 
const myStr = "This is the start. " + "This is the end."; 
//28
let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';
//29
const myName = "Samuil";
const myStr = "My name is " + myName + "I am well!";
//30
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
//31
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; 
//32
let myStr = "Jello World";
myStr = "Hello World";
//33
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1]; 
//34
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myAdjective + " " + myNoun + " " + myAdverb + " " + myVerb + "."; 
//35 
const myArray = ["jelly", 4];
//36 
const myArray = [[1,2]];
//37
const myArray = [50, 60, 70];
let myData = myArray[0];
//38
const myArray = [18, 64, 99];
myArray[0] = 45;
//39
function nextInLine(arr, item) {
    return item;
  }
  const testArr = [1, 2, 3, 4, 5];
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  //40
  let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
//41
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
  //41
  // Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  //42
  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
  //43
  function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
  //44
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
        return "Yes";
      
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);
  //45
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
  //46
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
  //47
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }else if (val < 5) {
      return "Smaller than 5";
    }else{return "Between 5 and 10";}
  
    
  }
  
  testElseIf(7);
  //48

  function testSize(num) {
    // Only change code below this line
  if (num < 5){
    return "Tiny"
  } else if (num < 10){
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else if (num >= 20) {
    return "Huge"
  }
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);
  //49

  function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta"
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);


  //50


  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);


  //51


  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
        break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
        break;
    case 7:
    case 8:
    case 9:
      answer = "High";
        break;
    
    
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);