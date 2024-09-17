function separarLetras() {
    const palavra = document.getElementById("palavra").value;
    const resultadoDiv = document.getElementById("resultado");

    // Limpa o conteúdo anterior
    resultadoDiv.innerHTML = '';

    // Verifica se há alguma palavra digitada
    if (palavra.trim() === '') {
        alert("Por favor, digite uma palavra!");
        return;
    }

    // Itera sobre cada letra da palavra
    for (let letra of palavra) {
        const letraDiv = document.createElement("div");
        letraDiv.className = "letra";
        letraDiv.textContent = letra;
        resultadoDiv.appendChild(letraDiv);
    }
}
