function enviar() {
    const nome = document.getElementById("nome").value;
    
    const usuario = new Map();
    const pontos = 0;
    
    if (true) {
        document.getElementById("login").style.display = "none";
        document.getElementById("opcao_quiz").style.display = "block";
    }

    localStorage.setItem(`usuario`, JSON.stringify(Array.from(usuario.entries())));
    usuario.set({"nome": nome, "pontos": pontos});
}