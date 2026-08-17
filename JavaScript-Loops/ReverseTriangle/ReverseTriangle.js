let n = 5;
function onClickReverseTrianglePyramid(){
    let symbol =document.getElementById("txtSymbol").value;
    let output ="";
    for(i=1; i<=5; i++){
        for(j=1; j<= (n-i+1); j++){
            output +="*";
        }
        output +="<br/>"
    }
    document.getElementById("divReverseTriangle").innerHTML = output;
}