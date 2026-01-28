// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
//               const user = {
//                 id: 101,
//                 name: "Ravi",
//                 preferences: {
//                   theme: "dark",
//                   language: "en"
//                 }
//               };

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};
//     1. Create a shallow copy of user
// answer you can do this using 
let shallowCopyUser={...user}

// 2.i. name in the copied object

shallowCopyUser.name="Shiva"

// 2.ii. preferences.theme in the copied object


shallowCopyUser.preferences.theme="light"

// to create a deepcopy we use structuredClone()
let deepCopy=structuredClone(user)


//           iii .Log both original and copied objects
console.log(user)
console.log(deepCopy)


//           iv. Observe what changes and what doesn’t
// my answer from unserstanding sir
// in deepCopy there is a seperate copy created for full Object even for inner object the change on deepcopy inner object does not effect the user but in shallow copy the change in inner objectes effect user

