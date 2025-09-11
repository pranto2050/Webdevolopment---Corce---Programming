





function tax(salaryamount,taxamount){
    let convart = taxamount / 100;
    let total = salaryamount * convart;
    return total;
}


let monthlySalary = 10000;
let monthlyCost = 3000;
let taxAmount = 15;

if (monthlySalary < 0 || monthlySalary < monthlyCost) {
    console.log("Not Possible");
}
else{
    let costDefrrent = monthlySalary - monthlyCost;
    console.log("After Cost: ",costDefrrent);
    let yourTax  = tax(costDefrrent,taxAmount)
    console.log("Txt ",yourTax);
    let account = costDefrrent - yourTax;
    console.log("Yor Account: ",account);
}











