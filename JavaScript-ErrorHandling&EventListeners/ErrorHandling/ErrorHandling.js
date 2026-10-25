
let btnCalculate = document.getElementById("btnCalculate");
let result = document.getElementById("result");

btnCalculate.addEventListener("click", function () {
    try {
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;

        // Check whether inputs are empty
        if (num1 === "" || num2 === "") {
            throw new Error("Please enter both numbers.");
        }

        num1 = Number(num1);
        num2 = Number(num2);

        // Check division by zero
        if (num2 === 0) {
            throw new Error("Cannot divide by zero.");
        }

        let answer = num1 / num2;

        result.style.color = "green";
        result.innerText = "Result: " + answer;
    }
    catch (error) {
        result.style.color = "red";
        result.innerText = "Error: " + error.message;
    }
    finally {
        console.log("Calculation attempt completed.");
    }
});
