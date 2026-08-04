function onClickBiggestNumber() {
    debugger;
    var firstNumber = document.getElementById("txtFirstNumber").value;
    var secondNumber = document.getElementById("txtSecondNumber").value;
    var result = document.getElementById("pResult");
    if (firstNumber < secondNumber) {
        result.innerHTML = "The biggest number is" + secondNumber;
    } else {
        result.innerHTML = "The biggest number is" + firstNumber;
    }
}