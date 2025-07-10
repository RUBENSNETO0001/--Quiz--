function IniciarQuizDB(){
    let nome = prompt("Digite seu nome ou nick:");
    
    document.getElementById("body_quizes").style.display = "none";
    document.getElementById("quiz_db").style.display = "block";

    const perguntas = (
        {
        pergunta: "Qual é o verdadeiro nome do Goku?",
        opcoes: ["Vegeta", "Kakarotto", "Raditz", "Bardock"],
        resposta: "Kakarotto"
      },
      {
        pergunta: "Quantas Esferas do Dragão existem?",
        opcoes: ["5", "6", "7", "8"],
        resposta: "7"
      }
    )

    for(let i = 0; i < perguntas.length; i++){
        let resposta = document.getElementById('btnResposta');

       const perguntaAtual = perguntas[i];
  
  // Exibe a pergunta no HTML
  document.getElementById('Pergunta').innerText = perguntaAtual.pergunta;
    }

}


// const usuario = new Map();
// const pontos = 0;

// usuario.set({ "nome": nome, "pontos": pontos });