
let array = [];

function createToDo() {
    let c = todo.value;
    if (c) {
    
    console.log(array);
        resultA.innerHTML = 'To do list has been successfully updated';
        array.push(c);
        localStorage.val = JSON.stringify(array);
        todo.value = '';
    } else {
        resultA.innerHTML = 'please fill in the box'
    } 
}



let myArray =  JSON.parse(localStorage.getItem('books')) || [];

function addBook() {
    let a = nameBook.value;
    let b = titleBook.value;
    let c = Math.ceil(Math.random() * 10000);
    let book = {
        name: a,
        title: b,
        isbn: c
    };
    myArray.push(book);
    localStorage.books = JSON.stringify(myArray);
    nameBook.value = '';
    titleBook.value = '';
    console.log(localStorage.books);
    }
    
