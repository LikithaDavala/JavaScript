let n = 5;
function onClickPyramidTriangle() {
    let symbol = document.getElementById("txtSymbol").value;
    let output = "";
    for (let i = 1; i <= n; i++) {
        for (let s=1; s<= n - i; s++) {
          output += "&nbsp;&nbsp;";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            output += symbol +"&nbsp;";
        }
        output += "<br/>"
    }
    document.getElementById("divPyramidTriangle").innerHTML = output;
}

