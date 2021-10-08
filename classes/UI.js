class UI {
	tasks;
	alertMessage(message){
		const div = document.createElement('div');

		div.className = 'alert';

		const text = document.createTextNode(message);

		div.appendChild(text);

		const form = document.querySelector('#todoBox');

		form.appendChild(div);

		setTimeout(function (){
			document.querySelector(".alert").remove();
		}, 5000);
	}

	addTaskToTable(task){

		const t = document.createElement('p');
		const form = document.querySelector('#todoBox');
		t.appendChild(document.createTextNode(task));

		let delete_html = `
					<a class="x" id="${task}" onclick="deleteItem(this.id)">x</a>
						
		`;
		t.id = task + 'x'
		
		t.className = 'note';
		tasks.push(task);
		form.innerHTML += delete_html;
		form.appendChild(t);

	}
}