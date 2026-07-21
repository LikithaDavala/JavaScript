function onClickAbsoluteStatic() {
    debugger;
    var result = Math.abs(-67);
    document.getElementById("pAbsoluteStatic").innerHTML = result;
}

function onClickAbsoluteDynamic() {
    debugger;
    var number = Number(document.getElementById("txtDynamicNumber").value);
    var dynamicResult = Math.abs(number);
    document.getElementById("pAbsoluteDynamic").innerHTML = dynamicResult;
}