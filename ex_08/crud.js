Parse.initialize("GnERFAypR3KhiS6jHtdXThlFVbOFU5mXW6wMY9pp", "0HC4HfkKaHdkVEFhjuRXdz7m9ENaZnH8GdMsU95t");
Parse.serverURL = 'https://parseapi.back4app.com';

async function addExpense() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (!descricao || isNaN(valor)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const Despesa = Parse.Object.extend("Despesas");
    const despesa = new Despesa();

    despesa.set("descricao", descricao);
    despesa.set("valor", valor);

    try {
        await despesa.save();
        alert("Despesa adicionada com sucesso!");
        loadExpenses(); 
    } catch (error) {
        console.error("Erro ao adicionar despesa:", error); // Mover para dentro do catch
    }
}

async function loadExpenses() {
    const Despesa = Parse.Object.extend("Despesas");
    const query = new Parse.Query(Despesa);

    try {
        const results = await query.find();
        const tbody = document.getElementById('despesasTable');
        tbody.innerHTML = ""; 

        let total = 0;

        results.forEach((despesa) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${despesa.get("descricao")}</td>
                <td>R$ ${despesa.get("valor").toFixed(2)}</td>
                <td>
                    <button onclick="updateExpense('${despesa.id}', ${despesa.get("valor")})">Atualizar</button>
                    <button onclick="deleteExpense('${despesa.id}')">Deletar</button>
                </td>
            `;
            tbody.appendChild(tr);

            total += despesa.get("valor");
        });

        document.getElementById('totalDespesas').textContent = `Total: R$ ${total.toFixed(2)}`;
    } catch (error) {
        console.error("Erro ao carregar despesas:", error);
    }
}

async function updateExpense(id, valorAtual) {
    const novoValor = parseFloat(prompt("Informe o novo valor:", valorAtual));

    if (isNaN(novoValor)) {
        alert("Por favor, informe um valor numérico.");
        return;
    }

    const Despesa = Parse.Object.extend("Despesas");
    const query = new Parse.Query(Despesa);

    try {
        const despesa = await query.get(id);
        despesa.set("valor", novoValor);
        await despesa.save();
        alert("Despesa atualizada com sucesso!");
        loadExpenses(); 
    } catch (error) {
        console.error("Erro ao atualizar despesa:", error);
    }
}

async function deleteExpense(id) {
    const Despesa = Parse.Object.extend("Despesas");
    const query = new Parse.Query(Despesa);

    try {
        const despesa = await query.get(id);
        await despesa.destroy();
        alert("Despesa excluída com sucesso!");
        loadExpenses(); 
    } catch (error) {
        console.error("Erro ao excluir despesa:", error);
    }
}

// Carregar despesas ao abrir a página
window.onload = loadExpenses;