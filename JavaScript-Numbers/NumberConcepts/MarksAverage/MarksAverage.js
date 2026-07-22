function onClickAvergeMarks() {
    debugger;
    var telugu = Number(document.getElementById("txtTelugu").value);
    var english = Number(document.getElementById("txtEnglish").value);
    var hindi = Number(document.getElementById("txtHindi").value);
    var science = Number(document.getElementById("txtScience").value);
    var social = Number(document.getElementById("txtSocial").value);
    document.getElementById("pResult").innerHTML = calculateAverageMarks(telugu, english, hindi, science, social);
    var marks = calculateAverageMarks(telugu, english, hindi, science, social);
}
function onClickAvergePercentge() {
    debugger;
    var telugu = Number(document.getElementById("txtTelugu").value);
    var english = Number(document.getElementById("txtEnglish").value);
    var hindi = Number(document.getElementById("txtHindi").value);
    var science = Number(document.getElementById("txtScience").value);
    var social = Number(document.getElementById("txtSocial").value);
    document.getElementById("pTotalResult").innerHTML = calculateAverageMarks(telugu, english, hindi, science, social);
    var percentage = calculateAverageMarks(telugu, english, hindi, science, social);
}

const calculateAverageMarks = (telugu, english, hindi, science, social) => {
    debugger;
    var total = telugu + english + hindi + science + social;
    document.getElementById("pTotalResult").innerHTML = total;
    var average = total / 5;
    var percentage = total / 500 * 100;
    document.getElementById("pAverage").innerHTML = average;
    document.getElementById("pPercentage").innerHTML = percentage;
    return average;
}