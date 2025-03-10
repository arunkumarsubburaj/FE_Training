// Array Methods 
var x = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(x[0]);
console.log(x.at(1))
console.log(x.length);
console.log(x[x.length - 1]);
console.log(x.indexOf("wednesday"));
console.log(x.includes("wednesday"));
var duplicatedArray = [1, 2, 4, 1, 51, 1, 3, 5, 2];
console.log(duplicatedArray.indexOf(1));
console.log(duplicatedArray.lastIndexOf(1));
x.push("all");
console.log(x);
x.pop();
console.log(x);
x.unshift("all");
console.log(x);
x.shift();
console.log(x);
x.splice(2, 1, "new");
console.log(x);
x.splice(2, 2);
console.log(x);
x.splice(2, 0, ...["wednesday", "thursday"]);
console.log(x);
var y = [1, 2, 3, 4];
var z = [5, 6, 7, 8];
var combined = [...y, ...z];
combined[0] = 0;
console.log(combined, y);
const combinedByConcat = y.concat(z);
combinedByConcat[0] = 0;
console.log(combinedByConcat, y);


// Higher order functions
// every, some, find, filter, reduce, map, sort
var everyCheck = [10, 20, "asd", true];
console.log(everyCheck.every((curValue) => { return typeof curValue == 'string' }));
console.log(everyCheck.some((curValue) => { return typeof curValue == 'string' }));
console.log(y.find((curValue) => curValue > 2));
console.log(y.filter((curValue) => curValue > 2));
console.log(y.map((curValue) => curValue * 2));
console.log(y.reduce((prevValue, curValue) => prevValue + curValue));
var unsorted = ["b", "d", "a", "c"];
console.log(unsorted.sort());
var unsorted = [2, 4, 6453, 213, 45, 645];
console.log(unsorted.sort((a, b) => a - b));

