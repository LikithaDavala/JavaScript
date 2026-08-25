let person = new Object();
function onClickNestedObjects() {
    person.name = document.getElementById("txtName").value;
    person.age = document.getElementById("txtAge").value;
    person.city = document.getElementById("txtCity").value;
    let address = new Object();
    address.street = document.getElementById("txtStreet").value;
    address.pincode = document.getElementById("txtPincode").value;
    person.address = address;
    document.getElementById("divNested").innerHTML =JSON.stringify(person.address.street);
    console.log(person);
}
