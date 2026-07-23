function onClickDOmainChecker(){
    debugger;
    let URL = document.getElementById("txtDomainChecker").value;
    console.log(URL);
    console.log(typeof URL);
    if(URL.startsWith("https://") || URL.startsWith("http://")){
        document.getElementById("pResult").innerHTML = "It is an Valid URL";
    }else{
        document.getElementById("pResult").innerHTML = "It is an invalid URL";
    }
}