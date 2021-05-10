// Reference types:
// Objects, Arrays and functions

// OBJECTS
// Object in javascript is like an object in real life.
// Example: A person, has a name, age, adress etc
// These multiple related variables, we can put in an object:
// let name = "Malu";
// let age = "35";

// person object
let person = { // Outcome in between braces is 'Object Literal Sytax'   
    //  In between curly braces we add one or more key value pairs (properties) of the person object
    name: 'Malu' ,
    age: 35
    // name and age are 'key'
    // after = 'value'
};

// change the name of the person object in two ways:
// 1. Dot notation

person.name = 'Job';

// 2. Bracket notation
person['name'] = 'Mary';



// ARRAYS
// to store a list

let selectedColors = ['violet', 'aquamarine'];
selectedColors[2] = 'green';
// console.log(selectedColors[2]);
// Each element has an index, starting from 0
// Specify the index by putting the number in between []
// Length and type of objects in this array is dynamic, it can change
console.log(selectedColors.length);