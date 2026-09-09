function onClickSplit() {
    debugger;
    let word = document.getElementById("txtWord").value;
    let result = word.split(" ")
    document.getElementById("pResult").innerHTML = result;
}