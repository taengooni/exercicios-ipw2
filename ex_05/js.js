
const valores = [];
function adicionarValor() {
    
    const valorInput = document.getElementById('valor').value;
    const valor = Number(valorInput);

    if (isNaN(valor) || valorInput === "") {
        alert('Por favor, insira um valor numérico válido!');
        return;
    }

    valores.push(valor);
    document.getElementById('valor').value = '';
    atualizarExibicao();
}

function atualizarExibicao() {
   
    document.getElementById('valores').textContent = valores.join(', ');
    const soma = valores.reduce((acc, num) => acc + num, 0);
    const media = soma / valores.length;

    
    document.getElementById('media').textContent = media.toFixed(2);
}
