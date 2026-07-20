Static:
function onClickPowerStatic(){
    debugger;
    var powerResult = Math.pow(4,9);
    document.getElementById("pPowerStatic").innerHTML = powerResult;
}
Dynamics:
function onClickPowerDynamic
(){
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var digits = Number(document.getElementById("txtDigits").value);
    var powerResult =Math.pow(number,digits);
    document.getElementById("pPowerDynamic").innerHTML = powerResult;
}