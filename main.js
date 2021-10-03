const inputDate = document.querySelector("#date");
const inputTime = document.querySelector("#time");
const inputText = document.querySelector("#text");
const submit = document.querySelector("#submit");

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();
const hrs = new Date().getHours();
const min = new Date().getMinutes();

const YMD = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;
const HM = `${hrs < 10 ? `0${hrs}` : hrs}:${min < 10 ? `0${min}` : min}`;

inputDate.value = new Date().toISOString().slice(0, 10);
inputTime.value = new Date().toTimeString().slice(0, 5);

let toDos = [];

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
const parsedToDos = JSON.parse(savedToDos);
let dateToDos = [];
    for (let i = 0; i < parsedToDos.length; i++) {
        if (parsedToDos[i].date === YMD &&
            parsedToDos[i].time === HM) {
            dateToDos.push(parsedToDos[i]);
            let result = dateToDos.map((dateToDo) => dateToDo.text);
            alert(result);
        }
    }









