
function calculateBill(units) {
    let billAmount = 0;

    if (units <= 100) {
        billAmount = 0;
    }
    else if (units <= 200) {
        billAmount = (units - 100) * 5;
    }
    else {
        billAmount = (100 * 5) + ((units - 200) * 10);
    }

    return billAmount;
}

let units = 14;  
let totalBill = calculateBill(units);

console.log("Total bill for " + units + " units is: Rs " + totalBill);
