function Addition() {
    debugger;
    let firstNumber = Number(document.getElementById("txtFirstNumber").value);
    let secondNumber = Number(document.getElementById("txtSecondNumber").value);
    let addition = firstNumber += secondNumber;
    document.getElementById("pAddition").innerHTML = addition;
}

function Subtraction() {
    debugger;
    let firstNumber = Number(document.getElementById("txtFirstNumber").value);
    let secondNumber = Number(document.getElementById("txtSecondNumber").value);
    let sub = firstNumber -= secondNumber;
    document.getElementById("pSubtraction").innerHTML = sub;
}

function Multiplication() {
    debugger;
    let firstNumber = Number(document.getElementById("txtFirstNumber").value);
    let secondNumber = Number(document.getElementById("txtSecondNumber").value);
    let multi = firstNumber *= secondNumber;
    document.getElementById("pMultiplication").innerHTML = multi;
}


function Division() {
    debugger;
    let firstNumber = Number(document.getElementById("txtFirstNumber").value);
    let secondNumber = Number(document.getElementById("txtSecondNumber").value);
    let div = firstNumber /= secondNumber;
    document.getElementById("pDivision").innerHTML = div;
}

function Remainder() {
    debugger;
    let firstNumber = Number(document.getElementById("txtFirstNumber").value);
    let secondNumber = Number(document.getElementById("txtSecondNumber").value);
    let rem = firstNumber %= secondNumber;
    document.getElementById("pRemainder").innerHTML = rem;
}


function Exponent() {
    debugger;
    let firstNumber = Number(document.getElementById("txtFirstNumber").value);
    let secondNumber = Number(document.getElementById("txtSecondNumber").value);
    let expon = firstNumber **= secondNumber;
    document.getElementById("pExponent").innerHTML = expon;
}