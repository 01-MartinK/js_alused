class storageManager {
	saveAttributes(attributes) {
		let saveAbleObjects = attributes;

		localStorage.setItem('books', JSON.stringify(saveAbleObjects));
	}
	getAttributes(attributes_name) {
		let loadableObjects;

		if (localStorage.getItem(attributes_name) !== null){
			loadableObjects = JSON.parse(localStorage.getItem(attributes_name));
		}else{
			loadableObjects = [];
		}

		return loadableObjects;
	}
}