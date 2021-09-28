let text = [];

function updateList(){
		document.getElementById("list").innerHTML = '';
		let html = '';
		let html2 = '';

		for(let i = 0; i < text.length; i++){
			html += `<li>${text[i]}</li>`;
			html2 += `
							<div class="contentbox3">
							<form id="${text[i]}form">
							<label>${text[i]}</label>
							<input type="button"	onclick="destroy('${text[i]}')" value="delete">
							<label>done</label>
							<input type="checkbox" text="done" value="done"><br>
							</form>
							</div>
							`;
		}

		document.getElementById("list").innerHTML = html;
		document.getElementById("raskemlist").innerHTML = html2;
		console.log(text);
}


function add(){
	let b = document.getElementById("textField").value;
	console.log(b);
	text.push(b);
	updateList();
}

function destroy(id){
	document.getElementById(id+"form").innerHTML = "";
}
