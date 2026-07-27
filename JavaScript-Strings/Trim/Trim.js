function onClickTrim(){
    debugger;
    let word = document.getElementById("txtWord").value;
    let trim = word.trim();
    document.getElementById("pResult").innerHTML ="before trim" +  word.length;
    document.getElementById("pTrim").innerHTML = "after trim" + trim.length;
}

function onClickTrimStarts(){
    debugger;
    let word = document.getElementById("txtWord").value;
    let trimStart = word.trimStart();
    document.getElementById("pTrimStarts").innerHTML = `trimStart: ${trimStart.length}`;
}

function onClickTrimEnds(){
    debugger;
    let word = document.getElementById("txtWord").value;
    let trimEnd = word.trimEnd();
    document.getElementById("pTrimEnds").innerHTML = `trimEnd: ${trimEnd.length}`;
}