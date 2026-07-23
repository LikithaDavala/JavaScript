function onClickImmtuable(){
    debugger;
    let word = document.getElementById("txtWord").value;
    console.log(`Original string ${word}`);
    console.log(word[3]);
    word[3] = "N";   
    console.log(`After changing the character: ${word}`)
}


    //Mutable in Array Concept:
let fruits =["Apple" ,"Mango" ,"Strawberry" ,"Kiwi"];
console.log(`original Array: ${fruits}`);
fruits[0] = "Grapes";
console.log(`After changing first element: ${fruits}`);