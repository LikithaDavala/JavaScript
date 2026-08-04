function onClickPrimeNumber() {
    debugger;
    var number = Number(document.getElementById("inputNumber").value);

    var result = document.getElementById("pResult");

    if (number <= 1) {
        result.innerText = number + (" Not Prime");
    }
    else if (number == 2) {
        result.innerText = number + ("Prime");
    }   
    else if (number % 2 == 0) {
        result.innerText = number + ("Not prime");
    }
    else {
        result.innerText = number + ("Prime");
    }
}