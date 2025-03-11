//Array of Objectts

// Array of objects with multiple values
const people = [
    {
        id: 1,
        name: "Alice",
        age: 30,
        occupation: "Engineer",
        isActive: true
    },
    {
        id: 2,
        name: "Bob",
        age: 25,
        occupation: "Designer",
        isActive: false
    },
    {
        id: 3,
        name: "Charlie",
        age: 35,
        occupation: "Teacher",
        isActive: true
    }
];
var names = [];
people.forEach(empObj => {
    names.push(empObj.name);
});

console.log(names);
// Accessing specific values from the array
console.log(people[0].name); // Alice
console.log(people[0]["name"]); // Alice
console.log(people[1].age);  // 25
console.log(people[2].occupation); // Teacher

console.log(people.sort((a, b) => {
    // if (a.occupation < b.occupation) {
    //     return 1;
    // } else if (a.occupation > b.occupation) {
    //     return -1;
    // } else {
    //     return 0;
    // }
    return (a.occupation < b.occupation) ? -1 : (a.occupation > b.occupation) ? 1 : 0;
}));


//terinary operator
console.log(people.sort((a, b) => (a.occupation < b.occupation) ? -1 : (a.occupation > b.occupation) ? 1 : 0));

// Object with key-value pairs
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "Blue",
    isElectric: false
};

// Accessing specific values
console.log(car["make"]); // Toyota
console.log(car.year); // 2021
console.log(car.color); // Blue
console.log(car.isElectric); // false

//concatenate string with variables

console.log("The car " + car.make + " " + car.model + " is launch on "
    + car.year + ". The color of the car is " + car.color);
console.log(`The car ${car.make} ${car.model} is
     launched on ${car.year}. 
    The color of the car is ${car.color} and 
    it ${car.isElectric ? 'is' : 'not'} electric`);

for (const key in car) {
    const element = car[key];
    console.log(element);
}

for (const element of people) {
    console.log(element);
}

console.log(Object.keys(car));
console.log(Object.values(car));

// Advanced concepts
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (res) {
        console.log("success", res);
        return res.json();
    }).then(result => {
        console.log("result", result);
    }).catch(function (err) {
        console.log("error", err);
    }).finally(() => {
        console.log("finally triggered");
    });

// Promise special method - Asyncronous operation

// var x = new Promise((resolve,reject)=>{
//     resolve(value);
// });





