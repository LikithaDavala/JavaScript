function onClickMultiplication() {
    debugger;
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    var mulResult = firstNumber * secondNumber;
    document.getElementById("pResult").innerHTML = mulResult;
}


let  _btnMultiplication= document.getElementById("btnMultiplication");

_btnMultiplication.addEventListener("click", onClickMultiplication);