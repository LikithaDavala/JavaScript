function onClickAddition() {
    debugger;
    console.log("onClickAddition called");
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    var addResult = firstNumber + secondNumber;
    document.getElementById("pResult").innerHTML = addResult;
}