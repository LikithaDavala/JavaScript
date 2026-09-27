const friends = ["liki","lav","suji","vyshu"];
console.log(friends);

console.log(friends[1]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

const firstName = "Likitha";
const likitha = [firstName , "Davala", 2026 - 2002, "teacher", friends];
console.log(likitha);
console.log(likitha.length);

//Push:
const names = ["liki","lav","suji","vyshu"];
names.push("Raj");  //push ante array lo last place avvtundi
console.log(names);
const namesLength = names.push("Ram");
console.log(namesLength);

//unshift:
names.unshift("reena");
console.log(names); // array lo paina place avvtundi

//pop:
names.pop("vyshnu");
console.log(names);

//shift:
names.shift("reena");
console.log(names);

//indexOf():
console.log(names.indexOf("lav"));
console.log(names.indexOf("pradeep"));

//includes:
console.log(names.includes("lav"));
console.log(names.includes("pradeep"));

//string->string||number->number: true vastundi includes loo is there any type is differenent it gives false
names.push(59)
console.log(names.includes("59"));

names.push("95");
console.log(names.includes("95"));

names.push(11);
console.log(names.includes(11));

//if statement using includes:
if(names.includes("suji")){
    console.log("yeah! suji is include in this array");
}else {
    console.log("No! there is no  this particular name in the array")
}

