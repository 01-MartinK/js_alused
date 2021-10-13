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

// remove value from array
function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

// get stuff and readd objects
function reorder(){
	form.innerHTML = "";
	tasks = [];

	const ls = new storageManager();

	b = ls.getAttributes('tasks');

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

// add event
function add(e){
	console.log(`Event type: ${e.type}`)
	addItem(textField.value);
	textField.value = "New Note";
}

// Item finding
function findTask(){
	console.log(textField.value);
	let b = textField.value;
	for (let i = 0;i<tasks.length;i++){
		if (tasks[i] == b){
			document.querySelector(`#${b+'x'}`).style.border = "1px solid red";
		}else{
			document.querySelector(`#${tasks[i]+'x'}`).style.border = "none";
		}
	}
}

// Item adding
function addItem(name){
	// create new ui object
    const ui = new UI();
    // create new Local Storage object
    const ls = new storageManager();

    if (name === '') {
        ui.alertMessage("Add task data!", "problem");
    } else {
        // add task object data to html list
        ui.addTaskToTable(name);
        // save task data to Local Storage
        ls.saveAttributes(tasks);
        // show ok alert messege
        ui.alertMessage("Added task to todo-list!", "ok");
    }
}

// Item deletion
function deleteItem(elementID){
	const ls = new storageManager();

	if(confirm('!Do you want to delete this item!')){
		tasks = arrayRemove(tasks, elementID);
		form.removeChild(document.getElementById(elementID));
		form.removeChild(document.getElementById(elementID+'x'));
		ls.saveAttributes(tasks);
		//document.getElementById(elementID+'x').innerHTML = "";
	}
}

// clear todo list
function clearList(){
	const ls = new storageManager();

	form.innerHTML = "";
	tasks = [];
	ls.saveAttributes(tasks);
}

// load list
function loadList(){
	console.log(tasks);
	reorder();
}

// run event
function runEvent(e){
	console.log(`Event type: ${e.type}`);
	// e.preventDefault();
}

// log tasks
console.log(tasks);