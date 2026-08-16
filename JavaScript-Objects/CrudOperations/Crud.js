let bag = new Object();
function onClickCreate() {
    bag.name = document.getElementById("txtBag").value;
    bag.price = document.getElementById("txtPrice").value;
    bag.color = document.getElementById("txtColor").value;
    bag.material = document.getElementById("txtMaterial").value;
    bag.compartments = document.getElementById("txtCompartments").value;
    bag.waterResistance = document.getElementById("txtResistance").value;
    document.getElementById("divCreate").innerHTML = JSON.stringify(bag);
}

function onClickRead() {
    let property = document.getElementById("txtProperty").value;
    bag[property];
    document.getElementById("divRead").innerHTML = bag[property];
}
function onClickUpdate() {
    bag.material = document.getElementById("txtMaterial").value;
    document.getElementById("divUpdate").innerHTML = JSON.stringify(bag);
}
function onClickDelete() {

}