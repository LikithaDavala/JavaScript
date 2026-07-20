function onClickRandomStatic(){
    debugger;
    var result = Math.random();
    document.getElementById("pRandomStatic").innerHTML = result;
}

function onClickRandomDynamic(){
    debugger;
    var digits =Number(document.getElementById("txtDigit").value);
    var result =  Math.trunc(Math.random()*Math.pow(10,digits)) ;
    document.getElementById("pRandomDynamic").innerHTML = result;
}