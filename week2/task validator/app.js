//  iii. app.js - Main application
//                   // TODO: Import task functions
//                   // import { ... } from './task.js';
//                   // Test your module system
//                   // 1. Add some tasks
//                   // 2. Display all tasks
//                   // 3. Complete a task
//                   // 4. Display all tasks again



// import { ... } from './task.js';
import {addTask,getAllTasks,completeTask} from './task.js'

// 1. Add some tasks

let res=addTask(1,"learn js","high","2026-01-27")
console.log(res)
let res1=addTask(2,"learn backend","high","2026-01-27")

// 2. Display all tasks
console.log(getAllTasks())

console.log(completeTask(1))

console.log(getAllTasks())
