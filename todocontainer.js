const inputBox = document.getElementById("input-box");
const todoContainer = document.getElementById("todo-container");
// will show error when the user doesn't enter anything
function addTask(){
    if(inputBox.value === ''){
        alert("You need to add some task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todoContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveTask();
}
// add Event Listener to the button
todoContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}, false);
// user will be able to use the enter key instead of the button
inputBox.addEventListener("keyup", function(e){
    if (e.keyCode === 13){
      event.preventDefault();
      addTask();
    }
 } , false);
// save the task in html local storage 
function saveTask(){
    localStorage.setItem("task", todoContainer.innerHTML);
    console.log(localStorage);
}
// load the task from html local storage
function showTask(){
    todoContainer.innerHTML = localStorage.getItem("task");
    console.log(localStorage);
}
showTask();