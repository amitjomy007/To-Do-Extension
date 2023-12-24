document.getElementById("add-el").addEventListener("click",  addTask );

var rows = [];
var str = "";

function addEventListenerToAllDeleteButtons(arr){
    for (let i = 0 ; i< arr.length ; i++){
        document.getElementById(`delete-${i}th`).addEventListener("click", function DeleteAndUpdate() {
            arr.splice(i,1);               
            updateinnerHTML();
        });
    }
}

function addTask() {
    
    var task = document.getElementById("task-input-el").value;
    var date = document.getElementById("date-input-el").value;
    rows.push([task,date]);
    renderHTML(rows);
    document.getElementById("container-El").innerHTML = str;   //these three lines maybe replaced
    addEventListenerToAllDeleteButtons(rows);                  // with updateinnerHTML() function.
}

function updateinnerHTML() {
    renderHTML(rows);
    document.getElementById("container-El").innerHTML = str;
    addEventListenerToAllDeleteButtons(rows);
    
}

function renderHTML(arr) {
    str = "";
    for (var i = 0 ; i < arr.length ; i++){
        task = arr[i][0];
        date = arr[i][1];
        str += `
                    <div class="Lcolumn column">${task}</div>
                    <div class="Mcolumn column">${date}</div>
                    <button class="Rcolumn column" id = "delete-${i}th">Delete</button>
                `;
    }
}