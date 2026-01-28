// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"
const cart = [
      { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
      { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
      { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
      { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
    ];
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"
console.log("Task1")
let ans=cart.filter(function(ele){

    if(ele.inStock===true){
        return(
            {
                id:ele.id,
                name:ele.name,
                price:ele.price,
                quantity:ele.quantity,
                inStock:ele.inStock
            }
        )
        
    }
})
console.log(ans)
console.log("Task2")
//     2. Use map() to create a new array with:  { name, totalPrice }

let ans2=cart.map(function(ele){
    return({
        name:ele.name,
        totalPrice:ele.price
    })
})
console.log(ans2)
console.log("Task3")
//     3. Use reduce() to calculate grand total cart value

let ans3=cart.reduce((acc,ele)=>(acc+ele.price),0) 
console.log(ans3)
console.log("Task4")
//     4. Use find() to get details of "Mouse"

let ans4=cart.find((ele)=>ele.name==="Mouse")
console.log(ans4)
console.log("Task5")
//     5. Use findIndex() to find the position of "Keyboard"
let ans5=cart.findIndex((ele)=>ele.name==="Keyboard")
console.log(ans5)





// ======================================================================================================================================
// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//     1. filter() students who passed (marks ≥ 40)
console.log("Task1")
let pass=students.filter(function(ele){
    if(ele.marks>=40){
        return({
            id:ele.id,
            name:ele.name,
            marks:ele.marks
        })
    }
})
console.log("Task2")


//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

let pass2=students.map(function(ele){
    if(ele.marks>=90){
        return({
            id:ele.id,
            name:ele.name,
            marks:ele.marks,
            grade:"A"
        })
    }
    else if(ele.marks>=75){
        return({
            id:ele.id,
            name:ele.name,
            marks:ele.marks,
            grade:"B"
        })
    }
    else if(ele.marks>=60){
        return({
            id:ele.id,
            name:ele.name,
            marks:ele.marks,
            grade:"C"
        })
    }
    else{
        return({
            id:ele.id,
            name:ele.name,
            marks:ele.marks,
            grade:"D"
        })
    }
})
console.log(pass2)

//    3. reduce() to calculate average marks
console.log("Task3")
let pass3=students.reduce((acc,ele)=>acc+ele.marks,0)/students.length
console.log(pass3)
console.log("Task4")
//    4. find() the student who scored 92
let pass4=students.find((ele)=>ele.marks===92)
console.log(pass4)
console.log("Task5")
//    5. findIndex() of student "Kiran"
let pass5=students.findIndex((ele)=>ele.name==="Kiran")
console.log(pass5)




// ======================================================================================================================================

// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//     1. filter() employees from IT department
console.log("Task1")
let done=employees.filter(function(ele){
    if(ele.department==="IT"){
        return({
            id:ele.id,
            name:ele.name,
            salary:ele.salary,
            department:ele.department
        })
    }
})
console.log(done)
console.log("Task2")
//     2. map() to add:
//             netSalary = salary + 10% bonus

let done2=employees.map(function(ele){
    return({
        id:ele.id,
        name:ele.name,
        salary:ele.salary,
        department:ele.department,
        netSalary:ele.salary+ele.salary*10/100
    })
})

console.log(done2)
console.log("Task3")

//     3. reduce() to calculate total salary payout

let done3=employees.reduce((acc,ele)=>acc+ele.salary,0)
console.log(done3)
console.log("Task4")
//     4. find() employee with salary 30000

let done4=employees.find((ele)=>ele.salary===30000)
console.log(done4)
console.log("Task5")
//     5. findIndex() of employee "Neha"

let done5=employees.findIndex((ele)=>ele.name==="Neha")
console.log(done5)


// ======================================================================================================================================
// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//     1. filter() only "Sci-Fi" movies

console.log("Task 1")

let answ=movies.filter(function(ele){
    if(ele.genre==="Sci-Fi"){
        return({
            id:ele.id,
            title:ele.title,
            genre:ele.genre,
            rating:ele.rating
        })
    }
})
console.log(answ)

//     2. map() to return:
//             "Inception (8.8)"

console.log("Task 2")

let answ1=movies.map(function(ele){
    if(ele.rating===8.8){
        return({
            id:ele.id,
            title:ele.title,
            genre:ele.genre,
            rating:ele.rating
        })
    }
})
console.log(answ1)



//     3. reduce() to find average movie rating
console.log("Task 3")

let answ3=movies.reduce((acc,ele)=>acc+ele,0)/movies.length
console.log(answ3)



//     4. find() movie "Joker"
console.log("Task 4")

let answ4=movies.find((ele)=>ele.title==="Joker")
console.log(answ4)

//     5. findIndex() of "Avengers"
console.log("Task 5")

let answ5=movies.findIndex((ele)=>ele.title==="Avengers")
console.log(answ5)

// ======================================================================================================================================
// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000

console.log(Task1)
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
//     1. filter() all credit transactions
console.log(Task1)

let res1=transactions.filter(function(ele){
    if(ele.type==="credit"){
        return{
            id:ele.id,
            type:ele.type,
            amount:ele.amount
        }
    }
})
console.log(res1)
//     2. map() to extract only transaction amounts
console.log(Task2)
let res2=transactions.map(function(ele){
    return{
        amount:ele.amount
    }
})
console.log(res2)

//     3. reduce() to calculate final account balance
console.log(Task3)

let res3=transactions.reduce((acc,ele)=>acc+ele,0)
console.log(res3)

//     4. find() the first debit transaction
console.log(Task4)

let res4=transactions.find((ele)=>ele.type==="debit")
console.log(res4)


//     5. findIndex() of transaction with amount 10000
console.log(Task5)

let res5=transactions.findIndex((ele)=>ele.amount===10000)
console.log(res5)
