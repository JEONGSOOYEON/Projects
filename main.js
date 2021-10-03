const inputDate = document.querySelector("#date");
const inputTime = document.querySelector("#time");
const inputText = document.querySelector("#text");
const submit = document.querySelector("#submit");

let toDos = [];

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();
const hrs = new Date().getHours();
const min = new Date().getMinutes();

const YMD = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;
const HM = `${hrs < 10 ? `0${hrs}` : hrs}:${min < 10 ? `0${min}` : min}`;

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const todoObj = {
        'date': inputDate.value,
        'time': inputTime.value,
        'text': inputText.value
    }
    toDos.push(todoObj);
    inputText.value = "";
    saveTodos(); 
}

submit.addEventListener("click", handleTodoSubmit);

const savedToDos = localStorage.getItem("todos");
const parsedToDos = JSON.parse(savedToDos)
let toDoDate = [];
    for (let i = 0; i < parsedToDos.length; i++) {
        if (parsedToDos[i].date === YMD &&
            parsedToDos[i].time === HM) {
            toDoDate.push(parsedToDos[i]);
        }
    }

console.log(toDoDate)






