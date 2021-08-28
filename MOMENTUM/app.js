const h1 = document.querySelector(".Hello h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newcolor = "tomato";
    }
    else{
        newcolor = "blue";
    }
    h1.style.color = newcolor;    
}

h1.addEventListener("click", handleTitleClick);