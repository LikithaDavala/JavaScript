function onClickEMICalculator() {
    debugger;
    var totalLoanAmount = Number(document.getElementById("txtTotalLoanAmount").value);
    var interestRate = Number(document.getElementById("txtInterestRate").value);
    var loanTime = Number(document.getElementById("txtLoanTime").value);
    document.getElementById("pResult").innerHTML =EMICalculator(totalLoanAmount, interestRate, loanTime);
 
}

const EMICalculator = (totalLoanAmount, interestRate, loanTime) => {
    debugger;
    var totalAmount = totalLoanAmount+(totalLoanAmount*(interestRate/100));
    var totalEMICalculator = totalAmount/loanTime;
    return totalEMICalculator;
}