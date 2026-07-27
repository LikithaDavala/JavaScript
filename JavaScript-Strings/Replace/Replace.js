function onClickReplace(){
    let word = document.getElementById("txtWord").value;
    let oldText = document.getElementById("txtOldWord").value;
    let newText = document.getElementById("txtNewWord").value;
    document.getElementById("pResult").innerHTML = word.replace(oldText, newText);
}