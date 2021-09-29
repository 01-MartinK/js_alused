let val;

const list = document.querySelector('div');
const listItem = document.querySelector('p:first-child')

val = list;
val = listItem;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

val = list.children;
val = list.children[1];
//list.children[1].textContent = 'study xml';

val = list.children[1].children[0].children;
list.children[1].children[0].id = "test-id";

val = list.firstChild;
val = list.firstElementChild;

val = list.LastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);