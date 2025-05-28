let valor = 0;
let limite = 0;
let intervalo = null;

const exibicao = document.getElementById("exibicao-valor");
const entrada = document.getElementById("entrada-limite");
const botaoComecar = document.getElementById("botao-comecar");
const botaoParar = document.getElementById("botao-parar");

botaoComecar.onclick = () => {
  if (intervalo) return;

  limite = parseInt(entrada.value);
  if (isNaN(limite) || limite < 1) {
    alert("Digite um número válido para o limite.");
    return;
  }

  valor = 0;
  exibicao.textContent = valor;

  intervalo = setInterval(() => {
    valor++;
    if (valor > limite) {
      clearInterval(intervalo);
      intervalo = null;
    } else {
      exibicao.textContent = valor;
    }
  }, 300);
};

botaoParar.onclick = () => {
  clearInterval(intervalo);
  intervalo = null;
};
