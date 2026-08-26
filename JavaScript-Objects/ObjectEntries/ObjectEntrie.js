let student = new Object();
function onClickObjectEntries(){
    debugger;
    student.name = document.getElementById("txtName").value;
    student.rollNo = document.getElementById("txtRollNo").value;
    student.course = document.getElementById("txtCourse").value;
    student.percentage = document.getElementById("txtPercentage").value;
    document.getElementById("divObjectEntries").innerHTML = JSON.stringify(Object.entries(student));
}