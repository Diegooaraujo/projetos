let slider = document.querySelector("#slider");
let button = document.querySelector("#button");
let valor = document.querySelector("#valor");
let senha = document.querySelector ("#password");
let conteinerSenha = document.querySelector("#conteiner-password");

let charset ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
let novaSenha = "";

valor.innerHTML = slider.value;

slider.oninput = function(){
    valor.innerHTML = this.value;
}
function gerarSenha(){
    let pass = ""
    for (let i = 0, n = charset.length; i < slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    conteinerSenha.classList.remove("hide")
    senha.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){

    navigator.clipboard.writeText(novaSenha)
    alert("senha copiada!")
    
}