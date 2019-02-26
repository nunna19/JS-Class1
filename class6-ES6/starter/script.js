////lecture: let and const of ES6
//
//
//
////ES5
//var name5 = 'Rungnapa Tungsayan';
//var age5 = 27;
//var name5 = 'Nunnapat Chiralerdsitthikhun';
//console.log(name5);
//
//
////ES6
//const name6 = 'Rungnapa Tangsayan'; //for declare the name as constant
//let age6 = 27; // same with "var"
////name6 = 'Nunnapat Chiralerdsitthikhun' // 
//console.log(name6);
//
//
//var count = 0;
//
//
//
//function titleCase(str) {
//    var convertToArray = str.toLowerCase().split(" ");
//    var result = convertToArray.map(function (val) {
//        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//    });
//    return result.join(" ");
//}
//
//console.log(titleCase("I'm a little tea pot"));
//
//
//
//var someObj = {
//    propName: "John"
//};
//
//function propPrefix(str) {
//    var s = "prop";
//    return s + str;
//}
//var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
//console.log(someObj[someProp]); // "John"
//
//
//'use strict';
//
//const fs = require('fs');
//
//process.stdin.resume();
//process.stdin.setEncoding('utf-8');
//
//let inputString = '';
//let currentLine = 0;
//
//process.stdin.on('data', function (inputStdin) {
//    inputString += inputStdin;
//});
//
//process.stdin.on('end', function () {
//    inputString = inputString.split('\n');
//
//    main();
//});
//
//function readLine() {
//    return inputString[currentLine++];
//}


//integer mean full number

//////// Find charavtors word////////
var favoritePhrase = "Don't be evil";

console.log(favoritePhrase.indexOf("Don't")); // =0 because D
console.log(favoritePhrase.indexOf("evil")); // = 9 spacebar is count too
console.log(favoritePhrase.indexOf("vil")); // = 10 from v

//include 
console.log("dog".includes("og")); // true because have 'og'in word 'dog'
console.log("Dog".includes("do")); // false because 'd' is low-case
console.log("Hippopotamus".includes("pop"));
// We can pass an optional second argument to tell includes where to start
console.log("Hippopotamus".includes("Hip", 0)); //true
console.log("Hippopotamus".includes("Hip", 1)); // false because H index arry 0 not 1


/////////boolean///////////////
var age = 25;
var isUnderEighteen = age < 18;

if (isUnderEighteen) {
    console.log("You can enter the disco");
} else {
    console.log("You can't enter the disco");
}


var hardWork = 9;

if (hardWork > 8) {
    console.log("You will be a great developer!"); // console
} else if (hardWork > 6) {
    console.log("You're getting better, but you could be working harder!"); //will not console even it's true
} else {
    console.log("You're slacking. I saw you fall asleep on the desk.");
}

switch (true) {
    case hardWork > 1:
        console.log('try1') //console
        break;
    case hardWork > 2:
        console.log('try2')
        break;
        defaulf:
            console.log('try3')
}




var hardWork = 9;

if (hardWork > 8) {
    console.log("You will be a great developer!"); // console
}
if (hardWork > 10) {
    console.log("You're getting better, but you could be working harder!"); // console
}



var isSmart = true;
if (!isSmart) {
    console.log("Go to school!"); // won't return console because it False
}


var isDeveloper = true;
if (isSmart && isDeveloper) {
    console.log("Congrats, looks like you're an Ironhacker!");
}


var languageOfChoice = "JavaScript"
if (isDeveloper && (languageOfChoice === "JavaScript" || languageOfChoice === "Ruby")) {
    console.log("You are a smart developer!"); // console
}



var hungry = true,
    inTheMoodForBreakfast = true,
    isLunchTime = false,
    isDinnerTime = true,
    isBreakfastTime = false;


// If you're hungry, and it's lunch time
if (hungry && isLunchTime) {
    console.log("Time to go to lunch!");
    // If it is dinner time, and you're not hungry
} else if (isDinnerTime && !hungry) {
    console.log("Let's go for drinks, I'm not very hungry!");
    // If it's breakfast time, or I'm in the mood for breakfast
} else if (isLunchTime || inTheMoodForBreakfast) {
    console.log("I could really go for some french toast..."); // console
} else {
    console.log("Guess I'll have a snack")
}


/////////////// Loop  //////////

//While loop 
//Once the condition is false, the loop ends.
var counter = 30;

while (counter <= 0) {
    console.log(counter);
    counter += 1;
}

// The Do/While Loop 
//The loop will always be executed at least once, even if the condition is false,
var text = ""
var i = 20;

do {
    text += "<br>The number is " + i;
    i++;
}
while (i < 20);

//for/in - loops through the properties of an object raz
var person = {
    name: 'nunna',
    age: 28,
    sex: 'F'
};
var x;
for (x in person) {
    console.log(person[x])
}

// for loops  
//through a block of code a number of times
for (i = 0; i <= counter; i++) {
    console.log(counter);
}

for (var i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log('Boom!')
    } else {
        console.log(i)
    }
}

// forEach loops for array
const arr = ['B', 'a', 'b', 'e', 'l']

arr.forEach(
    (element, index, array) =>
    console.log(element, index, array)
)


/////////increase number by operator///////
var i = 0;
while (i < 10) {
    console.log(i);
    i += 2;
}

/*v -= 4;
v *= 4;
v /= 4;
v %= 4;
v <<= 1;
v >>= 4;
*/

////////////////// break///////////////////
for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {

        break;
    }
}
for (var i = 1; i <= 30; i++) {
    if (i === 28) {
        console.log('how to use break.');
        break;
    } else {
        console.log(i);
    }
}

//It is typically not recommended to use break in loops. There’s typically a better or simpler way.

//For instance, the previous example would be written as so:

for (var i = 1; i < 28; i++) {
    console.log(i);
}
console.log('different code break');



////////////////////continute//////////////
//you want to skip an iteration a loop and continue to the next and skip '3'
for (i = 0; i < 10; i++) {
    console.log(i + 'how to use continue');
    if (i == 5) {

        continue;
    }
}

for (var i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log('try continue')
        //        continue;
    } else {
        console.log(i);
    }
}


for (var i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log('try continue')
        continue;
    }
    console.log(i);

}

//Exercise
for (var i = 0; i <= 50; i++) {
    if (i % 7 === 0) {
        continue;
    } else if (i % 10 === 0 && i % 15 === 0) {
        console.log('Donkey!')
    } else if (i % 2 !== 0 && i % 10 === 0) {
        console.log('Monkey!')
    } else {
        console.log(i)
    }
}


/////////////getElementsByTagName//////////

//function myFunction() {
//  document.getElementsByTagName("P") [0].innerHTML = "Hello World!";  //p = <p> in html and 0 = <p> index
//}



///////////////Nested loops////////////////
//In any code block, you can create any JavaScript statement. This means that, inside an if block you can have nested if blocks, or loop blocks, or any other kind of block. The same logic applies to looping:
var word = "We are in Ironhack"

for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        var x = 0;

        while (x < word.length) {
            var letter = word[x];
            if (letter === "n") //tell you how many 'n' in the var word
            {
                console.log(i + " Donkey!")
            }
            x++;
        }
    }
}


///////////////// Array ///////////////////

//Each “thing” inside of the array is called an element. Each element in the array is separated with commas.

//We can access a particular element in an array with its index. Like strings, the index starts at 0.


var myFamilly = ['dad', 'mom', 'sister', 'son'];

var female = myFamilly[1];
console.log(female);

var male = myFamilly[0];
console.log(male);

// length element
console.log(myFamilly.length); //will start index at 1 don't forget Array's index start at 0

console.log(myFamilly.length - 1) //get the length of Array at last element

console.log(myFamilly[2].length)



// push element

var animalArray = ["Dog", "Cat", "Fish"];
console.log(animalArray);

animalArray.push("Lizard");
console.log(animalArray);


//Add element and update in Array
console.log("Original: " + animalArray);

animalArray[6] = "Turtle";
console.log("Adding some element: " + animalArray);

animalArray[2] = "Snake";
console.log("Updating some element: " + animalArray);


// unshift add first element 
animalArray.unshift("Whale");
console.log(animalArray);

// Remove element Array
delete animalArray[1];
console.log(animalArray);



var animalArray = ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah"];
console.log("Original: " + animalArray);
console.log("------");

// "From the first element, remove one going forward"
animalArray.splice(0, 1);
console.log(animalArray);

// "From the first element, remove one going forward"
animalArray = ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah"];
animalArray.splice(2, 2);
console.log(animalArray);
// If we pass a third argument
// It is inserted as the replacement
animalArray = ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah"];
animalArray.splice(0, 1, "Something else");
console.log(animalArray);


///////////////forEach ////////////////
var animalArray = ["Dog", "Cat", "Fish"];

// you’re passing to forEach a function as a parameter. This is called a callback function.
animalArray.forEach(function (animal) {
    console.log(animal);
});


/////////////Exercise: Common Array Operations/////////////
//sum
var sum = 0;
var number = [2, 3, 6, 1, 7, 10];
for (var i = 0; i < number.length; i++) {
    sum += number[i];
    // if console here it will print 2 5 11 12 19 29  'not array print'
}
console.log(sum);

// ////average
var average = sum / number.length;
console.log(average)

////find large numbet

var currentLargest = null;
var numbers = [10, 16, 99, 0, 52, 41, 7];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > currentLargest) {
        console.log('it is the new currentLargest')
    }
}

console.log("The largest number is: " + currentLargest);




////////////////////////Function//////////////////////////

///////////includes in function

//meaning this function  you don’t care about how the ticket validator validates the ticket, you only care if that ticket number is valid or not.
var ticketRegistry = [234, 345, 567];

function validateTicket(ticketNumber) {
    if (ticketRegistry.includes(ticketNumber)) {
        return "Valid!";
    } else {
        return "Invalid! Go Away";
    }
}
var resultTicket = validateTicket(234);

console.log(resultTicket)





//////////////function with Array
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value * 2;
}
console.log(numbers2)



////////////////function with console
function
tryFunction(a, b) {
    console.log();
}
tryFunction(3, 4); //this case need to call function first then will print


///////////////function with return values

function addNumber(a, b) {
    return a + b;
}

var result = addNumber(5, 9);
console.log(result)

////////////function call another function

function calculator1() {
    var result = sumNumber();
    var resultMultiply = multiplayNumber();

    console.log("the result is " + result + ' and ' + resultMultiply);
}

function sumNumber() {
    return 8 + 2;
}

function multiplayNumber() {
    return 7 * 1;
}

calculator1();




////////////////Function arguments value

//Just like the returning values, arguments can contain any type: arrays, numbers, strings, etc.

var myFamily = ['dad', 'mom', 'sis', 'son', 'bf'];

function familyLength(arrToCount) {
    var theLength = myFamilly.length + 1;
    console.log('i have ' + theLength + ' on my family')
}

familyLength(myFamilly);





////////////////////Function Scope 

//local variables
/*variables defined inside a function block with the var keyword only exist within that function. This is what we call local variable.*/


//globle varaibles
/*ariables that you define outside the function block with the var keyword exist both inside and outside the function.*/

/*Avoid the use of global variables. This will be repeated throughout the course.
Global variables can:
Cause security vulnerabilities.
Create confusion amongst which functions can modify the variable.
Cause you to accidentally create the same variable name twice.
Confuse the developers on your team.*/



// Declaring a global variable
var company = "Ironhack";

function sayHello() {
    var firstName = "Josh"; // Declaring a global variable
    console.log("Name inside of the function: " + firstName);
    console.log("We are in a " + company + " course.");
}

sayHello();

console.log(company);
// Throws an error because there's no variable firstName in scope
//console.log(firstName);



////////////////Arguments are treated as local variables Also, JavaScript will look first in the local scope. Otherwise, it will look for a global scope.

var city = "Madrid";

function printCityName(city) {
    // It will print "Miami" since it is declared the local scope as an argument.
    console.log(city);
}

printCityName("Miami");

function printCityName2() {
    // It will print "Madrid" since it has no variables in the local scope with that reference.
    console.log(city);
}

printCityName2();

console.log(city);





//arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
//Arguments are values passed to the function when it is invoked and Parameters are variables listed as a part of the function definition.
function func1(a, b, c) // a,b,c is parameters 
{
    console.log(arguments[0]);
    // expected output: 1

    console.log(arguments[1]);
    // expected output: 2

    console.log(arguments[2]);
    //     expected output: 3
}

func1(1, 2, 3); //// 1,2,3 is arguments





////////////////////Rest Parameters
//เมื่อเราประกาศ function หลายๆ ตัวโดยมี parameter ที่ต่างกันตัวที่จะถูกเรียกใช้คือตัวที่ประกาศเป็นตัวสุดท้ายแต่สิ่งที่ java script ต่างจากภาษาอื่นตรงที่ เราสามารถส่ง parameter ไปได้มากกว่าที่ได้ถูกประกาศไว้ได้ ซึ่งก็สรุปได้ว่า java script นั้นเรียก function โดยดูที่ชื่อเป็นหลัก ไม่ได้สนใจว่าจะมี parameter ครบตามที่ประกาศไว้หรือไม่ซึ่งก็มีหลายคนแก้ปัญหาด้วยการตั้งชื่อ function ให้มันแตกต่างกันตาม parameter ซึ่งก็ไม่ผิดอะไร (เห็นทำกันหลาย project อยู่)
//แบบที่ 1 ประกาศตัวแปรไปเยอะๆ แล้ว check if

function getMyName(arg1, arg2, arg3) {
    // แล้ว if check ค่าเอา
    if (arg3) return arg1 + arg2 + arg3;
    else if (arg2) return arg1 + arg2;
    else if (arg1) return 'Hi ' + arg1;
}
getMyName("X"); //result is Hi X
getMyName("Hi ", "X"); //result is Hi X
getMyName("Hi ", "MR. ", "X"); //result is Hi MR. X
getMyName("Hi ", "MR. ", "X", "How are you"); //result is Hi MR. X



//แบบที่ 2 ใช้ตัวแปรชื่อ arguments ดังตัวอย่าง

function getMyName(arg1, arg2, arg3) {
    var str = "";
    for (i = 0; i < arguments.length; i++) {
        str += arguments[i];
    }
    return str;
}
getMyName("X"); //result is Hi X
getMyName("Hi ", "X"); //result is Hi X
getMyName("Hi ", "MR. ", "X"); //result is Hi MR. X
getMyName("Hi ", "MR. ", "X", "How are you"); //result is Hi MR. X How are you


//แบบที่ 3 ประกาศรับ parameter แบบ rest parameters วิธีการก็คือใส่ จุด 3 จุดเข้าไปที่หน้าตัวแปรของเรา ตัวแปรตัวนั้นก็จะกลายเป็น rest parameters แล้ว ดังตัวอย่าง

function getMyName(...args) {
    var str = args.join();
    return str;
}
getMyName("X"); //result is Hi X
getMyName("Hi ", "X"); //result is Hi X
getMyName("Hi ", "MR. ", "X"); //result is Hi MR. X
getMyName("Hi ", "MR. ", "X", "How are you"); //result is Hi MR. X How are you

//จะเห็นว่าวิธีที่ 3 จะทำให้ code เราสั้นลงเนื่องด้วยการใช้ rest parameter นั้น ตัว parameter เรานั้นจะอยู่ในรูปแบบของ array ซึ่งเราก็จะสามารถนำมาใช้ได้เลยต่างกับ arguments ที่อยู่ในรูปแบบของ object ถ้าจะใช้ก็ต้อง วน loop หรือต้องแปลงกลับออกมาให้อยู่ในรูปแบบ array ก่อนถึงสามารถใช้งานได้


/////////////////////////Exercise////////////////////////

function addNumbers(a, b) {
    return a + b;
}
//var sum = addNumber(3, 5);
//console.log(sum);

//or
//function addNumbers(a, b) {
//    var add = a + b;
//    console.log(add);
//}
//addNumber(10, 4);

//......................................

function subtracNumbers(a, b) {
    return a - b;
}

//......................................

function multiplyNumbers(a, b) {
    return a * b;
}

//......................................

function divideNumbers(a, b) {
    return a / b;
}

//......................................
function calulator(a, b, operation) {
    var add = addNumbers(a, b);
    var sub = subtracNumbers(a, b);
    var multiply = multiplyNumbers(a, b);
    var divide = divideNumbers(a, b);
    console.log('this is add result ' + add + ' this is subtrac ' + sub + 'this is mutiply ' + multiply + ' this is divide ' + divide)
}

calulator(3, 5);
calulator(8, 9);





////////////////////Object///////////////////
//add Object 2 way with dot or brackets
var olympicRecords = {
    athletics100Men: "Justin Gatlin",
    athleticsLongJumpMen: "Mike Powel",
}

olympicRecords["swimming400Women"] = "Katie Ledecky";
olympicRecords.swimming200Men = "Michael Phelps";


///////////// update object
//use dot or brackets like add but with a old key you want to change and new value

olympicRecords.swimming200Men = 'nunnapat';

///////////// removing propertie in dot or brackets
delete olympicRecords.athletics100Men;


////////////// list properties'key'
//This is useful when you have a huge object and you are not sure what properties it has. Object.keys() receives an object as a parameter. In our case it would be:
Object.keys(olympicRecords);
// => [ "athleticsLongJumpMen", "swimming200Men", "swimming400Women"]



/////////////////for..in loop for object
//for/in - loops through the properties of an object raz



var person = {
    name: 'nunna',
    age: 28,
    sex: 'F'
};


////////////printing keys
for (var keysName in person) {
    console.log('printKey:' + keysName) //printKey:name, printKey:age, printKey:sex
}

///////////printing Values
for (var valueName in person) {
    console.log('printValue:' + person[valueName])
}

///////////print both

for (var printboth in person) {
    console.log('object:' + printboth + person[printboth])
}



//////////////////////Matrix Iteration//////////
var board = [
  [null, null, null, "S", null],
  [null, "S", null, "S", null],
  ["S", null, null, null, null],
  [null, "S", null, null, null],
  [null, null, null, null, "S"],
];

var firstRow = board[0];
console.log("First Row: " + firstRow);

var secondRow = board[1];
console.log("Second Row: " + secondRow);

var thirdRow = board[2];
console.log("Third Row: " + thirdRow);


///////////////////////Findding Ships

var firstRow = board[0];

var emptySpace = firstRow[0];
var ship = firstRow[3];

console.log("Empty Space: " + emptySpace);
console.log("Ship: " + ship);

// We can also shortcut assigning the row to a variable
console.log("Third row, first col: " + board[2][0]);


/////////////////Matrix Iteration
var board = [
  [null, null, null, "S", null],
  [null, "S", null, "S", null],
  ["S", null, null, null, null],
  [null, "S", null, null, null],
  [null, null, null, null, "S"],
];
for (var i = 0; i < board.length; i++) {
    var row = board[i];

    for (var x = 0; x < row.length; x++) {
        var column = row[x];


        if (column === 'S') {
            console.log('ship found at: ' + i + ', ' + x);
        }
    }
}


//////////////We will simply create a loop that will iterate 10 times to take turns:

for (var i = 0; i < 10; i++) {

}




///////////////Random Index
//We need to pick a random square on the board. We can do this with JavaScript’s Math.random() function.
//
//To pick a random square without going out of bounds, we have to select a row with an index between 0 and 4, and a column with an index between 0 and 4.


var board = [
  [null, null, null, "X", null],
  [null, "X", null, "X", null],
  ["X", null, null, null, null],
  [null, "X", null, null, null],
  [null, null, null, null, "X"],
];

for (var i = 0; i < 10; i++) {
    var row = getRandomNum();
    var column = getRandomNum();
    console.log('result on :' + row + ', ' + column);

    var getRandomSquare = board[row][column];
    console.log('Random square      = ' + getRandomSquare);
}

function getRandomNum() {
    return Math.floor(Math.random() * 5);
}







var board = [
  [null, null, null, "S", null],
  [null, "S", null, "S", null],
  ["S", null, null, null, null],
  [null, "S", null, null, null],
  [null, null, null, null, "S"],
];

for (var i = 0; i < 10; i++) {
    var row = getRandomNum();
    var column = getRandomNum();

    var randomSquare = board[row][column];

    if (randomSquare === "S") {
        console.log("Hit on: " + row + ", " + column);
        board[row][column] = null;
    }
}

function getRandomNum() {
    return Math.floor(Math.random() * 5);
}









var board1 = [
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']];

console.log(board1.join('\n') + '\n\n');

// Move King's Pawn forward 2
board1[4][4] = board1[6][4];
board1[6][4] = ' ';
console.log(board1.join('\n'));
