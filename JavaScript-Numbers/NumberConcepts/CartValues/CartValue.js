function onClickCartValue(){
    debugger;
    var productCost = Number(document.getElementById("txtProductCost").value);
    var quantity = Number(document.getElementById("txtQuantity").value);
    var gstPercentage = Number(document.getElementById("txtGst").value);
    document.getElementById("pResult").innerHTML=calculateCartValue(productCost,quantity,gstPercentage);
    var cartValue=calculateCartValue(productCost,quantity,gstPercentage);
}

const calculateCartValue =(productCost,quantity,gstPercentage)=>{
    debugger;
    var totalProductCost =(productCost*quantity);
    var gstCost =totalProductCost*(gstPercentage/100);
    var cartValue =totalProductCost +gstCost;
    return cartValue;
}