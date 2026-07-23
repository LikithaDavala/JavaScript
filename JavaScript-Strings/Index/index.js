function onClickIndex(){
    debugger;
    let word = document.getElementById("txtWord").value;
    let indexValue = Number(document.getElementById("txtIndex").value);
    let result = word[indexValue];
    document.getElementById("pResult").innerHTML=result;
}