
let btnStart = document.getElementById("btnStart");
let result = document.getElementById("result");

btnStart.addEventListener("click", function () {
    result.innerText = "Please wait...";

    setTimeout(function () {
        result.innerText = "Hello! 3 seconds completed.";
    }, 3000);
});
  