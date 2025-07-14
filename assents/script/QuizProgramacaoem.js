let ponto_Pgjs = 0;
let nome_pgjs;

function IniciarQuizProgJS() {
  ponto_Pgjs = 0;
  nome_pgjs = prompt("Digite seu nome ou nick:");

  if (nome_pgjs === '') {
    alert("Coloque um nome!!");
    window.location.href = "./index.html";
  }

  const div_quiz = document.getElementById("quiz_js");

  document.getElementById("body_quizes").style.display = "none";
  document.getElementById("quiz_js").style.display = "block";

  const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      opcoes: ["int", "var", "define", "val"],
      resposta: "var"
    },
    {
      pergunta: "Qual desses tipos de dados não existe em JavaScript?",
      opcoes: ["number", "boolean", "float", "undefined"],
      resposta: "float"
    },
    {
      pergunta: "O que o método `push()` faz em um array?",
      opcoes: [
        "Remove o último item",
        "Adiciona um item no fim",
        "Ordena os itens",
        "Remove o primeiro item"
      ],
      resposta: "Adiciona um item no fim"
    },
    {
      pergunta: "Como se escreve um comentário de linha única em JavaScript?",
      opcoes: ["/<! -- comentário -- >", "// comentário", "/* comentário */", "** comentário **"],
      resposta: "// comentário"
    },
    {
      pergunta: "Qual operador é usado para comparar valor e tipo em JavaScript?",
      opcoes: ["==", "!=", "===", "=>"],
      resposta: "==="
    },
    {
      pergunta: "Qual função converte uma string em um número inteiro?",
      opcoes: ["parseFloat()", "toNumber()", "parseInt()", "Number()"],
      resposta: "parseInt()"
    },
    {
      pergunta: "Qual estrutura de controle permite repetir um bloco de código várias vezes?",
      opcoes: ["if", "for", "switch", "break"],
      resposta: "for"
    },
    {
      pergunta: "Qual é o escopo de uma variável declarada com `let`?",
      opcoes: ["Global", "Apenas dentro da função", "Bloco", "Arquivo inteiro"],
      resposta: "Bloco"
    },
    {
      pergunta: "Qual é o valor de `typeof null` em JavaScript?",
      opcoes: ["null", "undefined", "object", "boolean"],
      resposta: "object"
    },
    {
      pergunta: "Qual é a forma correta de declarar uma função?",
      opcoes: [
        "function = minhaFunc()",
        "func minhaFunc()",
        "function minhaFunc()",
        "def minhaFunc()"
      ],
      resposta: "function minhaFunc()"
    }
  ];

  div_quiz.innerHTML = '';

  let resposta = document.createElement("div");
  resposta.id = 'div_campo';

  for (let i = 0; i < perguntas.length; i++) {
    resposta.innerHTML += `<div class='div_op'>
          <h2>${i + 1}.${perguntas[i].pergunta}</h2><br>
          <div id="btn_ops">
            ${perguntas[i].opcoes.map(opcao => `<button class="btn_escolha" onclick="verificarRespostajs('${opcao}', '${perguntas[i].resposta}')">${opcao}</button>`).join("")}
          </div>
      `;
    div_quiz.appendChild(resposta);
  }
  resposta.innerHTML += `<button id='btn_Finalizar' onclick = 'resposta_pgdb()'>Vê Resultado</button>`;
}

function verificarRespostajs(x, y) {
  if (x === y) {
    alert("Você Acertou!!");
    ponto_Pgjs++;
  }
  else {
    alert("Você Errou!!");
  }
}

function resposta_pgdb() {
  alert(`Senhor(a) sua pontuação é ${ponto_Pgjs}`);
  //pont criando um receptor
  let pont_pgjss = JSON.parse(localStorage.getItem("ProgJs")) || [];

  //colocando os itens nele
  pont_pgjss.push({ nome_js: nome_pgjs, pontuacao_js: ponto_Pgjs });

  //jogando isso no localstrorage
  localStorage.setItem("ProgJS", JSON.stringify(pont_pgjss));
  window.location.href = "./index.html";
}