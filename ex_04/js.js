function transformarEmJSON() {
    // Obtém os valores dos campos
    const mat = document.getElementById('mat').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const idade = document.getElementById('idade').value.trim();
    const cpf = document.getElementById('cpf').value.trim();


    if (!mat || !nome || !idade || !cpf) {
        alert('Todos os campos devem ser preenchidos!');
        return;
    }

   
    if (!Number.isInteger(Number(idade)) || Number(idade) <= 0) {
        alert('A idade deve ser um número inteiro positivo!');
        return;
    }

 
    const aluno = {
        matricula: mat,
        nome: nome,
        idade: parseInt(idade), 
        cpf: cpf
    };


    document.getElementById('resultado').textContent = JSON.stringify(aluno, null, 4);
}
