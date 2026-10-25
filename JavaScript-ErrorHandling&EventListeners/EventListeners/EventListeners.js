
let btnClick = document.getElementById("btnClick");
let btnMouse = document.getElementById("btnMouse");
let txtName = document.getElementById("txtName");
let result = document.getElementById("result");

// 1. Click Event
btnClick.addEventListener("click", function () {
    result.innerText = "Button clicked successfully!";
});

// 2. Mouseover Event
btnMouse.addEventListener("mouseover", function () {
    result.innerText = "Mouse is over the button!";
});

// 3. Input Event
txtName.addEventListener("input", function () {
    result.innerText = "Hello, " + txtName.value;
});
