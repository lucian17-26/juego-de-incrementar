const restar = document.getElementById("Btn-1");
const restablecer = document.getElementById('Btn-2');
const sumar = document.getElementById('Btn-3');
const valor = document.getElementById('valor');

//funcion que resta 1 al contador 
restar.addEventListener("click", () => {
    valor.innerText --;
    if(valor.innerText < 0){
        valor.style.color = "red";
    }else if (valor.innerText >= 0){
        valor.style.color = "black";
    }
})
//funcion que suma 1 al contador
sumar.addEventListener("click", () => {
    valor.innerText ++;
    if(valor.innerText >= 0){
        valor.style.color = "black";
    }else if(valor.innerText < 0){
        valor.style.color = "red";
    }
})
//funcion que restablece el contador a 0
restablecer.addEventListener("click", () =>{
    valor.innerText = 0;
    valor.style.color= "black";
})





