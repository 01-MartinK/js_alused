let val;
const name = "Alex";
const surname = "Meknik";
const age = 20;
const text = "Be happy don't worry";
const tags = " arendus, opetatsioon, programmeerimine, mata";

// concatenation
val = name + " " + surname;

// append
val += " " + age + " aastat vana";

val += "\n" + text + " Minu tegevusalad on " + tags;

// while loop

let int = val.length;
while (int != 0){
	console.log(val[int]);
	int -= 1;
};

// suuruse vahetus
val = name.toUpperCase();
val = surname.toLowerCase();


val = surname[0];
val = surname.indexOf(0);

val = surname.charAt(2);
val = surname.charAt(surname.length - 1);

val = surname.substring(0, 4);
val = surname.slice(0, 4);
val = surname.slice(-3);

val = tags.split();
document.getElementById("demo").innerHTML = val;