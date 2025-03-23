function alertClosed(event) {
    // event.preventDefault();
    console.log("close triggered from the root component");
}

document.addEventListener("DOMContentLoaded", function () {
    const alertDom = document.getElementById("myAlertDom");
    const shadowRoot = alertDom.shadowRoot;
    shadowRoot.addEventListener("onalertclosed", (event) => {
        alertClosed(event)
    });
    const domWrapper = document.getElementById("normalDomWraper");
    domWrapper.innerHTML = `<p> Hello World</p>`;
})