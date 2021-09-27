const id = 101;

// == - vordub
// != - ei vordu
// <= - suurem
// >= - vaiksem
// === - vordub ja tuupikontroll
// !== - ei vordu ja tuubi kontroll

/*
let testID;

if (id > 100){
	console.log(`id on ${id} - suurem kui 100`);
}else if (id < 100) {
	console.log(`id on ${id} - vaiksem kui 100`);
}
*/

// if - else if - else

const color = "gold";

if (color === 'gold'){
	console.log("ready");
} else if (color === 'red'){
	console.log("stop");
} else if (color === 'green'){
	console.log("go");
} else{
	console.log("color not accepted");
}

for(let i = 0; i<320;i++){
	console.log("hello");
}

// and - &&
const name = "Kadi";
const age = 32;

if (age > 0 && age <= 12){
	console.log(`${name} on laps`);
} else if (age > 12 && age <= 18){
	console.log(`${name} on nooruk`);
} else {
	console.log(`${name} on taiskasvanu`);
}

// or - ||

if (age < 18 || age > 65){
	console.log(`${name} ei saa registeerida`)
} else {
	console.log(`${name} saab registeerida`)
}

// ? - ternary operaator

console.log(id === 100 ? 'oige' : 'vale')

// ilma {}

if (id === 50)
	console.log('On 50');
else
	console.log('Ei ole 50');