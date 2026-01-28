// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.

// Test data:
// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };

// Tasks:
//     1. Read and print the user’s name and email
//     2. Add a new property lastLogin: "2026-01-01"
//     3. Update role from "student" to "admin"
//     4. Delete the isActive property
//     5. Use Object.keys() to list all remaining fields


const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
//     1. Read and print the user’s name and email


console.log("userName: ",user.name," userEmail: ",user.email)


//     2. Add a new property lastLogin: "2026-01-01"

user.lastLogin="2026-01-01"
console.log(user)

//     3. Update role from "student" to "admin"

user.role="admin"

//     4. Delete the isActive property

delete user.isActive;
console.log(user)

//     5. Use Object.keys() to list all remaining fields

console.log(Object.keys(user))

// ==============================================================================================================================
// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
//     1. Calculate total marks

let totalMarks=0
for(let mark in marks){
    totalMarks+=marks[mark]
}
console.log(totalMarks)


//     2. Calculate average marks

let avgMarks=0
let len=0
for(let mark in marks){
    avgMarks+=marks[mark]
    len=len+1
}
console.log(avgMarks/len)

//     3. Find the highest scoring subject

let max=marks["maths"]
for(let mark in marks){
    if(marks[mark]>max){
        max=marks[mark]
    }
}
console.log(max)

//     4. Add a new subject computer: 90
marks.computer=90
console.log(marks)

// ==============================================================================================================================
// Assignment 3: Application Settings Controller
// ---------------------------------------------
// Scenario : A web app stores user preferences as settings.

// Test data:
// const settings = {
//   theme: "light",
//   notifications: true,
//   autoSave: false,
//   language: "en"
// };


// Tasks :
//     1.Toggle theme between "light" and "dark"
//     2. Turn autoSave to true
//     3. Remove the notifications setting
//     4. Freeze the settings object so it cannot be modified


const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

//     1.Toggle theme between "light" and "dark"

settings.theme="dark"
console.log(settings)

//     2. Turn autoSave to true

settings.autoSave=true
console.log(settings)

//     3. Remove the notifications setting

delete settings.notifications
console.log(settings)

//     4. Freeze the settings object so it cannot be modified

Object.freeze(settings)
settings.autoSave=false
console.log(settings)
