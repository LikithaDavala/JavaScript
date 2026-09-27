const person = { //object literal syntax.

}

const personDetails = {
    firstName: "likitha",
    lastName: "davala",
    age:2026-2002,
    profession:"full stack developer",
    friends:["vyshu","pinky","lav","suji"]
}
// console.log(personDetails);
// console.log(personDetails.lastName); //dot
// console.log(personDetails["lastName"]); //bracket Notation especially the key in string("") form 

const interestedIn = prompt("what do you want to know about likitha? choose between firstName, lastName, age and profession");
if(personDetails[interestedIn]) {
    console.log(personDetails[interestedIn]);
}else {
    console.log("Its an Wrong Request.");
}

// personDetails.location ="Hyderabad";
// personDetails["email"] = "likitha@gmail.com"
// console.log(personDetails);

// //personDetails has 4 friends and his best friend name is called pinky--challenge-1:
// console.log(`${personDetails.firstName} has ${personDetails.friends.length} friends, and his best friend name is called ${personDetails.friends[1]}`);

// const personDetails = {
//     firstName: "likitha",
//     lastName: "davala",
//     birthYear: 2000,
//     profession: "developer",
//     friends: ["vyshu", "pinky", "lav", "suji"],
//     hasLicences: true,

// Here we use an function in object dani dot and bracket notation lo present chesam and objects lo function lo expression ni echam ante oka value ani ardam manaki appudu ah function bati age ni calculate chestam
//     calcAge: function(birthYear){
//         return 2037- birthYear;
//     }
// }
//     console.log(personDetails.calcAge(2000));
//     console.log(personDetails["calcAge"](2000));
    // Here we use this function for simply we don,t here parameter and below of console also not mention age and also anytime we use functions in object we always declare same property and valuesin objects lo ayina leka console lo ayina
//     calcAge: function(){
//         console.log(this); //ee line ey object in refer chestundo chudaniki matrame
//         return 2037- this.birthYear;
//     },

//     getSummary:function(){
//         return `${this.firstName} is a ${this.calcAge()}years old ${this.profession} and she ha ${this.hasLicences ? "a" : "no"} drivers License.`
//     }
// }
//     console.log(personDetails.calcAge());

//Here we store an variable called this.age soo arguments ni function parameters lo pass cheyali?
//     calcAge: function () {
//        this.age = 2037 - this.birthyear;
//         return this.age;
//     }
// };
// console.log(personDetails.calcAge());
// console.log(personDetails.age);
// console.log(personDetails["age"]);


//"likitha is a 37 years old developer,and she has a driver,s license"
console.log(personDetails.getSummary())