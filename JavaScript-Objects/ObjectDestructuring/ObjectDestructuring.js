let student = new Object();
function onClickObjectDestructuring(){
    debugger;
    student.name = document.getElementById("txtName").value;
    student.rollNo = document.getElementById("txtRollNo").value;
    student.course = document.getElementById("txtCourse").value;
    student.percentage = document.getElementById("txtPercentage").value;
    let {name, rollNo} = student;
    document.getElementById("divObjectDestructuring").innerHTML = JSON.stringify(name + rollNo);
    console.log(name);
    console.log(rollNo);
}
