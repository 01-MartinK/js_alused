class UIManager {
	alertMessage(message){
		const bookContainer = document.querySelector("#bookContainer");

		const label = document.createElement('label');
		label.textContent = message;

		label.className = 'alert';

		bookContainer.appendChild(label);

		setTimeout(function (){
			document.querySelector(".alert").remove();
		}, 2500);
	}

	// Add book to list
	addBook(name,autor,code){
		const table = document.querySelector("#table");

		// new book object
		let b = new Book(name,autor,code);

		// html to insert to table
		let html = 
					`<tr>
						<th>${name}</th>
						<th>${autor}</th>
						<th>${code}</th>
						<th><a onclick="deleteBook(this)" id="${name}">X</a></th>
					</tr>`;
		table.innerHTML += html;
		books.push(b);

		// checking values
		console.log(b);
		console.log(books);
	} 
}