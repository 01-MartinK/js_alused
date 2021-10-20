let books = [];

const nameValueHolder = document.querySelector("#nameInput");
const autorValueHolder = document.querySelector("#autorInput");
const codeHolder = document.querySelector("#codeInput");
const submitBtn = document.querySelector("#btn")

const saveManager = new storageManager;
const UI = new UIManager;

startLoad()

function arrayRemove(arr, value) { 

    return arr.filter(function(ele){ 
        return ele.name != value; 
    });
}

function submitBook(){
    console.log("submitted");
    UI.alertMessage("Submitted Book");
    UI.addBook(nameValueHolder.value,autorValueHolder.value,codeHolder.value);
    saveBooks();
} 

// saving the books to local storage
function saveBooks(){
    saveManager.saveAttributes(books);
}  

// deleting a book
function deleteBook(deletable){
    const table = document.querySelector("#table");

    table.removeChild(deletable.parentElement.parentElement.parentElement);
    books = arrayRemove(books, deletable.id);
    saveBooks();
    UI.alertMessage("Deleted a Book");
}

function startLoad(){
    let list = saveManager.getAttributes("books");
    for(let i = 0;i<list.length;i++)
    {
        UI.addBook(list[i].name, list[i].author, list[i].code);
    } 
    books = list;
    console.log(books);
    UI.alertMessage("Loaded Library");
}