
let result = document.getElementById("result");

// 1. Window Object
document.getElementById("btnWindow").addEventListener("click", function () {
    result.innerText =
        "Window Width: " + window.innerWidth +
        "px, Height: " + window.innerHeight + "px";
});

// 2. Location Object
document.getElementById("btnLocation").addEventListener("click", function () {
    result.innerText = "Current URL: " + window.location.href;
});

// 3. Screen Object
document.getElementById("btnScreen").addEventListener("click", function () {
    result.innerText =
        "Screen Width: " + window.screen.width +
        "px, Height: " + window.screen.height + "px";
});

// 4. Navigator Object
document.getElementById("btnBrowser").addEventListener("click", function () {
    result.innerText = "Browser Information: " + window.navigator.userAgent;
});

// 5. Alert Method
document.getElementById("btnAlert").addEventListener("click", function () {
    window.alert("Welcome to BOM in JavaScript!");
});
