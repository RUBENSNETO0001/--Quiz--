// let pontos = 0;
// let nome;

// function IniciarQuizProgJS() {
//   pontos = 0;
//   nome = prompt("Digite seu nome ou nick:");

//   if(nome === ''){
//     alert("Coloque um nome!!");
//     window.location.href = "./index.html";
//   }

//   const div_quiz = document.getElementById("quiz_js");

//   document.getElementById("body_quizes").style.display = "none";
//   document.getElementById("quiz_js").style.display = "block";

//   const perguntas = [
//     {
//         pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
//         opcoes: ["int", "var", "define", "val"],
//         resposta: "var"
//       },
//       {
//         pergunta: "Qual desses tipos de dados não existe em JavaScript?",
//         opcoes: ["number", "boolean", "float", "undefined"],
//         resposta: "float"
//       },
//       {
//         pergunta: "O que o método `push()` faz em um array?",
//         opcoes: [
//           "Remove o último item",
//           "Adiciona um item no fim",
//           "Ordena os itens",
//           "Remove o primeiro item"
//         ],
//         resposta: "Adiciona um item no fim"
//       },
//       {
//         pergunta: "Como se escreve um comentário de linha única em JavaScript?",
//         opcoes: ["<!-- comentário -->", "// comentário", "/* comentário */", "** comentário **"],
//         resposta: "// comentário"
//       },
//       {
//         pergunta: "Qual operador é usado para comparar valor e tipo em JavaScript?",
//         opcoes: ["==", "!=", "===", "=>"],
//         resposta: "==="
//       },
//       {
//         pergunta: "Qual função converte uma string em um número inteiro?",
//         opcoes: ["parseFloat()", "toNumber()", "parseInt()", "Number()"],
//         resposta: "parseInt()"
//       },
//       {
//         pergunta: "Qual estrutura de controle permite repetir um bloco de código várias vezes?",
//         opcoes: ["if", "for", "switch", "break"],
//         resposta: "for"
//       },
//       {
//         pergunta: "Qual é o escopo de uma variável declarada com `let`?",
//         opcoes: ["Global", "Apenas dentro da função", "Bloco", "Arquivo inteiro"],
//         resposta: "Bloco"
//       },
//       {
//         pergunta: "Qual é o valor de `typeof null` em JavaScript?",
//         opcoes: ["null", "undefined", "object", "boolean"],
//         resposta: "object"
//       },
//       {
//         pergunta: "Qual é a forma correta de declarar uma função?",
//         opcoes: [
//           "function = minhaFunc()",
//           "func minhaFunc()",
//           "function minhaFunc()",
//           "def minhaFunc()"
//         ],
//         resposta: "function minhaFunc()"
//       }
//   ];

//   div_quiz.innerHTML = '';

//   let resposta = document.createElement("div");
//   resposta.id = 'div_campo';

//   for (let i = 0; i < perguntas.length; i++) {
//     resposta.innerHTML += `<div class='div_op'>
//           <h2>${i + 1}.${perguntas[i].pergunta}</h2><br>
//           <div id="btn_ops">
//             ${perguntas[i].opcoes.map(opcao => `<button class="btn_escolha" onclick="verificarResposta('${opcao}', '${perguntas[i].resposta}')">${opcao}</button>`).join("")}
//           </div>
//       `;
//     div_quiz.appendChild(resposta);
//   }
//   resposta.innerHTML += `<button id='btn_Finalizar' onclick = 'resposta()'>Vê Resultado</button>`;
// }

// function verificarResposta(x, y) {
//   if (x === y) {
//     alert("Você Acertou!!");
//     pontos++;
//   }
//   else {
//     alert("Você Errou!!");
//   }
// }

// function resposta() {
//   alert(`Senhor(a) sua pontuação é ${pontos}`);
//   //pont criando um receptor
//   let pont = JSON.parse(localStorage.getItem("ProgJs")) || [];
//   //colocando os itens nele
//   pont.push({Nome: nome, Pontuacao: pontos });
//   //jogando isso no localstrorage
//   localStorage.setItem("ProgJS", JSON.stringify(pont));
//   window.location.href = "./index.html";
// }

let pontos = 0;
let nome;
function IniciarQuizDB() {
  pontos = 0;
  nome = prompt("Digite seu nome ou nick:");

  if(nome === ''){
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
            ${perguntas[i].opcoes.map(opcao => `<button class="btn_escolha" onclick="verificarResposta('${opcao}', '${perguntas[i].resposta}')">${opcao}</button>`).join("")}
          </div>
      `;
    div_quiz.appendChild(resposta);
  }
  resposta.innerHTML += `<button id='btn_Finalizar' onclick = 'resposta()'>Vê Resultado</button>`;
}

function verificarResposta(x, y) {
  if (x === y) {
    alert("Você Acertou!!");
    pontos++;
  }
  else {
    alert("Você Errou!!");
  }
}

function resposta() {
  alert(`Senhor(a) sua pontuação é ${pontos}`);
  //pont criando um receptor
  let pont = JSON.parse(localStorage.getItem("DragonBall")) || [];
  //colocando os itens nele
  pont.push({Nome: nome, Pontuacao: pontos });
  //jogando isso no localstrorage
  localStorage.setItem("Pontução", JSON.stringify(pont));
  window.location.href = "./index.html";
}