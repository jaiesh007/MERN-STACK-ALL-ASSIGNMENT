// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];

//     1. filter() temperatures above 35
let temp=temperatures.filter(function(ele){
    return ele>35
})
console.log(temp)

//     2. map() to convert all temperatures from Celsius → Fahrenheit

let temp1=temperatures.map(function(ele){
    return ele*1.8+32
})
console.log(temp1)

//     3. reduce() to calculate average temperature
let temp3=temperatures.reduce(function(accumulator,ele){
    return accumulator+ele
},0)/temperatures.length
console.log(temp3)

//     4. find() first temperature above 40

let temp4=temperatures.find(function(ele){
    return ele>40
})
console.log(temp4)
//     5. findIndex() of temperature 28
let temp5=temperatures.findIndex(function(ele){
    return ele===28
})
console.log(temp5)
//  ===================================================================================================================================
// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"

//     1. filter() courses with name length > 5
const courses = ["javascript", "react", "node", "mongodb", "express"];

let ans=courses.filter(function(ele){
    return ele.length>5
})
console.log(ans)

//     2. map() to convert course names to uppercase
let ans2=courses.map(function(ele){
    return ele.toUpperCase()
})
console.log(ans2)

//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

let ans3=courses.reduce((acc,ele)=>acc.toUpperCase()+" | "+ele.toUpperCase())
console.log(ans3)

//     4. find() the course "react"
let ans4=courses.find((ele)=>ele==="react")
console.log(ans4)

//     5. findIndex() of "node"
let ans5=courses.findIndex((ele)=>ele==="node")
console.log(ans5)

// ===========================================================================================================================
// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
const marks = [78, 92, 35, 88, 40, 67];

//     1. filter() marks ≥ 40 (pass marks)

let pass=marks.filter((ele)=>ele>=40)
console.log(pass)

//     2. map() to add 5 grace marks to each student

let pass1=marks.map((ele)=>ele+5)
console.log(pass1)

//     3. reduce() to find highest mark

let pass3=marks.reduce((acc,ele)=>acc>ele?acc:ele)
console.log(pass3)

//     4. find() first mark below 40

let pass4=marks.find((ele)=>ele===40)
console.log(pass4)

//     5. findIndex() of mark 92

let pass5=marks.findIndex((ele)=>ele===92)
console.log(pass5)
