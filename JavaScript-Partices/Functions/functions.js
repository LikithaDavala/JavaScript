//Function Declaration:
function calAge1(birthYear){  //birthYear ->parameter
    return 2037 -birthYear;
}

const age1 = calAge1(1991);   // 1991 -> arguments


//Function Expressions:
const calAge2 = function(birthYear){
    return 2037 - birthYear;
}
 
const age2 =calAge2(1991);

console.log(age1, age2);

//Arrow Functions:
 const calAge3 =birthYear => 2037 - birthYear;
 const age3 = calAge3(1991);
 console.log(age3);

 //lets calculate the years until retirement: here we use {} because we have multiple statements in it.

//  const yearsUntilRetirement = birthYear => {
//     const age =2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
//  }
// console.log(yearsUntilRetirement(1991));

//  const yearsUntilRetirement = (birthYear, firstName) => {
//     const age =2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${birthYear} years.`;
//  }
// console.log(yearsUntilRetirement(1991, "Rithik"));
// console.log(yearsUntilRetirement(1992, "Rishi"));


//Calling a function inside a function:
const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName){
    const age =calAge1(birthYear);
    const retirement = 65 -age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${birthYear} years.`);
        return retirement;
    }else{
         console.log(`${firstName} has already retired.`);
         return -1;
    }
}
console.log(yearsUntilRetirement(1991, "rithik"));
console.log(yearsUntilRetirement(1950, "rishi"));



//Function:
// function fruitProcessor(apples, oranges){
//     const juice = `Juice with${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const juices = fruitProcessor(5,4);
// console.log(juices);


//Calling a function inside a function:
const cutPieces = function (fruit){
    return fruit * 4;
};

const fruitProcessor =function(apples , oranges){
    const applePieces =cutPieces(apples);
     const orangePieces =cutPieces(oranges);

     const juice =`Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
     return juice;
}
console.log(fruitProcessor(2,3)); 