const inputDate = document.querySelector("#date");
const inputTime = document.querySelector("#time");
const inputText = document.querySelector("#text");
const submit = document.querySelector("#submit");

inputDate.value=new Date().toISOString().slice(0, 10);
inputTime.value=new Date().toTimeString().slice(0, 5);

let toDos = [];

function saveTodos(todoObj) {
    localStorage.setItem("todos", JSON.stringify(todoObj));
    toDos.push(todoObj)
    console.log(toDos)
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const todoObj = {
        'date': inputDate.value,
        'time': inputTime.value,
        'text': inputText.value
    }
    inputText.value = "";
    saveTodos(todoObj); 
}

submit.addEventListener("click", handleTodoSubmit);