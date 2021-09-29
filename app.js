let val;

val = document.querySelectorAll('p');

const oddP = document.querySelectorAll('p:nth-child(odd)');

const evenP = document.querySelectorAll('p:nth-child(even)');

oddP.forEach(function(li){
	li.style.background = "#999999";
});

console.log(val);
