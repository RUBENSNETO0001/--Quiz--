let ponto_db = 0;
let nome_db;
function IniciarQuizDB() {
  ponto_db = 0;
  nome_db = prompt("Digite seu nome ou nick:");

  if (nome_db === '') {
    alert("Coloque um nome!!");
    window.location.href = "./index.html";
  }

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
    },
    {
      pergunta: "Qual é o nome do planeta natal dos Saiyajins?",
      opcoes: ["Namekusei", "Terra", "Vegeta", "Kaiô"],
      resposta: "Vegeta"
    },
    {
      pergunta: "Quem foi o primeiro vilão de Dragon Ball Z?",
      opcoes: ["Freeza", "Cell", "Raditz", "Majin Buu"],
      resposta: "Raditz"
    },
    {
      pergunta: "Quem matou o Freeza pela primeira vez?",
      opcoes: ["Goku", "Vegeta", "Trunks do Futuro", "Gohan"],
      resposta: "Trunks do Futuro"
    },
    {
      pergunta: "Quem ensinou a técnica do Kamehameha para Goku?",
      opcoes: ["Kami Sama", "Kame", "Mestre Kame", "Mestre Karin"],
      resposta: "Mestre Kame"
    },
    {
      pergunta: "Qual é o nome do filho mais velho do Goku?",
      opcoes: ["Goten", "Gohan", "Trunks", "Pan"],
      resposta: "Gohan"
    },
    {
      pergunta: "Qual transformação Goku atinge primeiro em Dragon Ball Z?",
      opcoes: ["Super Saiyajin 2", "Super Saiyajin", "Kaioken", "Deus Super Saiyajin"],
      resposta: "Kaioken"
    },
    {
      pergunta: "Quem derrota Cell na saga Cell?",
      opcoes: ["Goku", "Vegeta", "Gohan", "Trunks"],
      resposta: "Gohan"
    },
    {
      pergunta: "Quem é o criador dos Androides 17 e 18?",
      opcoes: ["Freeza", "Dr. Gero", "Bulma", "Mestre Kame"],
      resposta: "Dr. Gero"
    }
  ];

  div_quiz.innerHTML = '';

  let resposta = document.createElement("div");
  resposta.id = 'div_campo';

  for (let i = 0; i < perguntas.length; i++) {
    resposta.innerHTML += `<div class='div_op'>
          <h2>${i + 1}.${perguntas[i].pergunta}</h2><br>
          <div id="btn_ops">
            ${perguntas[i].opcoes.map(opcao => `<button class="btn_escolha" onclick="verificarRespostadb('${opcao}', '${perguntas[i].resposta}')">${opcao}</button>`).join("")}
          </div>
      `;
    div_quiz.appendChild(resposta);
  }
  resposta.innerHTML += `<button id='btn_Finalizar' onclick = 'resposta_db()'>Vê Resultado</button>`;
}

function verificarRespostadb(x, y) {
  if (x === y) {
    alert("Você Acertou!!");
    ponto_db++;
  }
  else {
    alert("Você Errou!!");
  }
}

function resposta_db() {
  alert(`Senhor(a) sua pontuação é ${ponto_db}`);
  //pont criando um receptor
  let pont_db = JSON.parse(localStorage.getItem("DragonBall")) || [];
  //colocando os itens nele
  pont_db.push({ nome_dbb: nome_db, pontuacao_db: ponto_db });
  //jogando isso no localstrorage
  localStorage.setItem("DragonBall", JSON.stringify(pont_db));
  window.location.href = "./index.html";
}