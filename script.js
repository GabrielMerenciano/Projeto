const addTarefa = document.getElementById("addTarefa");
const lista = document.getElementById("lista");


function adicionar() {
    if(addTarefa.value === '') {
        alert("Escreva algo");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = addTarefa.value;
        lista.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    addTarefa.value = "";
    salvar();
}


lista.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        salvar();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        salvar();
    }
}, false);


function salvar(){
    localStorage.setItem("data", lista.innerHTML);
}
function mostrarTarefa(){
    lista.innerHTML =localStorage.getItem("data");
}
mostrarTarefa();




