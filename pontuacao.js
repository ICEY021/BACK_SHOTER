//sistema de pontuação de um jogo
const nomeJogador = "Elisa";
let faseatual = 3;
let vidasrestantes = 2;

let pontosPorMissao = [85, 90, 60, 100];

//pontosPorMissao.length
let pontuacaototal = 0;

for (let i = 0; i < pontuacoes.length; i++) {
    pontuacaototal = pontuacaototal + pontuacoes[i]
}

//calculando a méida
let media = pontuacaototal / pontuacoes.length;

let passouDeFase = (media >= 75 && vidas > 0) || (fase === 1);

console.log(`Seja bem vinda ${nomeJogador}`  );
console.log(pontosPorMissao);