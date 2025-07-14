let ponto_miranha = 0;
let nome_miranha;

function IniciarQuizMiranha() {
    ponto_miranha = 0;
    nome_miranha = prompt("Digite seu nome ou nick:");

    if (nome_db === '' || nome_db === null) {
        alert("Coloque um nome!!");
        window.location.href = "./index.html";
    }

    const div_quiz = document.getElementById("quiz_js");

    document.getElementById("body_quizes").style.display = "none";
    document.getElementById("quiz_mr").style.display = "block";

    const perguntas = [
        {
            pergunta: "Qual é o nome verdadeiro do Homem-Aranha?",
            opcoes: ["Peter Parker", "Bruce Wayne", "Clark Kent", "Miles Morales"],
            resposta: "Peter Parker"
        },
        {
            pergunta: "Quem é o tio de Peter Parker que disse a famosa frase 'Com grandes poderes vêm grandes responsabilidades'?",
            opcoes: ["Tio Ben", "Tio Sam", "Tio Tony", "Tio Joe"],
            resposta: "Tio Ben"
        },
        {
            pergunta: "Qual é o nome da primeira namorada de Peter Parker nos quadrinhos?",
            opcoes: ["Gwen Stacy", "Mary Jane", "Felicia Hardy", "Jessica Jones"],
            resposta: "Gwen Stacy"
        },
        {
            pergunta: "Qual é o nome do jornal onde Peter trabalha como fotógrafo?",
            opcoes: ["Daily Planet", "Daily Bugle", "New York Times", "Bugle News"],
            resposta: "Daily Bugle"
        },
        {
            pergunta: "Qual vilão é conhecido por usar tentáculos mecânicos?",
            opcoes: ["Duende Verde", "Venom", "Dr. Octopus", "Homem-Areia"],
            resposta: "Dr. Octopus"
        },
        {
            pergunta: "Quem é o editor-chefe ranzinza do jornal em que Peter trabalha?",
            opcoes: ["J. Jonah Jameson", "Norman Osborn", "Harry Osborn", "Otto Octavius"],
            resposta: "J. Jonah Jameson"
        },
        {
            pergunta: "Qual é o nome do simbionte alienígena que se funde com Peter e depois com Eddie Brock?",
            opcoes: ["Carnificina", "Venom", "Simby", "Anti-Venom"],
            resposta: "Venom"
        },
        {
            pergunta: "Em qual cidade se passam a maioria das histórias do Homem-Aranha?",
            opcoes: ["Gotham City", "Nova York", "Metropolis", "Chicago"],
            resposta: "Nova York"
        },
        {
            pergunta: "Qual ator interpretou o Homem-Aranha na trilogia dirigida por Sam Raimi?",
            opcoes: ["Andrew Garfield", "Tom Holland", "Tobey Maguire", "Nicolas Cage"],
            resposta: "Tobey Maguire"
        },
        {
            pergunta: "Quem é o Homem-Aranha do universo alternativo em 'Aranhaverso'?",
            opcoes: ["Peter Parker", "Ben Reilly", "Miles Morales", "Miguel O'Hara"],
            resposta: "Miles Morales"
        }
    ];

    div_quiz.innerHTML = '';

    let resposta = document.createElement("div");
    resposta.id = 'div_campo';

    for (let i = 0; i < perguntas.length; i++) {
        resposta.innerHTML += `<div class='div_op'>
          <h2>${i + 1}.${perguntas[i].pergunta}</h2><br>
          <div id="btn_ops">
            ${perguntas[i].opcoes.map(opcao => `<button class="btn_escolha" onclick="verificarRespostamr('${opcao}', '${perguntas[i].resposta}')">${opcao}</button>`).join("")}
          </div>
      `;
        div_quiz.appendChild(resposta);
    }
    resposta.innerHTML += `<button id='btn_Finalizar' onclick = 'resposta_mr()'>Vê Resultado</button>`;
}

function verificarRespostamr(x, y) {
    if (x === y) {
        alert("Você Acertou!!");
        ponto_miranha++;
    }
    else { alert("Você Errou!!"); }
}

function resposta_mr() {
    alert(`Senhor(a) sua pontuação é ${ponto_miranha}`);
    //pont criando um receptor
    let pont_miranha = JSON.parse(localStorage.getItem("Miranha")) || [];
    //colocando os itens nele
    pont_miranha.push({ nome_mr: nome_miranha, pontuacao_mr: ponto_miranha });
    //jogando isso no localstrorage
    localStorage.setItem("Miranha", JSON.stringify(pont_miranha));
    window.location.href = "./index.html";
}