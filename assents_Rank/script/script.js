function area_db() {
    let elemento_db = document.createElement("div");

    // Pega o item do localStorage e transforma em array/objeto
    let informacao = JSON.parse(localStorage.getItem("DragonBall")) || [];
    elemento_db.id = 'db_div';
    const div_principal_db = document.getElementById("rank_db");
    elemento_db.innerHTML = "<h1>Rank Dragon Ball</h1><br>";

    for (let i = 0; i < informacao.length; i++) {
        informacao.sort((a, b) => b.pontuacao_db - a.pontuacao_db);
        if (informacao.length > 0) {
            elemento_db.innerHTML += `
            <h3>Nome: ${informacao[i].nome_dbb} || Pontuação: ${informacao[i].pontuacao_db}</h3>
        `;
        }
        else {
            elemento_db.innerHTML += 'Sem informção';
        }

    }
    div_principal_db.appendChild(elemento_db);
}

function area_pgjs() {
    let elemento_db = document.createElement("div");

    // Pega o item do localStorage e transforma em array/objeto
    let informacao = JSON.parse(localStorage.getItem("ProgJS")) || [];

    const div_principal_db = document.getElementById("rank_js");
    elemento_db.innerHTML = "<h1>Rank Programação em JS</h1><br>";
    elemento_db.id = 'js_div';
    for (let i = 0; i < informacao.length; i++) {
        informacao.sort((a, b) => b.pontuacao_js - a.pontuacao_js);
        if (informacao.length > 0) {
            elemento_db.innerHTML += `
            <h3>Nome: ${informacao[i].nome_js} || Pontuação: ${informacao[i].pontuacao_js}</h3>
        `;
        }
        else {
            elemento_db.innerHTML += 'Sem informção';
        }

    }
    div_principal_db.appendChild(elemento_db);
}

function area_mr() {
    let elemento_db = document.createElement("div");

    // Pega o item do localStorage e transforma em array/objeto
    let informacao = JSON.parse(localStorage.getItem("Miranha")) || [];
    elemento_db.id = 'mr_div';
    const div_principal_db = document.getElementById("rank_mr");
    elemento_db.innerHTML = "<h1>Rank Sobre o Homem Aranha</h1><br>";

    for (let i = 0; i < informacao.length; i++) {
        informacao.sort((a, b) => b.pontuacao_js - a.pontuacao_js);
        if (informacao.length > 0) {
            elemento_db.innerHTML += `
            <h3>Nome: ${informacao[i].nome_mr} || Pontuação: ${informacao[i].pontuacao_mr}</h3>
        `;
        }
        else {
            elemento_db.innerHTML += 'Sem informção';
        }

    }
    div_principal_db.appendChild(elemento_db);
}

area_db();
area_pgjs();
area_mr();

function ir_paginaprincipal() {
    window.location.href = './index.html';
}