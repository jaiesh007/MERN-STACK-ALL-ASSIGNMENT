
function validateTitle(title) {
    return title.length>=3?true:false;
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    return priority==="low"||priority==="medium"||priority==="high"?true:false;
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
    let temp=new Date(date);
    let today=new Date();
    return temp>today?true:false
}
export{validateDueDate,validatePriority,validateTitle}
