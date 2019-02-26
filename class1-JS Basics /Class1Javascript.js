console.log("hello world");


//////variables , data types and name rule
/*

var firstName = 'Nuuna';
console.log(firstName);

var lastName = 'chiralerdsitthikhun';
var age = 27;  

var fullAge = true; // boolean "true/false" //
console.log(fullAge);

var job;
console.log(job);

job = 'chef';
console.log(job);


var _2sisterName = ['ngek', 'tor'];
console.log(_2sisterName);
//Never name variable with number first have to put _ or latter before number , can't name with JS reserved words.  

*/

//////variables mutation and type coertion
/*
var firstName = 'Nunna';
var age = 27;
var job = 'chef';
var isHaveKid;
isHaveKid = true;



//type coertion is age'number' and boolean to automatic convert to be string when you console.log string.  it is JS style.//
console.log('My name is ' + firstName + ' ' + age + ' years old. ' + 'I am a ' + job + '. Is i have kid ' + isHaveKid + '.');


alert('My name is ' + firstName + ' ' + age + ' years old. ' + 'I am a ' + job + '. Is i have kid ' + isHaveKid + '.');


var lastName = prompt(' What is Nuuna last name.?')
console.log(firstName + '  ' + lastName);

// variable mutation  
job = 'Quality manager';
firstName = 'romain';
age = 33;

console.log('My name is ' + firstName + ' ' + age + ' years old. ' + 'I am a ' + job + '. Is i have kid ' + isHaveKid + '.');

*/

//////basic operator
/*


// use var will be current scope/local scope 
// not use var will be global scope will exposed to another funtion
var yearNunna, yearRomain;
now = 2018; //don't know why now don't need set var first.
ageNunna = 28
ageRomain = 34

// math operator
yearNunna = now - ageNunna;
yearRomain = now - ageRomain;

console.log(yearNunna);
console.log(now + 10);


//logical operator
var nunnaOlder = ageNunna > ageRomain;
console.log(nunnaOlder);


//typeof operator
console.log(typeof nunnaOlder);
console.log(typeof ageNunna);
console.log(typeof 'Romain is older then nunna');
var x;
console.log(x);


*/

//////Operator and Operator Precedance Table
/*
var now = 2018;
var yearNunna = 1990;
var fullAge = 18;

// multiple individual operator table
var isFullAge = now - yearNunna >= fullAge;
console.log(isFullAge);


var ageNunna = now - yearNunna;
var ageRomain = 33;

// Grouping operator precedent table
var average = (ageNunna + ageRomain) / 2;
console.log(average);


// multiple assignment  
var x, y;

//Associativity operator table 
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 //32 - 6 // 26 and x is 26 because read valume to the right-to-left
console.log(x, y);

// more operator
x *= 2; // it's mean x = x * 2;
console.log(x);
x += 20;
console.log(x);

x++; // it is mean x += 1; or x = x + 1;
console.log(x);

*/

////// coding challenge 1
/*
var massMark = 80;
var massJohn = 75;
var hightMark = 1.85;
var hightJohn = 1.78;

var bmiMark = massMark / (hightMark * hightMark);
var bmiJohn = massJohn / (hightJohn * hightJohn);

var whoHigherBmi = bmiMark > bmiJohn;

console.log('BMI of Mark\'s ' + bmiMark + ' and BMI of John\'s ' + bmiJohn + '.');
console.log('is mark\'s  BMI higher then John\'s? ' + whoHigherBmi + '!');

*/

////// If / else statement
/*
var massMark = 80;
var massJohn = 75;
var hightMark = 1.85;
var hightJohn = 1.78;

var bmiMark = massMark / (hightMark * hightMark);
var bmiJohn = massJohn / (hightJohn * hightJohn);

if (bmiJohn > bmiMark) {
    console.log('BMI John\'s higher then Mark.');
} else {
    console.log(' BMI Mark\'s higher then John.');
}

*/

////// boolean logic and && , or || , not !
/*
var name = 'nunna';
var age = 19;

if (age < 13) {
    console.log(name + ' just a girl.');
} else if (!age <= 13 && !age <= 20) {
    console.log(name + ' just a teenager.');
} else if (age > 20 && age >= 30) {
    console.log(name + ' is a young women.');
} else {
    console.log(name + ' is a women.');
}

*/

////// the ternary operator and switch statement 
/*
var firstName = 'nunnapat';
var age = 18;


// ternary operator
age >= 18 ? console.log(firstName + ' drink beer.') : console.log(firstName + ' drink juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//it same with 'if/else' but easyier look cleaner Ex. when write 'if/else'
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
console.log(drink);


// switch statment
var job = 'programmer';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in miami');
        break;
    case 'programmer':
    case 'solfwear engineer':
        console.log(firstName + '  writting the code.');
        break;
    default:
        console.log(firstName + ' does someting else');
}



switch (true) // someting like this need to put 'ture' boolean trick of 'if/else'
{
    case age < 13:
        consolr.log(firstName + ' just a girl.');
        break;
    case !age <= 13 && !age <= 20:
        console.log(firstName + ' just a teenager.');
        break;
    case age >= 20 && age <= 30:
        console.log(firstName + ' is a young women.');
        break;
    default:
        console.log(firstName + ' is a women.');
}
*/


////// truthy and falty values and equality operator   falty values : undefined , null , 0 , '' , NaN        truthy values : Not falty values
/*
var hight;

hight = 0; // falty
if (hight) {
    console.log('variable is defined.');
} else {
    console.log('variable have not been undifined.');
}

hight = 0; //falty and truety cause || hight === 0
if (hight || hight === 0) {
    console.log('variable is defined.');
} else {
    console.log('variable have not been undifined.');
}

//equality operator
hight = '23';
if (hight === 23) // if put === resule will be false
{
    console.log('the == operator does type coerction make string and number true ');
} else {
    console.log(false);
}

*/

////// Coding Challenge 2
/*
var johnScored = 89 + 120 + 103;
var mikeScored = 116 + 94 + 123;
var averageJohn = johnScored / 3;
var averageMike = mikeScored / 3;

switch (true) {
    case (averageJohn > averageMike):
        console.log('John is the winner with average score at ' + averageJohn);
        break;
    case (averageMike > averageJohn):
        console.log('Mike is the winner with average score at ' + averageMike);
        break;
    default:
        console.log('John and Mike have average score equal at  ' + averageJohn + ' and ' + averageMike);
}

var marryScored = 97 + 134 + 105;
var averangeMarry = marryScored / 3;


switch (true) {
    case (averageJohn > averageMike && averageJohn > averangeMarry):
        console.log('John is the winner ' + averageJohn);
        break;
    case (averageMike > averageJohn && averageMike > averangeMarry):
        console.log('Mike isn the winner ' + averageMike);
        break;
    case (averangeMarry > averageJohn && averangeMarry > averageMike):
        console.log('marry is the winner at averange scored ' + averangeMarry);
        break;
    default:
        console.log('someone have draw averge');
}

*/

////// Functions
/*


//return someting
function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageNunna = calculateAge(1990);
var theo = calculateAge(2017);
console.log(ageNunna + ' and ' + theo);


//function call another function 
function retirementYear(year, name) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' already retired.')
    }

}

retirementYear(1990, 'nunna');
retirementYear(1985, 'romain');
retirementYear(1910, 'rose');


//function statement and expresstion////////////////


//declaration or satatement
//funtion not give immedaite result.
function whatDoYouDo(job, name) {

}

//expresstion .funtion give immedaite result Ex.5+5=10/ture false
//use 'return' finished the work so dont need to break:
var whatDoYouDo = function (job, name) {
    switch (job) {
        case 'student':
            return name + ' study learn how to code.';
        case 'teacher':
            return name + 'teach student how to code.';
        default:
            return name + ' does someting else';
    }
}
console.log(whatDoYouDo('student', 'nunna'));
console.log(whatDoYouDo('Quality manager', 'romain'));
*/

////// Arraye
/*


//Initialize new array
var names = ['romain', 'nunna', 'theo'];
//or
var years = new Array(1985, 1990, 2017);

console.log(names[1]);
console.log(names.length);

console.log(years[1]);
console.log(years.length);

//mutate array data
names[0] = 'papa';
names[names.length] = 'mama'; //names.length mean 3 so 3 = 'mama'
names[names.length] = 'rose'; //names.length mean 4 so 4 = 'rose'
console.log(names);

//different data types
var nunna = ['nunna', 'chiralerdsitthikhun', 1990, 'student', true];
nunna.push('asian');
nunna.unshift('miss');
console.log(nunna);

nunna.pop(); //remove the element the end 
nunna.pop();
nunna.shift(); //remove the element the front
console.log(nunna);

console.log(nunna.indexOf('student'));
var isTeacher = nunna.indexOf('teacher') === -1 ? 'nunna is NOT a Teacher' : 'nunna is a Teacher';
console.log(isTeacher);
*/

//////coding challenge3  function
/*
function calculateTip(bill) {
    var percent;
    if (bill < 50) {
        percent = .2;
    } else if (bill >= 50 && bill <= 200) {
        percent = .15;
    } else {
        percent = .1;
    }
    return percent * bill;
}
var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]),
            calculateTip(bills[1]),
                calculateTip(bills[2])];
console.log(tips);



var finalPaid = [bills[0] + tips[0],
                 bills[1] + tips[1],
                bills[2] + tips[2]];
console.log(finalPaid);


or

function tipCalculate(check) {
    var percentege;
    switch (check) {
        case check < 50:
            percentege = .2;
            break;
        case check >= 50 && check <= 200:
            percentege = .15;
            break;
        default:
            percentege = .1;
            return percentege * check;
    }
}

var checks = [100, 45, 220];
var tips = [tipCalculate(checks[0]),
           tipCalculate(checks[1]),
           tipCalculate(checks[2])];

var finalChecks = [checks[0] + tips[0],
                  checks[1] + tips[1],
                   checks[2] + tips[2]];

console.log(tips, finalChecks);
*/

//////object and properties
/*

//Object literal
var nunna = {
    firstName: 'nunnapat',
    lastName: 'chiralerdsitthikhun',
    birthYear: 1990,
    family: ['theo', 'romain'],
    job: 'mom',
    isMarried: false
};
console.log(nunna);
console.log(nunna.firstName);
//or
console.log(nunna['lastName']);
//or
var x = 'job';
console.log(nunna[x]);

//you can update change imfomation
nunna.job = 'web deverlope';
nunna.isMarried = true;


// Opject syntax
var theo = new Object();
theo.firstName = 'Theo';
theo.middleName = 'Phasit';
theo.lastname = 'Guay';
theo.birthYear = 2017;
console.log(theo);
*/

////// Object and methode
/*

var nunna = {
    firstName: 'nunnapat',
    lastName: 'chiralerdsitthikhun',
    birthYear: 1990,
    family: ['theo', 'romain'],
    job: 'mom',
    isMarried: false,
    calcAge: function () {
        return 2018 - this.birthYear; // this. mean nunna.
    }
};
console.log(nunna.calcAge());
//or
nunna.age = nunna.calcAge();
console.log(nunna.age);


//or

nunna.calcAge = function () {
    this.age = 2018 - this.birthYear; // this. mean nunna.
}
nunna.calcAge(); // if no retune have to call function
console.log(nunna);
*/

//////coding challenge 4
/*

var mark = {
    name: 'Mark',
    mass: 80,
    hight: 1.95,
    bmi: function () {
        return this.mass / (this.hight * this.hight);
    }
};
mark.chartBmi = mark.bmi();
console.log(mark);


var john = {
    name: 'Jhon',
    mass: 75,
    hight: 1.75,
    bmi: function () {
        this.chartBmi = this.mass / (this.hight * this.hight);
        return this.chartBmi;
    }
};
john.bmi();
console.log(john);


if (mark.chartBmi > john.bmi()) {
    console.log(mark.name + ' have higher BMI then john at ' + mark.chartBmi);
} else if (john.chartBmi > mark.chartBmi) {
    console.log(john.name + ' have higher BMI then john at ' + john.chartBmi);
} else console.log('they are have equale BMI');
*/

////// Loops and iteration
/*
// for loops
for (var i = 1; i <= 10; i += 2) {
    console.log(i);
}

var nunna = ['nunna', 1990, 27, 'student'];
for (var i = 0; i < nunna.length; i++) {
    console.log(nunna[i]);
}


// while loops
var i = 0;
while (i < nunna.length) {
    console.log(nunna[i]);
    i++;
}


// continute and  break statement
var nunnapat = ['nunna', 'student', 1990, 26, 'asian', true];
for (var i = 0; i < nunnapat.length; i++) {
    if (typeof nunnapat[i] !== 'string')
        continue;
    console.log(nunnapat[i]);
}
//Or
for (var i = 0; i < nunnapat.length; i++) {
    if (typeof nunnapat[i] !== 'string') break;
    console.log(nunnapat[i]);
}


// looping backwords
for (var i = nunnapat.length - 1; i >= 0; i--) {
    console.log(nunnapat[i]);
}
*/


////// coding challenge 5
/*

var nunnapatBill = {
    fullName: 'nunnapat',
    billValues: [124, 48, 268, 180, 42],
    calculaterTips: function () {
        this.tips = [];
        this.finalPay = [];

        for (var i = 0; i < nunnapatBill.billValues.length; i++) {

            var percent = [];
            var bills = this.billValues[i];

            if (bills < 50) {
                percent = .2;
            } else if (bills >= 50 && bills <= 200) {
                percent = .15;
            } else percent = .10;
            this.tips[i] = bills * percent;
            this.finalPay[i] = bills + bills * percent;
        }
    }
};




// Extra challenge
var markBill = {
    Name: 'Mark',
    billValue: [77, 475, 110, 45],
    calculaterTips: function () {
        this.tips = [];
        this.finalpays = [];

        for (var i = 0; i < markBill.billValue.length; i++) {

            var percenteg = [];
            var bills = this.billValue[i];

            if (bills < 100) {
                percenteg = .2;
            } else if (bills >= 100 && bills <= 300) {
                percenteg = .10;
            } else percenteg = .25;

            this.tips[i] = bills * percenteg;
            this.finalpays[i] = bills + bills * percenteg;
        }
    }
};



function calcuAverage(bills) {
    var sum = 0;

    for (var i = 0; i < bills.length; i++) {
        sum += bills[i];
    }
    return sum / bills.length;
};



nunnapatBill.calculaterTips();
markBill.calculaterTips();

nunnapatBill.average = calcuAverage(nunnapatBill.tips);
markBill.average = calcuAverage(markBill.tips);
console.log(nunnapatBill, markBill);

if (nunnapatBill.average > markBill.average) {
    console.log(nunnapatBill.fullName + ' paid more then ' + markBill.Name + ' at average ' + nunnapatBill.average);
} else if (nunnapatBill.average < markBill.average) {
    console.log(markBill.Name + ' paid more then ' + nunnapatBill.fullName + ' at average ' + markBill.average);
} else(' they are paid the same almost ');

*/