function saudacao(nomeJogador) {
  console.log("Bem Vindo ao jogo, " + nomeJogador + "!") 
}

saudacao("lucas");

//função que recebe um valor
function subirDeNivel(nivelatual) {
    return nivelatual +1;
}
  
let meunivel = 10;

let nivelatualizado = subirDeNivel(meunivel);

console.log(' seu novo nivel: ' + nivelatualizado);
