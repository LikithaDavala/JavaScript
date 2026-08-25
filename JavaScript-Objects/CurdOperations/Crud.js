let bag = new Object();
let bags = [];
function onClickCreate() {
    debugger;
    bag.name = document.getElementById("txtBag").value;
    bag.price = parseInt(document.getElementById("txtPrice").value);
    bag.color = document.getElementById("txtColor").value;
    bag.material = document.getElementById("txtMaterial").value;
    bag.compartments = document.getElementById("txtCompartments").value;
    bag.waterResistance = document.getElementById("txtResistance").value;
    bags.push(bag);
    document.getElementById("divCreate").innerHTML = JSON.stringify(bags);
}

function onClickRead() {
    debugger;
    let read = document.getElementById("txtReadProperty").value;
    bag[read];
    document.getElementById("divRead").innerHTML = JSON.stringify(`Property to Read: ${bag[read]}`);
}
function onClickUpdate() {
    debugger;
    let update = document.getElementById("txtUpdateProperty").value;
    bag[update]=document.getElementById("txtUpdatePropertyValue").value;
    document.getElementById("divUpdate").innerHTML = JSON.stringify(`Property to Update: ${bag[update]}`)
}
function onClickDelete() {
    debugger;
    let remove = document.getElementById("txtDeleteProperty").value;
    delete bag[remove];
    document.getElementById("divDelete").innerHTML = JSON.stringify(bag);
    console.log(bag);
}