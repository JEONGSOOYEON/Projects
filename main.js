const inputDate = document.querySelector("#date");
const inputTime = document.querySelector("#time");
const inputText = document.querySelector("#text");
const submit = document.querySelector("#submit");

inputDate.value=new Date().toISOString().slice(0, 10);
inputTime.value=new Date().toTimeString().slice(0, 5);

let toDos = [];

function saveTodo(todoObj) {
    const todo = localStorage.setItem("todos", JSON.stringify(todoObj));
    const parsedtodo = JSON.parse(localStorage.getItem("todos"));
    toDos.push(JSON.stringify(parsedtodo));
    const alltodo = localStorage.setItem("allTodos", JSON.stringify(toDos));
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const todoObj = {
        'date': inputDate.value,
        'time': inputTime.value,
        'text': inputText.value
    }
    saveTodo(todoObj); 
}

submit.addEventListener("click", handleTodoSubmit);

console.log(toDos)