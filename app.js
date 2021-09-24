const person = {
	firstName: "Alex",
	lastName: "Mason",
	age: 72,
	email: "kadi.tamm@gmail.com",
	hobbies: ["muusika","sport"],
	address: {
		city: "Singapore",
		county: "Madagascar"
	}
};

let val;

val = person;

val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address['city'];

console.log(val);