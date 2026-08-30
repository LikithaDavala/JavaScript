let car = new Object;
function onClickObjectMethod(){
    car.brand = document.getElementById("txtBrand").value;
    car.model = document.getElementById("txtBrand").value;
    car.year = document.getElementById("txtBrand").value;
    car.price = document.getElementById("txtBrand").value;
   


    document.getElementById("divObjectMethod").innerHTML = JSON.stringify(car);
}
