let pontos = 0;

function IniciarQuizDB() {
  pontos = 0;
  let nome = prompt("Digite seu nome ou nick:");
  const div_quiz = document.getElementById("quiz_db");

  document.getElementById("body_quizes").style.display = "none";
  document.getElementById("quiz_db").style.display = "block";

  const perguntas = [
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
  ];

  div_quiz.innerHTML = '';

  let resposta = document.createElement("div");

  for (let i = 0; i < perguntas.length; i++) {
    resposta.innerHTML += `<div class='div_op'>
          <h2>${perguntas[i].pergunta}</h2>
          ${perguntas[i].opcoes.map(opcao => `<button onclick="verificarResposta('${opcao}', '${perguntas[i].resposta}')">${opcao}</button>`).join("")}
      `;
      div_quiz.appendChild(resposta);
  }
}

function verificador(x, y) {
  if (x === y) {
    alert("Você Acertou!!");
    pontos++;
  }
  else {
    alert("Você Errou!!");
  }
}

