const inputDate = document.querySelector("#date");
const inputTime = document.querySelector("#time");
const inputText = document.querySelector("#text");
const submit = document.querySelector("#submit");
const get = document.querySelector("#getBtn");

inputDate.value=new Date().toISOString().slice(0, 10);
inputTime.value=new Date().toISOString().slice(11, 16);

function alertContents(event) {
    const date = localStorage.getItem('date');
    const time = localStorage.getItem('time');
    const text = localStorage.getItem('text');
    let contents = [date, time, text];
    alert(contents);
}

function saveContents(event) {
    localStorage.setItem('date', inputDate.value);
    localStorage.setItem('time', inputTime.value);
    localStorage.setItem('text', inputText.value);
}

submit.addEventListener("click", saveContents);

get.addEventListener("click", alertContents);