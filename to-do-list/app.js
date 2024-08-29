let input = document.getElementById('task');
let btn = document.getElementById('btn');
let list = document.getElementById('list');
let delbtn = document.getElementById('del');

// Event listener for the 'Add Task' button
btn.addEventListener('click', function() {
    // Extracting value
    let task = input.value;
    // Creating a new li element
    let newele = document.createElement('li');
    // Setting the task inside the li element
    newele.innerText = task;
    // Appending the new li element to the todo list
    list.appendChild(newele);
    // Setting input value back to empty
    input.value = '';
});

// Event listener for the 'Delete Task' button
list.addEventListener('click', function(e) {
    e.target.remove();
})

 
// Optional: Allow adding tasks by pressing the 'Enter' key
const inputField = document.getElementById('task');
const addButton = document.getElementById('btn');
inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addButton.click();
    }
});
