let val;

val = document.getElementById("titel");
val = document.getElementById("titel").id;
val = document.getElementById("titel").className;

const taskTitle = document.getElementById("titel");

taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';

taskTitle.textContent = 'task list';

val = document.querySelector('#titel');
val = document.querySelector('.contentbox2');
val = document.querySelector('h2');

document.querySelector('p').style.background = 'red';

document.querySelector('h2:last-child').style.background = 'green';

console.log(val)
