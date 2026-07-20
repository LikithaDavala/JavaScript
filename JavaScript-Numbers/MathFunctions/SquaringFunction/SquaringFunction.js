Static:
function onClickSquareRootStatic(){
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var result = Math.sqrt(225);
    document.getElementById("pSquareRootStatic").innerHTML = result;
}

function onClickSquareRootDynamic(){
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var result = Math.sqrt(number);
    document.getElementById("pSquareRootDynamic").innerHTML = result;
}