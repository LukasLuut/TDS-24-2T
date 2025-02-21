/*Escreva o programa do chapéu seletor que recebe a aluna e imprima no console a
sua casa de Hogwarts:*/
/*
let aluna=prompt("Digite o nome da aluna?")
console.log(
    'Hermione\nAna\nLuna\nNarcisa'
)

switch(aluna.toLocaleLowerCase){
    case 'hermione':
        console.log('sua casa é GRIFINÓRIA')
        break;
    case 'ana':
        console.log('sua casa é LUFA-LUFA')
        break;
    case 'luna':
        console.log('sua casa é CORVINAL')
        break;
    case 'narcisa':
        console.log('sua casa é SONSERINA')
        break;    
}

/*Uma pessoa pode estudar em uma faculdade se:

● Tiver concluído o ensino médio;
● Tiver 18 anos ou mais;
● Não estiver cursando outra faculdade;*//*

let aluno={idade:0,ensinoM:'',outroCurso:''}

aluno.idade=Number(prompt('qual sua idade?'))
aluno.ensinoM=Number(prompt("você já concluíu o esino médio?\n[1]-SIM\n[2]-NÃO"))
aluno.outroCurso=Number(prompt("você está cursando outra faculdade?\n[1]-SIM\n[2]-NÃO"))

if(aluno.idade>=18||aluno.ensinoM===1||aluno.outroCurso===2){
    alert('Você pode pode estudar nessa faculdade!!')
}
else{alert('você não tem os requesitos necessários para estudar nessa faculdade')}


/*Crie um jogo de "Pedra, Papel, Tesoura, Lagarto, Spock" no qual o usuário
escolhe uma das opções, e o computador escolhe aleatoriamente outra. Utilize
um switch-case para determinar o vencedor.
O jogo segue estas regras:Pedra esmaga Tesoura. Pedra esmaga Lagarto.Papel
cobre Pedra. Papel desqualifica Spock.Tesoura corta Papel. Tesoura decapita
Lagarto. Lagarto envenena Spock. Lagarto come Papel.Spock vaporiza Pedra.
Spock quebra Tesoura.*/


let inimigo = Math.floor(Math.random()*5)
// console.log(inimigo)

let jogador = prompt('Escolha entre Pedra, Papel, Tesoura, Lagarto ou Spock')
console.log(`Você escolheu ${jogador}`)

switch (inimigo) {
  case 0:
    console.log('Seu inimigo escolheu Tesoura')
    break

  case 1: 
    console.log('Seu inimigo escolheu Papel')
    break

  case 2:
    console.log('Seu inimigo escolheu Pedra')
    break

  case 3:
    console.log('Seu inimigo escolheu Lagarto')
    break

  case 4: 
  console.log('Seu inimigo escolheu Spock')
  break
}

if(jogador.toLowerCase() === 'pedra' && inimigo===0) {
  console.log('Pedra amassa Tesoura, você ganhou!!')
} else if(jogador.toLowerCase() === 'pedra' && inimigo===1) {
  console.log('Papel enrola Pedra, você perdeu!!')
} else if(jogador.toLowerCase()=== 'pedra' && inimigo===2) {
  console.log('Pedra empata com pedra, vocês empataram!!')
} else if(jogador.toLowerCase() === 'pedra' && inimigo===3) {
  console.log('Pedra esmaga lagarto, você ganhou!')
} else if (jogador.toLowerCase() ==='pedra' && inimigo===4) {
  console.log('Spock vaporiza pedra, você perdeu!')
}

if(jogador.toLowerCase() === 'tesoura' && inimigo===0) {
  console.log('Tesoura não corta tesoura, vocês empataram!!')
} else if(jogador.toLowerCase() === 'tesoura' && inimigo===1) {
  console.log('Tesoura corta papel, você ganhou!!')
} else if(jogador.toLowerCase()=== 'tesoura' && inimigo===2) {
  console.log('Pedra amassa tesoura, você perdeu!!')
} else if(jogador.toLowerCase()=== 'tesoura' && inimigo===3) {
  console.log('Tesoura decapita lagarto, você ganhou!')
} else if(jogador.toLowerCase() === 'tesoura' && inimigo===4) {
  console.log('Spock derrete tesoura, você perdeu!')
}

if(jogador.toLowerCase() === 'papel' && inimigo===0) {
  console.log('Tesoura corta papel, você perdeu!!')
} else if(jogador.toLowerCase() === 'papel' && inimigo===1) {
  console.log('Papel não enrola papel, vocês empataram!!')
} else if(jogador.toLowerCase()=== 'papel' && inimigo===2) {
  console.log('Papel enrola pedra, você ganhou!!')
} else if(jogador.toLowerCase()=== 'papel'&&inimigo===3) {
  console.log('Lagarto come papel, você perdeu!')
} else if(jogador.toLowerCase()==='papel'&& inimigo===4) {
  console.log('Papel refuta Spock, você ganhou!')
}
  
if(jogador.toLowerCase() === 'lagarto' && inimigo===0) {
  console.log('Tesoura decapita lagarto, você perdeu!!')
} else if(jogador.toLowerCase() === 'lagarto' && inimigo===1) {
  console.log('Lagarto come papel, você ganhou!!')
} else if(jogador.toLowerCase()=== 'lagarto' && inimigo===2) {
  console.log('Pedra esmaga lagarto, você perdeu!!')
} else if(jogador.toLowerCase()=== 'lagarto'&&inimigo===3) {
  console.log('Lagarto não ganha de lagarto, vocês empataram!')
} else if(jogador.toLowerCase()==='lagarto'&& inimigo===4) {
  console.log('Lagarto envenena Spock, você ganhou!')
}

if(jogador.toLowerCase() === 'spock' && inimigo===0) {
  console.log('Spock derrete tesoura, você ganhou!!')
} else if(jogador.toLowerCase() === 'spock' && inimigo===1) {
  console.log('Papel refuta Spock, você perdeu!!')
} else if(jogador.toLowerCase()=== 'spock' && inimigo===2) {
  console.log('Spock vaporiza pedra, você ganhou!!')
} else if(jogador.toLowerCase()=== 'spock' && inimigo===3) {
  console.log('Lagarto envenena Spock, você perdeu!')
} else if(jogador.toLowerCase() === 'spock' && inimigo===4) {
  console.log('Spock argumenta com Spock, vocês empataram!')
}