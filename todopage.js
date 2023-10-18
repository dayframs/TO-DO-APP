


function displayToDo() {
    let c = localStorage.getItem('val');
    let d = JSON.parse(c);

        for (let i = 0; i < d.length; i++) {
            resultB.innerHTML += d[i] + '<br>';
            console.log(resultB.innerHTML);
        }
    }

displayToDo()
    
// resultC.innerHTML = 'wash cloth';
// resultC.innerHTML += 'laundry';
// resultC.innerHTML += 'cook';