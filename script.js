const estrela_1 = document.getElementById("estrela-1");
const estrela_2 = document.getElementById("estrela-2");
const estrela_3 = document.getElementById("estrela-3");
const estrela_4 = document.getElementById("estrela-4");
const estrela_5 = document.getElementById("estrela-5");
const botao = document.getElementById("botao");
const estrelaCheia = "./images/estrela_cheia.svg";
const estrelaVazia = "./images/estrela_vazia.svg";

function pintaEstrela(elemento) {
  if (elemento === estrela_1) {
    despintaEstrelas();
    estrela_1.setAttribute("src", estrelaCheia);
  } else if (elemento === estrela_2) {
    pintaEstrela(estrela_1);
    estrela_2.setAttribute("src", estrelaCheia);
  } else if (elemento === estrela_3) {
    pintaEstrela(estrela_2);
    estrela_3.setAttribute("src", estrelaCheia);
  } else if (elemento === estrela_4) {
    pintaEstrela(estrela_3);
    estrela_4.setAttribute("src", estrelaCheia);
  } else if (elemento === estrela_5) {
    pintaEstrela(estrela_4);
    estrela_5.setAttribute("src", estrelaCheia);
  }
}

function despintaEstrelas() {
  estrela_2.setAttribute("src", estrelaVazia);
  estrela_3.setAttribute("src", estrelaVazia);
  estrela_4.setAttribute("src", estrelaVazia);
  estrela_5.setAttribute("src", estrelaVazia);
  desbloqueiaBotao();
}

function desbloqueiaBotao() {
  botao.disabled = false;
  botao.classList.add("habilitado");
}
