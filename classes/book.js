class Book{
    constructor(name, author, code) {
        this.name = name;
        this.author = author;
        this.code = code;
      }
    getName(){
        return this.name;
    }  
    getAuthor(){
        return this.author;
    } 
    getCode(){
        return this.code;
    } 

    setName(value){
        this.name = value;
    }  
    setAuthor(value){
        this.author = value;
    } 
    setCode(value){
        this.code = value;
    } 
}  