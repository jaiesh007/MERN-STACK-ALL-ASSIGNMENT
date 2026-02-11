Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss



Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid




Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years


// Assignment 1: Date Creation & Extraction
const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", day);
console.log("Time:", hours, minutes, seconds);

// Format: DD-MM-YYYY HH:mm:ss
function padZero(num) {
  return num < 10 ? "0" + num : num;
}

const formattedDate =
  `${padZero(date)}-${padZero(month)}-${year} ` +
  `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

console.log("Formatted Date:", formattedDate);

// ---------------------------------------------------------------
// Assignment 2: Date Comparison & Validation

let enrollmentDeadline = new Date("2026-01-20");
let today = new Date();

if (today < enrollmentDeadline) {
  console.log("Enrollment Open");
} else {
  console.log("Enrollment Closed");
}

let inputDate = "2026-02-30";

function isValidDate(dateStr) {
  const d = new Date(dateStr);
  return (
    !isNaN(d.getTime()) &&
    dateStr === d.toISOString().split("T")[0]
  );
}

console.log(
  isValidDate(inputDate) ? "Valid Date" : "Invalid Date"
);

// ---------------------------------------------------------------
// Assignment 3: Age Calculator

let dob = "2000-05-15";

function calculateAge(dobStr) {
  const birthDate = new Date(dobStr);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

console.log("Age:", calculateAge(dob));
