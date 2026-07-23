function onClickIncludes(){
    debugger;
    let word = document.getElementById("txtWord").value;
    let letterChecker = document.getElementById("txtLetterChecker").value;
    let URL = "https://www.instagram.com/accounts/login/?hl=en";
    console.log(URL.includes("lo"));
    document.getElementById("pResult").innerHTML = URL.includes();
    if(word.includes(letterChecker)){
        document.getElementById("pResult").innerHTML = "It is an valid URL";
    }else{
        document.getElementById("pResult").innerHTML = "It is an invalid URL";

    }
}
