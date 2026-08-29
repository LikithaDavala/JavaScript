
//Function Syntax
function functionName() {
    debugger;
    console.log("functionName:", "Hello");
    document.getElementById("pSyntax").innerHTML = "Hello";
}

//Calling a Function
function greet() {
    debugger;
    console.log("Hello Likitha!");
    console.log("Iam from Eluru.");
    document.getElementById("pFunction").innerHTML = "Iam Likitha.";
}


//Function with Parameters
function greet(name) {
    debugger;
    console.log("Hello " + name);
    document.getElementById("pParameters").innerHTML = " Hello " + name;
}
greet("LIKITHA");


//Arguments
function add(a, b) {
    debugger;
    console.log(a + b);
}
add(5, 10);


//Return Statement
function add(a, b) {
    return a + b;
};

let result = add(5, 6);
console.log(result);

//Function Expression
const greets = function () {
    console.log("Hello");
};

greets();

//Arrow Functions
const sub = (a, b) => {
    console.log(a - b);
    return a - b;
}
sub(7, 5);

//Default Parameters
function sum(a=1,b=9,c=5) {
    debugger;
    return a+b+c;
}
function onClickSum(){
    debugger;
      let a = Number(document.getElementById("txtA").value);
    let b = Number(document.getElementById("txtB").value);
    let c = Number(document.getElementById("txtC").value);
    let x = sum(a,b);
     document.getElementById("pDefault").innerHTML = x;
}

//Arrow Functions


