// function onClickRemainder() {
//     debugger;
//     var firstNumber = Number(document.getElementById("txtFirstNumber").value);
//     var secondNumber = Number(document.getElementById("txtSecondNumber").value);
//     var remResult = firstNumber % secondNumber;
//     document.getElementById("pResult").innerHTML = remResult;
// }



let  _btnRemainder= document.getElementById("btnRemainder");

_btnRemainder.addEventListener("click", function {
    debugger;
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    var remResult = firstNumber % secondNumber;
    document.getElementById("pResult").innerHTML = remResult;
});