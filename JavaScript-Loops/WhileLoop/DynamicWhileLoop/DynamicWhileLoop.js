function onClickWhileLoop() {
    debugger;
    let startNumber = Number(document.getElementById("txtStartNumber").value);
    let endNumber = Number(document.getElementById("txtEndNumber").value);
    let i = startNumber;
    while(i <= endNumber){
        console.log(i);
        i++;
    }
}