let counter = 0;
let timer;

let counterElement = document.getElementById("counter");
let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");

btnStart.addEventListener("click", function () {
    if (timer) return;

    timer = setInterval(function () {
        counter++;

        counterElement.innerText = counter;
    }, 1000);
});

btnStop.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});
  
  