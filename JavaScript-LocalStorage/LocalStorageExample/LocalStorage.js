
let txtName = document.getElementById("txtName");
let btnSave = document.getElementById("btnSave");
let btnGet = document.getElementById("btnGet");
let btnRemove = document.getElementById("btnRemove");
let result = document.getElementById("result");

// 1. Save data
btnSave.addEventListener("click", function () {
    let name = txtName.value.trim();

    if (name === "") {
        result.innerText = "Please enter your name.";
        return;
    }

    localStorage.setItem("username", name);

    result.innerText = "Name saved successfully!";
});

// 2. Get saved data
btnGet.addEventListener("click", function () {
    let savedName = localStorage.getItem("username");

    if (savedName === null) {
        result.innerText = "No saved name found.";
    } else {
        result.innerText = "Welcome, " + savedName + "!";
        txtName.value = savedName;
    }
});

// 3. Remove saved data
btnRemove.addEventListener("click", function () {
    localStorage.removeItem("username");

    result.innerText = "Saved name removed.";
    txtName.value = "";
});
