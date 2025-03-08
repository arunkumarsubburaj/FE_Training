console.log("hi");
setTimeout(function () {
    console.log("bye");
}, 1000);
console.log("hi again");

// var x = undefined;
// var y = null;
// var z = true;


var x = {
    status: "off",
    disabled: false,
    age: 25,
    color: ["red", "pink", "green"],
    getData: function () {
        console.log("data");
    }
}

var y = Object.assign({}, { status: "off" });

var z = new Object();
z["status"] = "off";

console.log(x);
console.log(y);
console.log(z);

var a = function () {
    console.log("This is a function");
}

var b = ["asdsadf", "sdfdsfsd", "sdfdsf"]

console.log(a());


var age = 15;

var newAge = age;

newAge = newAge + 5;

console.log(age, newAge);

var obj = { age: 15 };

var newObj = obj;

newObj.age = newObj.age + 5;

console.log(obj, newObj);

// string, number, boolean, undefined, null -> primitive

// object, function, array - Non-primitive

//primitive
//Non-primitive

