let jogadorAtual = "X";

function jogar(celula) {
  if (celula.textContent === "") {
    celula.textContent = jogadorAtual;
    if(jogadorAtual == "X") {
      jogadorAtual = "O";
    } else {
      jogadorAtual = "X";      
    }
  }
}