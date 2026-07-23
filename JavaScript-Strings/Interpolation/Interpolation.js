function onClickInterpolate() {
    debugger;
    let name = document.getElementById("txtName").value;
    let age = Number(document.getElementById("txtAge").value);
    let city = document.getElementById("txtCity").value;
    console.log(name)
    console.log(typeof name)
    console.log(age)
    console.log(typeof age)
    console.log(city)
    console.log(typeof city)
    let result = `My Name is ${name}.I'm ${age}old. I live in ${city}.`
    document.getElementById("pInterpolate").innerHTML = result;
}