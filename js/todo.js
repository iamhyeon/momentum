const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_kEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_kEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentNode;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
};

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const btn = document.createElement("button");
    btn.innerText="❎";
    btn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
    btn.classList.add("button")
};

function toDoSubmit(event){
    event.preventDefault();
    const newTodo =toDoInput.value;
    toDoInput.value="";
    const newToDoObj ={
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
};

toDoForm.addEventListener("submit",toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_kEY);

if (savedToDos){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}