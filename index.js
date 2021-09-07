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

// var point = {
//     x : 10, 
//     y : 20,
//     z : 15
// }

// point.x = 45
// point.a = 16

// // console.log(point)
// // console.log(point.d)

// var prop = 'z'
// point [prop] = 55 

// console.log(point)


// Studying JS Object from w3school: 

// Object Definitions:

// var person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue"
// }
// console.log(person);

// var person = {}
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person);

// var person = new Object();

// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person);

// JS Object Properties: 

// var person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue"
// }

//console.log(person.firstName + " is " + person.age + " years old.");
//console.log(person["firstName"] + " is " + person["age"] + " years old.")

// Adding Properties :

//person.nationality = "English";

//console.log(person);

// Deleting Properties: 

//delete person.lastName

//console.log(person);

// Nested Objects : 

// var person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     cars : {
//         car1 : "Ford",
//         car2 : "BMW",
//         car3 : "Fiat"
//     },
//     eyeColor : "blue"
// }

// console.log(person);

// Nested Arrays and Objects :

// const myObj = {
//     name : "John",
//     age : 30,
//     cars : [
//         {name : "Ford", models: ["Fiesta", "Focus", "Mustang"]},
//         {name : "BMW", models: ["320", "X3", "X5"]},
//         {name : "Fiat", models: ["500", "Panda"]}
//     ],
//     eyeColor : "blue"
// }

// console.log(myObj);
// console.log(typeof myObj);

// JS Object Methods :

var person = {
    firstName : "John", 
    lastName : "Doe", 
    id : 5566,
    fullName : function (){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName())