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

// var person = {
//     firstName : "John", 
//     lastName : "Doe", 
//     id : 5566,
//     fullName : function (){
//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log(person.fullName())

// Date : 08.09.2021

// JS Display Object :

// Ex. 1

// const person = {
//     name : "John",
//     age : 30,
//     city : "New York"
// }

// console.log(person);

// Ex. 2 

// const person = {
//     name : "John",
//     age : 30,
//     city : "New York"
// }
// let txt = "";
// for (let x in person){
//     txt += person [x] + " ";
// };

// console.log(txt)

// Ex. 3

// const person = {
//     name : "John",
//     age : 30,
//     city : "New York"
// };

// const myArray = Object.values(person);

// console.log(myArray);

// Ex. 4

// const person = {
//     name : "John",
//     age : 30,
//     city : "New York"
// }

// let myString = JSON.stringify(person)

// console.log (myString)

// Ex. 5

// const person = {
//     name : "John",
//     age : 30,
//     today : new Date ()
// }

// let myString = JSON.stringify(person);

// console.log(myString)

// Ex. 6

// const person = {
//     name: "John",
//     age: function () { return 30; }
// }
// let myString = JSON.stringify(person)

// console.log(myString)

// Ex. 7

// const person = {
//     name : "John", 
//     age : function(){return 30;}
// }
// person.age = person.age.toString()

// let myString = JSON.stringify(person);

// console.log(myString)

// Ex. 8

// const arr = ["John", "Peter", "Sally", "Jane"]

// let myString = JSON.stringify(arr)

// console.log(myString)


// JS Object Accessors

// Ex. 1

// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     language : "en",
//     get lang (){
//         return this.language;
//     }
// }
// console.log(person.lang)  // using get 

// Ex. 2

// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     language : "en",
//     set lang (lang){
//         return this.language = lang;
//     }
// }
// person.lang = "en"

// console.log(person.language)

// Ex. 3   Which one is preferable between below two: 

// First 

// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     fullName : function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(person.fullName())  // Access fullName as a function: person.fullName()

// Second

// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     get fullName (){
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(person.fullName)  // Access fullName as a property:person.fullName


// Ex. 4  Data Quality 

// const person = {
//     firstName : "John",
//     lastName : "Doe", 
//     language : "en",
//     get lang (){
//         return this.language.toUpperCase();
//     }
// }
// console.log(person.lang)

// Ex. 5

// const person = {
//     firstName : "John",
//     lastName : "Doe", 
//     language : "",
//     set lang (lang){
//         this.language = lang.toUpperCase();
//     }
// }
// person.lang = "en";

// console.log(person.language)

// JS Object Constructor :

// Ex. 1

// function Person (first, last, age, eye){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
// const myFather = new Person ("John", "Doe", 50, "blue");

// console.log("My father is " + myFather.age + ".")

// Ex. 2 

// function Person (first, last, age, eye){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.nationality = "English"
// }

// const myFather = new Person ("John", "Doe", 50, "blue");
// const myMother = new Person ("Sally", "Rally", 48, "green");

// console.log("My father is " + myFather.nationality + ". My mother is also " + myMother.nationality + ".");

// Ex. 3    Adding a method to a Constructor :

// function Person (first, last, age, eyeColor){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyeColor;
//     this.name = function (){
//         return this.firstName + " " + this.lastName
//     };
// }
// const myFather = new Person ("John", "Doe", 50, "blue");

// console.log("My father is " + myFather.name() + ".");


// JS Object Prototypes :

// Ex. 1 

// function Person (first, last, age, eye){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
// Person.prototype.nationality = "English";

// const myFather = new Person ("John", "Doe", 50, "blue");

// console.log("The nationality of my father is " + myFather.nationality + ".")


// Ex. 2 

function Person (first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.name = function(){
    return this.firstName + " " + this.lastName
};

const myFather = new Person ("John", "Doe", 50, "blue");

console.log("My Father is " + myFather.name() + ".")