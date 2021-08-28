const h1 = document.querySelector(".Hello h1");

function handleTitleClick(){
    h1.style.color = "blue";
}

function handelMouseEnter(){
    h1.innerText = "mouse is here!";
}

function handelMouseleave(){
    h1.innerText = "mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copy!");
}

function handelWindowOffline(){
    alert("network is offline");
}

function handelWindowOnline(){
    alert("network is online");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter",handelMouseEnter);
h1.addEventListener("mouseleave",handelMouseleave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handelWindowOffline);
window.addEventListener("online", handelWindowOnline);