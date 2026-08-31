function onClickDivision() {
 debugger;
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    var divResult = firstNumber / secondNumber;
    document.getElementById("pResult").innerHTML = divResult;
}


let _btnDivision = document.getElementById("onClickDivision");

_btnDivision.addEventListener("click", onClickDivision);