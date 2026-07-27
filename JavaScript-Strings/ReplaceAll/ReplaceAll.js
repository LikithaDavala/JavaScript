function onClickreplaceAll(){
    debugger;
    let word = document.getElementById("txtWord").value;
    let replaceWord = document.getElementById("txtReplaceWord").value;
    let replaceAll = document.getElementById("txtReplaceAll").value;
    let result = word.replaceAll(replaceWord , replaceAll);
    console.log(word);
    console.log(replaceWord);
    console.log(replaceAll);
    document.getElementById("pResult").innerHTML = result;
}