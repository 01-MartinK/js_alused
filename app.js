let val;

const today = new Date();

val = today.getMonth(); // starts at january 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

let birthday = new Date('9-27-2001 11:00:00');

console.log(birthday);
console.log(today);
console.log(val);