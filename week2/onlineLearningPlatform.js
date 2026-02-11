// Project story:
// -------------
// “We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

// Data setup:
// -----------
// const users = [
//   { id: 1, name: "Ravi", role: "student", active: true },
//   { id: 2, name: "Anil", role: "admin", active: true },
//   { id: 3, name: "Suman", role: "student", active: false }
// ];

// const courses = [
//   { id: 101, title: "JavaScript", price: 999, published: true },
//   { id: 102, title: "React", price: 1499, published: false },
//   { id: 103, title: "Node", price: 1299, published: true }
// ];

// const cart = [
//   { courseId: 101, qty: 1 },
//   { courseId: 103, qty: 2 }
// ];

// const roles = {
//   admin: ["create", "update", "delete", "view"],
//   student: ["view"]
// };


// TASKS
// ------
// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
//   -> Deactivate a user immutably

// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably

// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses

// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably


// ===================== DATA SETUP =====================

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// =====================================================
// MODULE 1: USER PROCESSING ENGINE
// =====================================================

// Get only active users
const activeUsers = users.filter(u => u.active);

// Extract names of active users
const activeUserNames = activeUsers.map(u => u.name);

// Check if any admin exists
const adminExists = users.some(u => u.role === "admin");

// Find user by id
const findUserById = (id) =>
  users.find(u => u.id === id);

// Deactivate a user immutably
const deactivateUser = (id) =>
  users.map(u =>
    u.id === id ? { ...u, active: false } : u
  );

// =====================================================
// MODULE 2: COURSE CATALOG ENGINE
// =====================================================

// Get published courses
const publishedCourses = courses.filter(c => c.published);

// Sort courses by price (high → low)
const sortedByPriceDesc = [...courses].sort(
  (a, b) => b.price - a.price
);

// Extract { title, price } only
const courseSummaries = courses.map(({ title, price }) => ({
  title,
  price
}));

// Calculate total value of published courses
const totalPublishedValue = publishedCourses.reduce(
  (sum, c) => sum + c.price,
  0
);

// Add a new course immutably
const addCourse = (newCourse) => [...courses, newCourse];

// =====================================================
// MODULE 3: SHOPPING CART ENGINE
// =====================================================

// Merge cart with courses
const mergedCart = cart.map(item => {
  const course = courses.find(c => c.id === item.courseId);
  return { ...item, ...course };
});

// Calculate total cart amount
const cartTotal = mergedCart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);

// Increase quantity of a course immutably
const increaseQty = (courseId) =>
  cart.map(item =>
    item.courseId === courseId
      ? { ...item, qty: item.qty + 1 }
      : item
  );

// Remove a course from cart
const removeFromCart = (courseId) =>
  cart.filter(item => item.courseId !== courseId);

// Check if all cart items are paid courses
const allPaidCourses = mergedCart.every(
  item => item.price > 0
);

// =====================================================
// MODULE 4: ROLE & PERMISSION ENGINE
// =====================================================

// Get all role names
const roleNames = Object.keys(roles);

// Check if student can delete
const studentCanDelete = roles.student.includes("delete");

// Create flat list of all unique permissions
const allPermissions = [
  ...new Set(Object.values(roles).flat())
];

// Add new role moderator immutably
const addRole = (roleName, permissions) => ({
  ...roles,
  [roleName]: permissions
});

// =====================================================
// OPTIONAL TEST LOGS (remove in production)
// =====================================================

console.log("Active Users:", activeUsers);
console.log("Active User Names:", activeUserNames);
console.log("Admin Exists:", adminExists);
console.log("Find User 1:", findUserById(1));
console.log("Deactivate User 1:", deactivateUser(1));

console.log("Published Courses:", publishedCourses);
console.log("Sorted Courses:", sortedByPriceDesc);
console.log("Course Summaries:", courseSummaries);
console.log("Total Published Value:", totalPublishedValue);
console.log("Add Course:", addCourse({ id: 104, title: "Python", price: 1599, published: true }));

console.log("Merged Cart:", mergedCart);
console.log("Cart Total:", cartTotal);
console.log("Increase Qty:", increaseQty(101));
console.log("Remove From Cart:", removeFromCart(101));
console.log("All Paid:", allPaidCourses);

console.log("Role Names:", roleNames);
console.log("Student Can Delete:", studentCanDelete);
console.log("All Permissions:", allPermissions);
console.log("Add Moderator:", addRole("moderator", ["view", "update"]));
