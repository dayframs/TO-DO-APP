function displayToDo() {
    let b = resultB.innerHTML;
    let c = localStorage.val;
    let d = JSON.parse(localStorage.val);
    resultB.innerHTML = d;
}

displayToDo();