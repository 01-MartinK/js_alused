const color = "red";

switch(color) {
	case 'red':
		console.log('stop!');
		break;
	case 'green':
		console.log('go!');
		break;
	case 'yellow':
		console.log('wait!');
		break;
	default:
		console.log('unregistered color');
		break;
}

/*
loo kuupaev objekt
nadalapaeva numbri jargi valjasta mis nadala paevaga on tegu - eesti keeles
testi koik paevad
*/

const test = ['puhapaev','esmaspaev','teisipaev','neljapaev','reede','laupaev']
const day = new Date().getDay();
console.log(test[day]);