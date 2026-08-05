let names = ["likitha","sujana","vyshu","pinky","varshini","lavanya","pavani"];
function onClickToCheck() {
    debugger;
    let name = document.getElementById("txtName").value;
    document.getElementById("txtName").value = "";
    if(names.includes(name)){
        document.getElementById("pResult").innerHTML = `The Word ${name} is in the array.`;
    } else{
        document.getElementById("pResult").innerHTML = `The Word ${name} is not in the array.`;
    }
}

function onClickToCheckIndex() {
    debugger;
    let index = document.getElementById("txtIndex").value;
    document.getElementById("txtIndex").value = "";
    document.getElementById("pIndexResult").innerHTML = `The word ${index} is at ${names.indexOf(index)}`;
}

function onClickToCheckLastIndexOf() {
    debugger;
    let index = document.getElementById("txtLastIndexOf").value;
    document.getElementById("txtLastIndexOf").value = "";
    document.getElementById("pLastIndexResult").innerHTML = `The word ${index} is at ${names.lastIndexOf(index)}`;
}