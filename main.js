const inputDate = document.querySelector("#date");
const inputTime = document.querySelector("#time");
const inputText = document.querySelector("#text");
const submit = document.querySelector("#submit");
const get = document.querySelector("#getBtn");

inputDate.value=new Date().toISOString().slice(0, 10);
inputTime.value=new Date().toISOString().slice(11, 16);


function alertContents(event) {
    alert(localStorage.getItem('date'));
    alert(localStorage.getItem('time'));
    alert(localStorage.getItem('text'));
}

function saveContents(event) {
    savedDate = localStorage.setItem('date', inputDate.value);
    savedTime = localStorage.setItem('time', inputTime.value);
    savedText = localStorage.setItem('text', inputText.value);
}

submit.addEventListener("click", saveContents);

get.addEventListener("click", alertContents);