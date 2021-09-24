const numbers = [43, 62, 213, 43, 54, 56, 1, 23];
const numbers2 = new Array(22,765,43,21,12);
const fruits = ['apple','pair','banana','dragonfruit']
const mixed = [22, 'tere', true, undefined, null, {a:1,v:2}, new Date()];

let val;

val = numbers.indexOf(1); // leidmine indexi vaartuse elemendi kaudu
numbers2[4] = 62; // elemendi muutmine

numbers2.push(72);
numbers2.unshift(54);
numbers2.pop();
numbers2.shift();
console.log(numbers2);

//numbers2.splice(1,3); loikamine

//numbers2.reverse(); umberpooramine

let kokku = numbers.concat(numbers2); // massiivide liitmine

console.log(kokku);
console.log(Array.isArray(numbers2)); // massiivi kontrollimine
console.log(numbers);

// massiivi sorteerimine
numbers2.sort(function(x, y){ 
	return y - x;
});

// String massiivi sorteerimine
console.log(fruits.sort());

console.log(numbers2);
console.log(val);