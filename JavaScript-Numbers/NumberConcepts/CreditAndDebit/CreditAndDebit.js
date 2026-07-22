var balance =0;
function onClickCredit(){
    debugger;
    var credit=Number(document.getElementById("txtAmount").value);
    balance =balance + credit;
    document.getElementById("pCreditResult").innerHTML= credit +"credited .Available balance:"+balance;
}
function onClickDebit(){
    debugger;
    var debit =Number(document.getElementById("txtAmount").value);
    balance =balance-debit;
    document.getElementById("pDebitResult").innerHTML = debit +"bebited . Availble balance:" +balance;
}