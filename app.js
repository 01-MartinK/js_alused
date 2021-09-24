const person = {
	firstName: "Alex",
	lastName: "Mason",
	age: 72,
	email: "kadi.tamm@gmail.com",
	hobbies: ["muusika","sport"],
	address: {
		city: "Singapore",
		county: "Madagascar"
	},
	getBirthYear: function(){
		return 2021 - this.age;
	}
};

let val;

val = person;

val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address['city'];
val = person.getBirthYear();

const people = [
	{name: 'Kadi', age: 36},
	{name: 'Mati', age: 72},
	{name: 'Gerald', age: 16},
	{name: 'laura', age: 24}
];

val = people;

for(let i = 0; i < people.length; i++){
	console.log(people[i]);
};

console.log(val);