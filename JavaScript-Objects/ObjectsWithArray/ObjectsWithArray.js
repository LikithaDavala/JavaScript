let student = new Object();
let arrays =["AI/ML", "Python", "Java", "dotnet"];
function onClickObjectsInArray(){
    debugger;
    student.name = document.getElementById("txtName").value;
    student.rollNo = document.getElementById("txtRollNo").value;
    student.course = arrays[document.getElementById("txtCourse").value];
    student.percentage = document.getElementById("txtPercentage").value;
    arrays.push(student);
    document.getElementById("divObjectsInArrays").innerHTML = JSON.stringify(student);
}