function onClickIfElseStatement() {
    debugger;
    var number = document.getElementById("inputNumber").value;
    var result = document.getElementById("pResult");
    if (number == 2) {
        result.innerHTML = "The number is two";
    } else if (number == 3) {
        result.innerHTML = "The number is three";
    } else if (number == 5) {
        result.innerHTML = "The number is five";
    } else if (number == 8) {
        result.innerHTML = "The number is eight";
    } else {
        result.innerHTML = "The number is another number";
    }
}