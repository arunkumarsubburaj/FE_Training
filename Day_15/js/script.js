
// Promise special method - Asyncronous operation
var asyncFunction = function (status) {
    debugger;
    var x = new Promise((resolve, reject) => {
        if (status == "on") {
            resolve("This is a success");
        } else {
            reject("This is a failure");
        }
    });
    return x;
}

asyncFunction("off")
    .then(value => console.log(value))
    .catch(value => console.log(value))
    .finally(() => console.log("finally triggered"));

// promise -> All, rase, allSettled

var promise_1 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 1 data");
        }, 2000)
    })
}

var promise_2 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2 data");
        }, 5000)
    })
}


promise_1().then(value => { console.log("uc1", value) });
promise_2().then(value => console.log("uc1", value));

promise_1().then(value => {
    console.log("uc2", value)
    promise_2().then(value2 => console.log("uc2", value2));
});

var x = Promise.all([promise_1(), promise_2()]);

x.then(values => {
    values.forEach(value => {
        console.log("uc3", value);
    });
});


// Async await

var wrapperAsyncFn = async function () {
    try {
        var p1 = await promise_1();
        console.log("async", p1);
        var p2 = await promise_2();
        console.log("async", p2);
    } catch (error) {
        console.log(error);

    }
}

wrapperAsyncFn();





