function displayToDo() {
    let b = resultB.innerHTML;
    let c = localStorage.val;
    let d = JSON.parse(localStorage.val);
    for (let i = 0; i < val.length; i++){
        let sn = i + 1;
        resultB.innerHTML = sn + ' ' + val[i] + ' ' + '<br>';
    }
}

displayToDo();