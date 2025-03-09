var x = 5;
let y = 5;
const z = 10;

// console.log(x);

// console.log(y);

// var y = 10;

// console.log(y);

a();

function a() {
    y = 10;
    var x = 15;
    console.log(x, y, z);
}


var b = function () {
    console.log(x, y, " from b function");
    console.log("hi from b");
}


function c() {
    var x = 20;
    return x;
}

// Closure Function

function e() {
    var y = 30;
    function f() {
        var f = 50;
        return y + f;
    }
    return f();
}


console.log(e());

var d = c() + 5;

console.log("d value is", d);



// if, if_else, if_elseIf, if_elseIf_else, switch - Conditional statement

// ==, >, >=, <, <=, != Conditional operators

// +, - , /, *, % Arithmatic Operators

// &&, ||, ! Logical operators

function ifStatement() {
    var x = true;
    if (typeof x == "number") {
        if (x == 10) {
            console.log("Yes, x is 10");
        } else if (x == 15) {
            console.log("Now x is 15");
        } else {
            console.log("No, x is not 10");
        }
        if (x + 5 == 15) {
            console.log("conditon matches");
        }
        if (x >= 10) {
            console.log("X is greater than or equal 10");
        }
    }
    console.log("if statement completed")
}

function switchStatement() {
    var key = 15;
    switch (key) {
        case 10:
            console.log("Yes, x is 10");
            break;
        case 15:
            console.log("Now x is 15");
            break;
        default:
            console.log("No, x is not 10");
            break;
    }
    console.log("Switch statement completed")
}

function logicalOperatorStatement() {
    var x = 10;
    if (typeof x == "number" && x == 10) {
        console.log("Yes, x is 10");
    } else if (typeof x == "number" && x == 15) {
        console.log("Now x is 15");
    } else if (typeof x == "number") {
        console.log("No, x is not 10");
    }
    if (typeof x == "number" && x + 5 == 15) {
        console.log("conditon matches");
    }
    if (typeof x == "number" && x >= 10) {
        console.log("X is greater than or equal 10");
    }
    console.log("if statement completed");
}

ifStatement();
switchStatement();
logicalOperatorStatement();

// for, forEach, while, do_while - Looping statement

console.log("Positive for loop");
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("Negative for loop");
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("modified for loop");
for (let i = 10; i > 0; i--) {
    console.log(i);
    i = i - 1;
}
console.log("Positive while loop");
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log("Negative while loop");
var i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
console.log("modified while loop");
var i = 10;
while (i > 0) {
    console.log(i);
    i = i - 2;
}
console.log("Positive do while loop");
var i = 0;
do {
    console.log(i)
    i++;
} while (i < 10);

// Arrow function

var x = function () {
    console.log("hi");
}

var x = () => {

    console.log("hi");
}

var x = () => console.log("hi");
// console.log("Positive For loop");
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Traditional for loop using array");
for (i = 0; i < x.length; i++) {
    var curValue = x[i]
    console.log(curValue);
}
console.log("ForEach loop using array");
x.forEach(function (currentValue, index, fullArray) {
    console.log(currentValue);
    console.log(index);
    console.log(fullArray);
});

//break in For Loop
console.log("For loop with Break");
for (i = 0; i < x.length; i++) {
    var curValue = x[i]
    console.log(curValue);
    if (x[i] == 5) {
        break;
    }
}
console.log("ForEach loop with condition");
x.forEach(function (currentValue, index, fullArray) {
    if (currentValue <= 5) {
        console.log(currentValue);
        console.log(index);
        console.log(fullArray);
    }
});

//let check
// let x = 10;
// let y = 10;
function letCheck() {
    let x = 5;
    // let x = 10;
}

var x = 10;

var x = 15;