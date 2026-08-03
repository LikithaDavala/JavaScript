function onClickSubString() {
    let word = document.getElementById("txtWord").value;
    let startIndex = document.getElementById("txtStartIndex").value;
    let endIndex = document.getElementById("txtEndIndex").value;
    let text = "JavaScript";
    console.log(text.substring(0, 4));
    document.getElementById("pResult").innerHTML = word.substring(startIndex, endIndex);
}
