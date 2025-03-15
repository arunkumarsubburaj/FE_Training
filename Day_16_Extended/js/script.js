// document & window object

console.log(document.body);
console.log(document.documentElement);

// console.log(window.alert("hi"));
console.log(window.navigator);
console.log(window.location);


// localStorage & sessionStorage
localStorage.setItem("value", "hello world");
console.log(localStorage.getItem("value"));

sessionStorage.setItem("value", "hello world");
console.log(sessionStorage.getItem("value"));

// DOM Manipulation

console.log(document.getElementsByTagName("li"));
console.log(document.getElementById("navContainer"));
console.log(document.getElementsByClassName("list"));
console.log(document.querySelector("li"));
console.log(document.querySelector(".list"));
console.log(document.querySelector("#navContainer"));
console.log(document.querySelector("li.list:has(ul)"));


// Create an Element programmatically

var x = document.createElement("div");
x.id = "divContainer";
x.className = "sample";
x.classList.add("sample2");
x.setAttribute("data-custom", "Sample Data");
x.innerHTML = "<b>Hello World</b>";


// Append or prepend to the DOM

document.querySelector("body").append(x);
document.querySelector("body").prepend(x);
document.querySelector("#navContainer").append(x);
document.querySelector("#navContainer").prepend(x);

// const listItems = document.querySelectorAll("li");

// listItems.forEach(listItem => {
//     listItem.addEventListener("mouseover", changeColor);
//     listItem.addEventListener("mouseleave", resetColor);
//     // listItem.removeEventListener("mouseover", changeColor);
//     // listItem.removeEventListener("mouseleave", resetColor);
// });

// Event Delegation

const ulEle = document.getElementById("navContainer");
ulEle.addEventListener("mouseover", function (event) {
    const listItems = event.currentTarget.querySelectorAll("li");
    // for (let i = 0; i < listItems.length; i++) {
    //     listItems[i].style.color = "black";
    // }
    listItems.forEach(element => {
        element.style.color = "black";
    });
    if (event.target.closest("li")) {
        event.target.closest("li").style.color = "red";
    }
});

// ulEle.addEventListener("mouseleave", function (event) {
//     if (event.target.closest("li")) {
//         event.target.style.color = "black";
//     }
// });

setTimeout(() => {
    var list = document.createElement("li");
    list.className = "list";
    list.innerText = "Dynamic value";
    document.getElementById("navContainer").append(list);
}, 2000)

// console.log(listItems);

// function newFn() {
//     console.log("from new function");
// }

// console.log(newFn());

function changeColor() {
    console.log({
        "currentTarget": event.currentTarget,
        "target": event.target
    });
    event.currentTarget.style.color = "red";
}
function resetColor() {
    event.currentTarget.style.color = "black";
}
