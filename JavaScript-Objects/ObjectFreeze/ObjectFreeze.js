let student = new Object();
function onClickObjectFreeze(){
    debugger;
    student.name = document.getElementById("txtName").value;
    student.rollNo = document.getElementById("txtRollNo").value;
    student.course = document.getElementById("txtCourse").value;
    student.percentage = document.getElementById("txtPercentage").value;
    document.getElementById("divObjectFreeze").innerHTML = JSON.stringify(Object.freeze(student));
}