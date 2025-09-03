let amigos = [];
let sorteados = [];

function adicionarAmigo(){

    const input = document.getElementById("amigo"); 
    const nome = input.value.trim();
    
    if (nome === ""){
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)){
        alert("Este nome já foi adicionado");
        return;
    }
    
    amigos.push(nome); 
    atualizarLista();
    input.value = "";
}

function atualizarLista(){
    
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Adicione pelo menos um amigo para sortear!");
    }

    if(sorteados.length === amigos.length){
        alert("Todos os amigos foram sorteados");
        return;
    }

    let amigoSorteado;
    do{
        const indice = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indice];  
    } while (sorteados.includes(amigoSorteado));

    sorteados.push(amigoSorteado);

   
    alert (`Amigo sorteado: ${amigoSorteado}`);
    
}

const input = document.getElementById("amigo");
input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        adicionarAmigo();
        event.preventDefault();
    }
});