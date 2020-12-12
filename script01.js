//REFERENCIA DIV CONTEINER
const conteiner = document.querySelector('#conteiner');

let elementoTexto = document.querySelector('#texto');
let elementoBotao = document.querySelector('#botao');

const criaElemento = (valorTexto) => {
    let divCriador = document.createElement('div');
    let textoP = document.createTextNode(valorTexto);

    divCriador.setAttribute('id', 'divCriador');

    divCriador.appendChild(textoP);

    conteiner.appendChild(divCriador);

}

elementoBotao.onclick = function() {
    let valorTexto = elementoTexto.value;
    criaElemento(valorTexto);
}