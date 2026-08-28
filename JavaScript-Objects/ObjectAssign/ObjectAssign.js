let student = new Object();
function onClickObjectAssign(){
    debugger;
    student.name = document.getElementById("txtName").value;
    student.rollNo = document.getElementById("txtRollNo").value;
    student.course = document.getElementById("txtCourse").value;
    student.percentage = document.getElementById("txtPercentage").value;
    document.getElementById("divObjectAssign").innerHTML = JSON.stringify(Object.assign({},student));
}