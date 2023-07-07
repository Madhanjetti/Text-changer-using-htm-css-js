const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", ()=>{
    if(text.innerText === "The most Imp skills"){
        text.innerText = "Full stack web development";
    }
    else{
        text.innerText = "The most Imp skills";
    }
})