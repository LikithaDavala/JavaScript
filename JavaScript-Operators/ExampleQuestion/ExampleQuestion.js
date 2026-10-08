function Submit(){
    debugger;
    let age = document.getElementById("txtAge").value;
      let hasId = document.getElementById("txtID").checked;
        let banned = document.getElementById("txtBanned").checked;
        let result;
        if(age >= 18 && hasId && !banned) {
            result = "Exam Entry Allowed"
        } else {
            result = "Exam Entry Denied"
        }
        document.getElementById("pSubmit").innerHTML = result;
}