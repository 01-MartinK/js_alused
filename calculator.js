// Numbrid
let first_number = 0
let second_number = 0

// Liida
function liida(){
	first_number = parseInt(document.getElementById("fnumber").value);
	second_number = parseInt(document.getElementById("lnumber").value);
	let b = first_number + second_number;
	document.getElementById("vastus").innerHTML = "Vastus = " + String(b);
};

// Lahuta
function lahuta(){
	first_number = parseInt(document.getElementById("fnumber").value);
	second_number = parseInt(document.getElementById("lnumber").value);
	let b = first_number - second_number;
	document.getElementById("vastus").innerHTML = "Vastus = " + String(b);
};

// Korruta
function korruta(){
	first_number = parseInt(document.getElementById("fnumber").value);
	second_number = parseInt(document.getElementById("lnumber").value);
	let b = first_number * second_number;
	document.getElementById("vastus").innerHTML = "Vastus = " + String(b);
};

// Jaga
function jaga(){
	first_number = parseInt(document.getElementById("fnumber").value);
	second_number = parseInt(document.getElementById("lnumber").value);
	let b = first_number / second_number;
	document.getElementById("vastus").innerHTML = "Vastus = " + String(b);
};
