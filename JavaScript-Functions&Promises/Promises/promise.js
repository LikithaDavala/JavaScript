function checkInput() {
    let inputValue = document.getElementById("txtInput").value;
    let promise = new Promise((resolve, reject) => {

        // Ternary Operators:
        (isNaN(inputValue)) ? resolve("Input is a String") : reject("Input is a Number");


        if (isNaN(inputValue)) {
            // String
            resolve("Input is a String");
        } 
        else {
            // Number
            reject("Input is a Number");
        }

    });

    promise
        .then((result) => {
            console.log("THEN:", result);
        })
        .catch((error) => {
            console.log("CATCH:", error);
        })
        .finally(() => {
            console.log("FINALLY: Promise completed");
        });
    document.getElementById("divResult").innerHTML = inputValue;
}