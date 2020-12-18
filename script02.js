const conteiner = document.querySelector('div#conteiner');

let elementoBotao = document.querySelector('div#conteiner #botao');

const criarQuadrado = () => {
    //CRIA A DIV
    let criaQuadrado = document.createElement('div');

    criaQuadrado.setAttribute('id', 'quadrado');

    criaQuadrado.style.backgroundColor='#FA4148';
    criaQuadrado.style.width = 100;
    criaQuadrado.style.height = 100;

    conteiner.appendChild(criaQuadrado);

    console.log('criado001');
}

elementoBotao.onclick = function() {
    criarQuadrado();
}

