function onClickProfitOrLoss() {
    debugger;
    var numberOfItems = Number(document.getElementById("txtNumberOfItems").value);
    var costPrice= Number(document.getElementById("txtCostOfItems").value);
    var travellingCost =Number(document.getElementById("txtTravellingCost").value);
    var sellingPrice = Number(document.getElementById("txtSellingPrices").value);
    document.getElementById("pResult").innerHTML=calculteProfitOrLoss(numberOfItems,costPrice,travellingCost,sellingPrice);
    var profitOrLoss=calculteProfitOrLoss(numberOfItems,costPrice,travellingCost,sellingPrice)
    if(profitOrLoss >0){
        document.getElementById("pResult").innerHTML=`it is an profit of RS ${profitOrLoss}`;
    }else if(profitOrLoss<0){
        document.getElementById("pResult").innerHTML=`it is an loss of RS ${profitOrLoss}`
    }else{
        document.getElementById("pResult").innerHTML="no loss or no profit"
    }

}

const calculteProfitOrLoss=(numberOfItems,costPrice,travellingCost,sellingPrice)=>{
    debugger;
    var totalCostPrice = (numberOfItems*costPrice)+travellingCost;
    var totalSellingPrice = numberOfItems*sellingPrice;
    var profitOrLoss = totalSellingPrice-totalCostPrice;
    return profitOrLoss;
    
}