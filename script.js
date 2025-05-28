// Função para gerar a tabuada
function gerarTabuada() {
    // Pega o valor digitado pelo usuário
    const numero = document.getElementById('numero').value;
    // Pega a área onde a tabuada será exibida
    const areaTabuada = document.getElementById('tabuada');
    
    // Verifica se o campo de número está vazio
    if (numero === "") {
        alert("Por favor, insira um número!");
        return;
    }

    // Variável para armazenar o resultado da tabuada
    let resultado = `<h2>Tabuada de ${numero}:</h2>`;
    
    // Laço para gerar a tabuada de 1 até 10
    for (let i = 1; i <= 10; i++) {
        resultado += `<p>${numero} x ${i} = ${numero * i}</p>`; // Adiciona cada linha da tabuada
    }
    
    // Exibe a tabuada gerada
    areaTabuada.innerHTML = resultado;
}
