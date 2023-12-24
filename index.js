document.getElementById("userName-load-el").addEventListener("click", loadPage);



function loadPage() {
    var user = document.getElementById("userName-el").value;
    document.getElementById("user-page").innerHTML = `
    <p>Let's be productive ${user}!</p>   
            
    <div id="input-div" class = "input-grid">
        <input id = "task-input-el" class = "Lcolumn column input" type="text" placeholder="Enter your Task">
        <input id = "date-input-el" class = "Mcolumn column input" type = "datetime-local">
        <button id = "add-el" class = "Rcolumn column add">Add</button>
    </div> 
    
    <div id = "container-El" class = "container todo-grid "></div>`
    LoadPagePower();


    function LoadPagePower() {
        document.getElementById("add-el").addEventListener("click",  addTask );
        var rows = JSON.parse(localStorage.getItem(`${user}rows`)) || [] ;
        var str = "";
        updateinnerHTML();
    
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
            document.getElementById("container-El").innerHTML = str;   //these four lines maybe replaced
            addEventListenerToAllDeleteButtons(rows);                  // with updateinnerHTML() function.
            localStorage.setItem(`${user}rows`, JSON.stringify(rows))
        }
    
        function updateinnerHTML() {
            renderHTML(rows);
            document.getElementById("container-El").innerHTML = str;
            addEventListenerToAllDeleteButtons(rows);
            localStorage.setItem(`${user}rows`, JSON.stringify(rows))
            
        }
    
        function renderHTML(arr) {
            str = "";
            for (var i = 0 ; i < arr.length ; i++){
                task = arr[i][0];
                date = arr[i][1];
                str += `
                            <div class="Lcolumn1 column">${task}</div>
                            <div class="Mcolumn column">${date}</div>
                            <button class="Rcolumn column delete" id = "delete-${i}th">Delete</button>
                        `;
            }
        }
    }
    
    
    
}

