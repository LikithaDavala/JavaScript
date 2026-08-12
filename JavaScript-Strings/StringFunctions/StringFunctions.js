function onClickStrengthLength(){
    debugger;
    let name = document.getElementById("txtString").value;
    let length = name.length;
    if(length > 250){
        alert("Maximum length exceeded!");
        name = name.subString(0 , 250);
        document.getElementById("txtString").value = name;
        length = name .length;
    }
    document.getElementById("pResult").innerHTML = `${length}/250`;
    }

function onClickUpperCase(){
    debugger;
    let name =document.getElementById("txtString").value;
    let upperCase = name.toUpperCase();
    document.getElementById("pResult").innerHTML =`Upper Case: ${upperCase}`;
}

function onClickLowerCase(){
    debugger;
    let name = document.getElementById("txtString").value;
    let lowerCase = name.toLowerCase();
    document.getElementById("pResult").innerHTML =`Lower Case ${lowerCase}`;
}

function onClickCamelCase(str) {

    debugger;
      console.log(str)
    let words = str.toLowerCase().split(" ");
    console.log(word)
    console.log(typeof word)

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join("");
}
