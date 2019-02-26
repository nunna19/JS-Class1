//primitives = string boolean number undifined null
//Object = everyting else



// function constructor/get object by pass prototype property
/*


function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);



var nunna = {
    name: 'nunna',             //not own property 'lastName'
    yearOfBirth: '1990',
    job: 'mom'
};
var person = function (names, yearBirth, jobs) {
    this.name = names;
    this.yearOfBirth = yearBirth;
    this.job = jobs;
    this.lastName = 'guay';
}
person.prototype.calculateAge = function () {
    console.log(2018 - this.yearOfBirth);
};
person.prototype.lastname = 'guay';


//instance of person.protptype/ own property 'lastName'
var theo = new person('theo', 2017, 'baby');
var romain = new person('romain', 1985, 'manager');
romain.calculateAge();
theo.calculateAge();
console.log(theo.lastName);
console.log(romain.lastName);
*/

//Object.create it's get object directly at the first agument
/*
var personProto = {
    calculateAge: function () {
        console.log(2018 - this.yearOfBirth);
    }
};

var nunna = Object.create(personProto);
nunna.name = 'nunnapat';
nunna.yearOfBirth = 1990;
nunna.job = 'mom';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/

// primitives VS objects
/*
// primitives hold the data inside of variable it self
var a = 26;
var b = a;
a = 40;
console.log(a);
console.log(b);

//Object 
var nunna1 = {
    name: 'nannapat',
    age: 27,
};

var nunna2 = nunna1;
nunna1.age = 28;
console.log(nunna1.age, nunna2.age);


//function
var age = 33; 
var yearOfbirth;
var romain = {
    name: 'romain',
    city: 'miami'
};

function change(a, b) {
    a = 28;
    yearOfbirth = 2018 - a;
    b.city = 'new york';
}
change(age, romain);
console.log(age);
console.log(romain.city);
console.log(yearOfbirth);
// a: can change as much as we want never go to efect veriable on outside'primitives' of function
//b:function referent object will efect the object outside of there
*/

//passing function as argument
/*
var years = [1990, 1985, 2017, 1999, 1930, 1970];

function arrayCalc(arr, fn) {
    var arrYearsRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrYearsRes.push(fn(arr[i]));
    }
    return arrYearsRes;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return 'too young';
    }
}



function calculateAge(el) {
    return 2018 - el;
}
var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, isFullAge);
var heartRate = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAge);
console.log(heartRate);
*/

// function returning function //have better way at lecture'Closures'
/*
function statusAge(age) {
    if (age === 0 && age <= 12) {
        return function (name) {
            console.log(name + ' is a kid.');
        }
    } else if (age > 12 && age <= 18) {
        return function (name) {
            console.log(name + ' is a teeneger.');
        }
    } else if (age > 18 && age <= 30) {
        return function (name) {
            console.log(name + ' is a young age.');
        }
    } else {
        return function (name) {
            console.log(name + ' is a aldut.');
        }
    }
}

var lessThen30 = statusAge(28);
lessThen30('nunna');
// or you can invoked this way
statusAge(33)('romain');
*/


// Immediately Invoked Function Expressions"IIFE"  for deta privetcy
/*

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (game) {
    var score = Math.random() * 10;
    console.log(score >= 5 - game); // score >= 5 - 5
})(5); // mean game = 5 focing game to be win all the time
*/

// Closures  / even the function already execute 



// function budget() {
//     var x = 23;
//     var add = function (a) {
//         return x * a
//     }
//     return function (b) {
//         b = ' need to pay the electeicity at $';
//         console.log(x + b);
//     }
// }
// var electricBill = electricPayment('January');
// electricBill(150);



// // challenge using Closures 

// function interviewQuestion(job) {
//     return function (name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?')
//         } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }
// var interviewDesigner = interviewQuestion('designer');
// interviewDesigner('Alex');

// var interviewTeacher = interviewQuestion('Programer');
// interviewTeacher('Nunna');
// //or
// interviewQuestion('teacher')('Romain');


//Bind , Call And Apply
/*
var nunna = {
    name: 'nunna',
    age: 28,
    job: 'Mom',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};
nunna.presentation('formal', 'Morning');

// CALL borrow function
var romain = {
    name: 'Romain',
    age: 33,
    job: 'QA',
};
nunna.presentation.call(romain, 'friendly', 'Afternoon');

// Apply 
nunna.presentation.apply(romain, ['formal', 'Evening']);

// Bind = need to store in the veriable first..its allow create and copy of function with preset element
var presentationFormal = nunna.presentation.bind(romain, 'formal');
presentationFormal('Day');
presentationFormal('Morning');




var years = [1990, 1985, 2017, 1999, 1930, 1970];

function arrayCalc(arr, fn) {
    var arrYearsRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrYearsRes.push(fn(arr[i]));
    }
    return arrYearsRes;
}

function isFullAge(limit, el) {
    return el >= limit;
}

function calculateAge(el) {
    return 2018 - el;
}

var ages = arrayCalc(years, calculateAge);
var fullThailand = arrayCalc(ages, isFullAge.bind(this, 21));
console.log(ages);
console.log(fullThailand);
*/

//Code challenge 7
/*
// the way i code but it is not the best way.
var quizGame = {
    name: 'Question to describe a question.',
    question1: 'JavaScript the coolest programming language in the world?',
    answer1: '0: Yes',
    answer2: '1: No'
};

function quaestionToDescribeQuestion(quiz1, answer1, answer2) {
    this.question1 = quiz1;
    this.answer1 = answer1;
    this.answer2 = answer2;
}



var newQuaestion = new quaestionToDescribeQuestion('what is the name of this coures\'s teacher?', '0: Jonh', '1: Mark');
quaestionToDescribeQuestion.prototype.answer3 = '2: Jonas';



quaestionToDescribeQuestion();

var arrQuiz = [consoleQuiz1, consoleQuiz2];

function quizRandom() {

    for (var i = 0; i < arrQuiz.length; i++);
    arrQuiz[i] = Math.floor(Math.random() * 2);
    if (arrQuiz[i] === 0) {
        consoleQuiz1();
    } else {
        consoleQuiz2();
    };
}
quizRandom();




function consoleQuiz1() {
    console.log(quizGame.question1);
    console.log(quizGame.answer1);
    console.log(quizGame.answer2);

    function promts1() {
        var answer = prompt('Please scllege the correct answer (jut type the number).');
        if (answer == 0) {
            console.log('correct answer!');
            console.log(quizRandom());
        } else if (answer === 'exite') {
            console.log('end!');
        } else {
            console.log('uncorrect answer!');
            quizRandom();
        };

    }
    promts1();
}

function consoleQuiz2() {
    console.log(newQuaestion.question1);
    console.log(newQuaestion.answer1);
    console.log(newQuaestion.answer2);
    console.log(newQuaestion.answer3);

    function prompts2() {
        var answer = prompt('Please scllege the correct answer (jut type the number).');
        if (answer == 2) {
            console.log('correct answer!');
            console.log(quizRandom());
        } else if (answer === 'exite') {
            console.log('end!');
        } else {
            console.log('uncorrect answer!');
            quizRandom();
        };

    }
    prompts2();
}
*/

// the better way
/*
(function () {
    function quiz(quaestion, answer, correct) {
        this.quaestion = quaestion;
        this.answer = answer;
        this.correct = correct;
    }



    quiz.prototype.displayQuaestion = function () {
        console.log(this.quaestion);

        for (var i = 0; i < this.answer.length; i++)
            console.log(i + ': ' + this.answer[i]);

    }

    quiz.prototype.checkAnswer = function (checks) {
        if (checks === this.correct) {
            console.log('correct answer!');
        } else {
            console.log('wrong answer!');
        }
    }


    var q1 = new quiz('What is your child name?', ['Max', 'Jonh', 'Theo'], 2);

    var q2 = new quiz('How many state in United State?', [52, 55, 60, 50], 0);

    var q3 = new quiz('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2);


    var quaestions = [q1, q2, q3];
    var n = Math.floor(Math.random() * quaestions.length);
    quaestions[n].displayQuaestion();


    var answer = parseInt(prompt('Please select the correct answer.'));
    quaestions[n].checkAnswer(answer);

})();
*/

(function () {
    function quiz(quaestion, answer, correct) {
        this.quaestion = quaestion;
        this.answer = answer;
        this.correct = correct;
    }

    quiz.prototype.displayQuestion = function () {
        console.log(this.quaestion);

        for (var i = 0; i < this.answer.length; i++)
            console.log(i + ': ' + this.answer[i]);
    }

    quiz.prototype.checkanswer = function (check, callScore) {
        var sc;
        if (check === this.correct) {
            console.log('correct answer!');
            sc = callScore(true);
        } else {
            console.log('wrong answer!');
            sc = callScore(false);
        }
        this.displayScore(sc);
    }

    quiz.prototype.displayScore = function (consoleScore) {

        console.log('your current score at ' + consoleScore);
        console.log('-------------------------------------------');
    }

    var q1 = new quiz('What is your child name?', ['Max', 'Jonh', 'Theo'], 2);

    var q2 = new quiz('How many state in United State?', [52, 55, 60, 50], 0);

    var q3 = new quiz('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2);



    function score() { //Closures
        var sc = 0;
        return function (corrects) {

            if (corrects) {
                sc++;
            }
            return sc;
        }
    }
    var sumScore = score();


    var question = [q1, q2, q3];

    function nextPlayer() {

        var n = Math.floor(Math.random() * question.length);
        question[n].displayQuestion();

        var answer = prompt('please sellece the right answer');
        if (answer !== 'exit') {
            question[n].checkanswer(parseInt(answer), sumScore);

            nextPlayer();
        }

    }

    nextPlayer();


})();
