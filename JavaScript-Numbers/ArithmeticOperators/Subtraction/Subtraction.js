function onClickSubtraction() {
    debugger;
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    var subResult = firstNumber - secondNumber;
    document.getElementById("pResult").innerHTML = subResult;
}



let _btnSubtraction = document.getElementById("btnSubtraction");

_btnSubtraction.addEventListener("click", function {
    debugger;
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    var subResult = firstNumber - secondNumber;
    document.getElementById("pResult").innerHTML = subResult;
});