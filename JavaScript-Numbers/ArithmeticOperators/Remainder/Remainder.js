function onClickRemainder() {
    debugger;
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    var remResult = firstNumber + secondNumber;
    document.getElementById("pResult").innerHTML = remResult;
}