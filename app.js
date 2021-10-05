let tasks = [];

// elemendi leidmine
const textField = document.querySelector("#textField");
const form = document.querySelector("#todoBox");
const button = document.querySelector("#addTask");
const findButton = document.querySelector("#findTask");
const clearButton = document.querySelector("#clearTasks");

// reset text
textField.value = "New Note";

// listeners
button.addEventListener('click', add);
findButton.addEventListener('click', findTask);
clearButton.addEventListener('click', clearList);
textField.addEventListener('click', click);

//textField.addEventListener('blur', loseFocus);


reorder()

function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }


function reorder(){
	clearList();
	let b = JSON.parse(localStorage.getItem("tasks"));
	//tasks = b;

	for (let i = 0;i<b.length;i++){
		addItem(b[i]);
	}
	
}


function click(){
	textField.value = "";
}

/*
function loseFocus(){
	//textField.value = "New Note";
}
*/

function add(e){
	console.log(`Event type: ${e.type}`)
	addItem(textField.value);
	textField.value = "New Note";
}

function findTask(){
	console.log(textField.value + "x");
	let b = textField.value + "x"
	document.querySelector(`#${b}`).style.border = "1px solid red";
}

function addItem(name){
	const t = document.createElement('p');
	t.appendChild(document.createTextNode(name));

	let delete_html = `
				<a class="x" id="${name}" onclick="deleteItem(this.id)">x</a>
					
	`;
	t.id = name + 'x'
	
	t.className = 'note';
	tasks.push(name);
	form.innerHTML += delete_html;
	form.appendChild(t);
}

function deleteItem(elementID){
	if(confirm('!Do you want to delete this item')){
		tasks = arrayRemove(tasks, elementID);
		form.removeChild(document.getElementById(elementID));
		form.removeChild(document.getElementById(elementID+'x'));
		//document.getElementById(elementID+'x').innerHTML = "";
	}
}

function clearList(){
	form.innerHTML = "";
	tasks = [];
}

function saveList(){
	console.log(tasks);
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadList(){
	console.log(tasks);
	reorder();
}


function runEvent(e){
	console.log(`Event type: ${e.type}`);
	// e.preventDefault();
}

console.log(tasks);