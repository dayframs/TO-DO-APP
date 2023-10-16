


function displayToDo() {
    let c = localStorage.getItem('val');
    let d = JSON.parse(c);

        for (let i = 0; i < localStorage.length; i++) {
            resultB.innerHTML = d;
            console.log(resultB.innerHTML);
        }
    }

displayToDo();