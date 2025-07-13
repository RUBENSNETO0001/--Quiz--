function area_db() {
    let elemento_db = document.createElement("div");

    // Pega o item do localStorage e transforma em array/objeto
    let informacao = JSON.parse(localStorage.getItem("DragonBall")) || [];

    const div_principal_db = document.getElementById("rank_db");
    elemento_db.innerHTML = "<h1>Rank Dragon Ball</h1><br><br>";

    for (let i = 0; i < informacao.length; i++) {
        elemento_db.innerHTML += `
            <h3>Nome: ${informacao[i].nome} || Pontuação: ${informacao[i].pontuacao}<h3>
        `;
    }
    div_principal_db.appendChild(elemento_db);
}
area_db();