const name = "mk";
const age = 25;
const job = "student";
const city = "tartu";
const hobbies = ["programming","boxing","nature"];

let html = '<ul>' + 
				'<li>' + name + '</li>' + 
				'<li>' + age + '</li>' + 
				'<li>' + job + '</li>' + 
				'<li>' + city + '</li>' + 
				'<li>' + hobbies + '</li>' + 
			'</ul>';

console.log(html);

document.body.innerHTML += html;

// es6 - template string

html = `
	<ul>
		<li>Name: ${name}</li>
		<li>Age: ${age}</li>
		<li>Job: ${job}</li>
		<li>City: ${city}</li>
		<li>Hobbies: ${hobbies}</li>
	</ul>
	`;

console.log(html);

document.body.innerHTML += html;