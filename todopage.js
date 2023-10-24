


// function displayToDo() {
//     let c = localStorage.getItem('val');
//     let d = JSON.parse(c);

//         for (let i = 0; i < d.length; i++) {
//             resultB.innerHTML += d[i] + '<br>';
//             console.log(resultB.innerHTML);
//         }
//     }

// displayToDo()
    
// resultC.innerHTML = 'wash cloth';
// resultC.innerHTML += 'laundry';
// resultC.innerHTML += 'cook';

function displayBook() {
    let bookC = localStorage.getItem('books');
    let bookD = JSON.parse(bookC);
    for (let i = 0; i < bookD.length; i++)
    { 
        bookB.innerHTML += eval(i + 1) + ' ' + bookD[i].name + ' ' + bookD[i].title + ' ' + bookD[i].isbn + '<br>';
        console.log(bookB.innerHTML);
    }
}

displayBook();
