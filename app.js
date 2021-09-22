let val;

// number -> string
val = String(555);
val = String(4+4);
val = String(5.6);

// number -> boolean
val = Boolean(0); // false
val = Boolean(1); // true

// boolean -> string
val = String(true);
val = String(false);

// objekt -> string
val = String(new Date());

// massiiv -> string
val = String([1, 2, 3, 4]);



console.log(typeof val);
console.log(val);
