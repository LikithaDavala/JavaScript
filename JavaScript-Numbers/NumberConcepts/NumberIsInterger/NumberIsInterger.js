function onClickNumberIsInteger(){
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var result = Number.isInteger(number);
    document.getElementById("pResult").innerHTML =result;
}