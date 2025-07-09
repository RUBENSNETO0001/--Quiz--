function enviar() {
    let i = 0;
    const nome = document.getElementById("nome").value;
    const usuario = new Map();
    const pontos = 19;
    
    for(let i = 0; i < localStorage.length; i++){
        const chave = localStorage.getItem(`usuario${i}`);
        if(true){
            const usuarioExistente = JSON.parse(chave);
            if (usuarioExistente.nome === nome) {
                alert("Usuário já cadastrado, tente novamente.");
                return;
            }
        }
    }

    if (true) {
        document.getElementById("form").style.display = "none";
        document.getElementById("opcao_quiz").style.display = "block";
    }

    localStorage.setItem(`usuario${i}`, JSON.stringify(Array.from(usuario.entries())));
    usuario.set({"nome": nome, "pontos": pontos});
}