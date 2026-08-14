function onClickSave(){
    debugger;
    let inputName =document.getElementById("txtName").value;
    names.push(inputName);
    localStorage.setItem("ls_name", names);
}

function onClickLoad(){
    debugger;
    let inputName =document.getElementById("txtName").value;
    localStorage.getItem("ls_name");
    document.getElementById("txtName").value = inputName;
}