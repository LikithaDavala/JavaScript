let student = new Object();
function onClickSpreadOperator() {
    debugger;
    student.name = document.getElementById("txtName").value;
    student.rollNo = document.getElementById("txtRollNo").value;
    student.course = document.getElementById("txtCourse").value;
    student.percentage = document.getElementById("txtPercentage").value;
    let copy = {
        ...student
    };
    document.getElementById("divSpreadOperator").innerHTML = JSON.stringify(copy);
}