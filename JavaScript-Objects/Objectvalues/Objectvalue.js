let student = new Object();
function onClickObjectValues(){
    debugger;
    student.name = document.getElementById("txtName").value;
    student.rollNo = document.getElementById("txtRollNo").value;
    student.course = document.getElementById("txtCourse").value;
    student.percentage = document.getElementById("txtPercentage").value;
    document.getElementById("divObjectValues").innerHTML = JSON.stringify(Object.values(student));
}