// Andmetüübid

// Primitiivid

// String - tekst
const name = "MK";
console.log(typeof name);

// Number
const age = 72;
console.log(typeof age);

// Float
const percent = 32.3;
console.log(typeof percent);

// Boolean
const has_kids = false;
console.log(typeof has_kids);

// Null
const airplane = null;
console.log(typeof airplane);

// Undefined
let test;
console.log(typeof test);

// Char
const char = Symbol();
console.log(typeof char);

// Objects - referance types - tüübid, mille sisu saab viide kaudu
// Array - massiiv
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

// Object
const person = {
	name: "kadi",
	age: 15
};
console.log(typeof person);

// näiteks kuupäev objekt
const today = new Date();
console.log(typeof today);
console.log(today.getHours());