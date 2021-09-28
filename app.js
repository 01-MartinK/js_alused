function add(){
	let b = document.getElementById("textField").value;
	let html = `
							<label>${b}</label>
							<button type="button" id="${b}" onclick="delete(${b})">Kustuta</button>
							<input type="checkbox">tehtud</button><br>
								`;
	console.log(b);
	document.getElementById("raskemlist").innerHTML += html+'<br>';
	document.getElementById("list").innerHTML += `<li>${b}</li>`;
}
