function onClickMaximumValue() {
    debugger;
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    var thirdNumber = Number(document.getElementById("txtTirdNumber").value);
    var fourthNumber = Number(document.getElementById("txtFourthNumber").value);
    var fifthNumber = Number(document.getElementById("txtFifthNumber").value);
    var sixthNumber = Number(document.getElementById("txtSixthNumber").value);
    var result = Math.max(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);
    document.getElementById("pMaxVlue").innerHTML = result;
}

function onClickMinimumValue(){
    debugger;
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    var thirdNumber = Number(document.getElementById("txtTirdNumber").value);
    var fourthNumber = Number(document.getElementById("txtFourthNumber").value);
    var fifthNumber = Number(document.getElementById("txtFifthNumber").value);
    var sixthNumber = Number(document.getElementById("txtSixthNumber").value);
    var result = Math.min(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);
    document.getElementById("pMaxVlue").innerHTML = result;
}