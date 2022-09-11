/*
const loginForm = document.querySelector("#login-from");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmited(event){
    event.preventDefault();
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    //greeting.innerText = "Hello! "+ username;
    paintGreetings(username);
}

function paintGreetings(username){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello! ${username}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",loginSubmited);
} else {
    paintGreetings(savedUsername);
};