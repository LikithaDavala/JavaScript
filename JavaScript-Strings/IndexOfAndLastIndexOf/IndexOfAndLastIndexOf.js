function onClickIndexOf(){
    debugger;
    let word = document.getElementById("txtWord").value;
    let index = document.getElementById("txtIndex").value;
    console.log(word)
    console.log(typeof word)
    console.log(index)
    console.log(word.indexOf(index))
    if(word.indexOf(index) >= 0){
        document.getElementById("pIndexOf").innerHTML = "It is True";
        document.getElementById("pResult").innerHTML = `The index of value is ${word.indexOf(index)}`
    }else{
        document.getElementById("pIndexOf").innerHTML = "It is False";
        document.getElementById("pResult").innerHTML = `The index of value is ${null}`
    }
}

function onClickLastIndexOf(){
    debugger;
    let word = document.getElementById("txtWord").value;
    let index = document.getElementById("txtIndex").value;
    console.log(word)
    console.log(typeof word)
    console.log(index)
    console.log(word.lastIndexOf(index))
    if(word.lastIndexOf(index) >= 0){
        document.getElementById("pLastIndexOf").innerHTML = "It is True";
        document.getElementById("pLastResult").innerHTML =`The last index value is ${word.lastIndexOf(index)}`
    }else{
        document.getElementById("pLastIndexOf").innerHTML = "It is False";
        document.getElementById("pLastResult").innerHTML =`The last index value is ${null}`
    }
}
