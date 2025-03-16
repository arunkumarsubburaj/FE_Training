document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formEle").addEventListener("keydown", function (ev) {
        const textValue = ev.currentTarget.value;
        console.log(textValue);
        if (textValue.length > 10 && ev.key != "Backspace") {
            ev.preventDefault();
            ev.stopPropagation();
            console.log(textValue.length);
        }
    });

    // document.getElementById("formEle").addEventListener("keyup", function (ev) {
    //     const textValue = ev.currentTarget.value;
    //     console.log(textValue);
    //     if (textValue.length > 10) {
    //         ev.preventDefault();
    //         ev.stopPropagation();
    //         console.log(textValue.length);
    //     }
    // })


    document.addEventListener("keydown", function (ev) {
        if (ev.key == "a" && ev.ctrlKey == true) {
            alert("This is a short cut key");
        }
    })

    document.addEventListener("mousemove", throttle(function (eve) {
        console.log({ "x": eve.x, "y": eve.y });
    }, 2000));

    window.addEventListener("resize", function (eve) {
        console.log("This is resize event");
    })
});

function throttle(func, wait) {
    let isWaiting = false;
    return function executedFunction(...args) {
        if (!isWaiting) {
            func.apply(this, args);
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false;
            }, wait);
        }
    };
}

function debounce(func, wait) { // Default wait time of 250ms
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout); // Clear any previous timeout
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function closeModal() {
    document.querySelector(".overlay").classList.remove("show");
}

function showModal() {
    document.querySelector(".overlay").classList.add("show");
}

function modalSaveClicked() {
    document.querySelector(".overlay").classList.remove("show");
    setTimeout(() => {
        alert("Modal closed");
    });
}