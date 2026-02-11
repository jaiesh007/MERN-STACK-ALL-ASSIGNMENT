//  Initial data:
//          let totalAmount = 0;
// 🎯 Tasks
//   1. Add ₹500 to the total
//   2. Add ₹1200 to the total
//   3. Apply a ₹200 discount
//   4. Add 18% GST
//   5. Print the final bill amount


// # code

let totalAmount=0;

function add(amount){
    totalAmount=totalAmount+amount;
    console.log(totalAmount)
}
// 1. Add ₹500 to the total
add(500)
// 2. Add ₹1200 to the total
add(1200)
function discount(dis){
    totalAmount=totalAmount-dis;
    console.log(totalAmount)
}
// 3. Apply a ₹200 discount
discount(200)

function addGst(gstPer){
    totalAmount=totalAmount+totalAmount*(gstPer/100);
    console.log(totalAmount)
}
// 4. Add 18% GST

addGst(18)

// 5. Print the final bill amount
console.log("totalAmount",totalAmount)
