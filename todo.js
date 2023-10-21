// alert('hello');
// console.log('hello');

// function createToDo() {
//     console.log('hello');
//     resultA.innerText += 'To do list has been successfully updated';
//     todo.value = '';
// }



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
let q = { names: [] };
q.names.push('Taye', 'Kenny', 'Tolu');
// q.names = ['Jide'];
// alert(q.names);

// let r = 5;
// r = 10;
// alert(r);

let myArray = [];

function addBook() {
    let a = nameBook.value;
    let b = titleBook.value;
    let c = Math.ceil(Math.random() * 10000);
    let book = {
        name: a,
        title: b,
        isbn: c
    };
    localStorage.book = JSON.stringify(myArray);
    myArray.push(book);
    nameBook.value = '';
    titleBook.value = '';
    console.log(localStorage.book);
    }
    
