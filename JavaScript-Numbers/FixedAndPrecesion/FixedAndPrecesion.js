function onClickToFixed(){
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var digits = Number(document.getElementById("txtDigits").value);
    var fixedNumber = number.toFixed(digits);
    document.getElementById("pToFixed").innerHTML=fixedNumber;
}

function onClickToPrecesion(){
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var digits = Number(document.getElementById("txtDigits").value);
    var precisionNumber = number.toPrecision(digits);
    document.getElementById("PToPrecesion").innerHTML= precisionNumber;
}