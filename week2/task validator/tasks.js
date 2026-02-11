import {validateDueDate,validatePriority,validateTitle} from './validator.js'

const tasks = [];

// 1. Add new task
function addTask(id,title, priority, dueDate) {
  // Validate using imported functions
  // If valid, add to tasks array
  // Return success/error message
  if(validateTitle(title)&&validateDueDate(dueDate)&&validatePriority(priority)){
    tasks.push({id:id,title:title,priority:priority,dueDate:dueDate,completeTask:false})
    return "Valid added to Tasks"
  }
  return "Not Valid Task"
  
}

// 2. Get all tasks
function getAllTasks() {
  // Return all tasks
  return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);

  if (task) {
    task.completed = true;
    return "Task marked as complete";
  }

  return "Task not found";
}


// Export functions
export{addTask,getAllTasks,completeTask}
