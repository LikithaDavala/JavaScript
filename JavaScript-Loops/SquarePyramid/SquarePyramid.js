let n = 5;
function onClickSquarePyramid() {
    let symbol = document.getElementById("txtSymbol").value;
    let output = "";
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 5; j++) {
            output += "* ";
        }
        output += "<br/>"
        document.getElementById("divSquare").innerHTML = output;
    }
}