class storageManager {
	saveAttributes(attributes) {
		
		let tasks = attributes;

		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	getAttributes(attributes_name) {
		let tasks;

		if (localStorage.getItem(attributes_name) !== null){
			tasks = JSON.parse(localStorage.getItem(attributes_name));
		}else{
			tasks = [];
		}

		return tasks;
	}
}