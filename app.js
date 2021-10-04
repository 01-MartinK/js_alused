// elemendi leidmine
const textField = document.querySelector("#textField");
const form = document.querySelector("#todoBox");
const button = document.querySelector("#addTask");

// reset text
textField.value = "New Note";

// submit
button.addEventListener('click', add);
textField.addEventListener('click', click);

// keyboard
//textField.addEventListener('keydown', runEvent);
//textField.addEventListener('keyup', runEvent);
// textField.addEventListener('keypress', runEvent);

// focusing and unfocusing
// textField.addEventListener('focus', runEvent);
// textField.addEventListener('blur', runEvent);

textField.addEventListener('cut', runEvent);
textField.addEventListener('paste', runEvent);
textField.addEventListener('input', runEvent);

function click(){
	textField.value = "";
}

function add(e){
	console.log(`Event type: ${e.type}`)
	const t = document.createElement('p');
	const x = document.createElement('a');
	t.appendChild(document.createTextNode(textField.value));
	textField.value = "New Note";
	x.value = 'x';
	t.className = 'note';
	x.className = 'x';
	form.appendChild(x);
	form.appendChild(t);
}

function runEvent(e){
	console.log(`Event type: ${e.type}`);
	// e.preventDefault();
}