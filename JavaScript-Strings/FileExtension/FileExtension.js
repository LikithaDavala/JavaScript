function onClickFileExtension(){
    let FileExtension = document.getElementById("txtFileExtension").value;
    if(FileExtension.endsWith(".pdf") || FileExtension.endsWith(".docx")){
        document.getElementById("pResult").innerHTML = "It is an valid File Name";
    }else{
        document.getElementById("pResult").innerHTML = "It is an invalid File Name";
    }
}