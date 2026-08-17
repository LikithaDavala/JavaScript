let n = 5;
function (){
    let symbol =document.getElementById("txtSymbol").value;
    let output ="";
    for(i=1; i<=n; i++){
        for(j=1; j<=i; j++){
            output +="*";
        }
        output +="<br/>"
    }
    document.getElementById("divRightTriangle").innerHTML = output;
}
