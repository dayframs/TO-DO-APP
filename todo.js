// alert('hello');
// console.log('hello');

// function createToDo() {
//     console.log('hello');
//     resultA.innerText += 'To do list has been successfully updated';
//     todo.value = '';
// }



let array = [];
let a = resultA.innerHTML;

function createToDo() {
    let c = todo.value;
    if (c) {
    array.push(c);
    console.log(array);
    resultA.innerHTML = 'To do list has been successfully updated';
    localStorage.val = JSON.stringify(array);
    todo.value = '';
    } else {
        resultA.innerHTML = 'please fill in the box'
    } 
}

