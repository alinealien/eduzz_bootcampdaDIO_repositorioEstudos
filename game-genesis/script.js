let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//criando ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]); //indice do array
        lightColor(elementColor, Number[i] + 1) 
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove('selected');

    });
}

//checa se os botoes clicados são os mesmos  da ordem gerada no jogo
//verificar se a ordem que clicamos é exatamente a mesma ordem do que o jogo nos deu

let checkOrder = () =>  {
for(let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
        gameOver();
        break;
    }
}
if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\nVoce acerto! Iniciando próximo nível!`);
    nextLevel();
}
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if ( color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocÊ perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}


//funcao incio do jogo
let playGame = () => {
    alert(`Bem Vindo ao Gênesis! Iniciar o jogo!`)
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//iniciando jogo
playGame();