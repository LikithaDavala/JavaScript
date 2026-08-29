let student = new Object();
function onClickObjectKeys(){
    debugger;
    student.name = document.getElementById("txtName").value;
    student.rollNo = document.getElementById("txtRollNo").value;
    student.course = document.getElementById("txtCourse").value;
    student.percentage = document.getElementById("txtPercentage").value;
    document.getElementById("divObjectKeys").innerHTML = JSON.stringify(Object.keys(student));
}