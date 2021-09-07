// Stack Learner YT 051 : JS Object Literal vs Constructor : 

    // code written in index.js file in webDev300821 Repo


// Stack Learner YT 053 : Accessing Object Properties in JS

// var point = {
//     x : 10,
//     y : 20,
//     z : 15
// }

// // Dot Notation : 
// // console.log(point.x)
// // console.log(point.y)
// // console.log(point.z)
// // console.log(point.x + point.y)

// //Array Notation :

// console.log(point['x'])
// console.log(point['y'])
// console.log(point['z'])
// console.log(point['x'] + point['y'] + point['z'])


// Stack Learner YT 053 : Setting Object Properties in JS

var point = {
    x : 10, 
    y : 20,
    z : 15
}

point.x = 45
point.a = 16

// console.log(point)
// console.log(point.d)

var prop = 'z'
point [prop] = 55 

console.log(point)