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
        // let b = localStorage.val;
        // let d = JSON.parse(b);
        array.push(c);
        localStorage.val = JSON.stringify(array);
        // localStorage.val = 5;
        todo.value = '';
    } else {
        resultA.innerHTML = 'please fill in the box'
    } 
}
let q = { names: [] };
q.names.push('Taye', 'Kenny', 'Tolu');
q.names = ['Jide'];
alert(q.names);

// let r = 5;
// r = 10;
// alert(r);
