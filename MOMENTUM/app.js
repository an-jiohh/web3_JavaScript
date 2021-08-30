const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeing = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function handleLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username",username);
    greeing.innerText = `Hello ${username}`; //"Hello " + username;(don't use '', "")//
    greeing.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLoginSubmit);