// for tsukkel

for (let i = 0;i < 10;i++){
	if (i == 5){
		break;
	}
	console.log(i);
}

// while tsukkel

console.log("while tsukkel");

let i = 5;

while (i != 0){
	console.log(i+" while");
	i--;
}

console.log();

// do while

let j = 0;

do {
	console.log("do "+j);
	j++;
} while(j < 10);

console.log();

// tsuklid ja massiivid
const cars = ['audi','bugatti','ford','mitsubishi']

for (car in cars){
	console.log(cars[car]);
}

console.log();

// for each - callback function
cars.forEach(function(car, index, array){
	console.log(`cars[${index}] = ${car}`);
	console.log(array);
});

console.log();

// for each - (arrow) => function
cars.forEach((car, index, array) => {
	console.log(`cars[${index}] = ${car}`);
	console.log(array);
});

console.log();

// tsuklid ja objektid

const person = {
	firstname: "Kadi",
	surname: "Tamm",
	age: 25
}

// for in tsukkel
for (let key in person){
	console.log(`${key} = ${person[key]}`);
}
