function enviar(){
    const nome = document.getElementById("nome").value;

    const usuario = new Map();
    
    for(let i of numeros)
    usuario.set(nome,0);

    console.log(usuario);
}