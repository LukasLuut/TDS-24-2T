/*a) Quais números serão
impressos no console e
por que apenas esses
números serão exibidos?*/


/*
let matriz=[
    [1,2],[3,4],[5,6,7]
]

let pares=[]

matriz.forEach((linha, i)=>{
    linha.forEach((_,j)=>{
        if(matriz[i][j]%2===0){//verifica se o número é divisivel por 2
            pares.push(matriz[i][j])//apresenta no console os números pares
        }
    })
})

console.log(pares.reverse())
*/


//-------------------------------------------------------------------------------
/*1. Crie uma matriz 5x5 que representa um mapa de jogo com
diferentes tipos de terreno. Cada célula pode ter um valor
aleatório entre 0 e 2, onde: 0 representa "grama", 1 representa
"água", 2 representa "montanha".
Depois, imprima o mapa no console de forma organizada.*/

/*
let mapa=[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
]

mapa.forEach((linha,i)=>{
    linha.forEach((_,j)=>{
        mapa[i][j]=Math.floor(Math.random() *3)
    })
})

console.table(mapa)
*/


//-----------------------------------------------------------------------------------
/*2. Dada uma matriz 2D representando as pontuações de 3
jogadores em 4 rodadas (matriz[3][4]), escreva um código que
calcule a pontuação total de cada jogador e imprima os
resultados.*/

/*
let matriz=[
    [0,1,2,3,4],
    [0,1,2,3,4],
    [0,1,2,3,4],
]

let resultadoJogador1=0
let resultadoJogador2=0
let resultadoJogador3=0

matriz[0].forEach((indice)=>{resultadoJogador1+=indice})
matriz[1].forEach((indice)=>{resultadoJogador2+=indice})
matriz[2].forEach((indice)=>{resultadoJogador3+=indice})

console.log(resultadoJogador1,resultadoJogador2,resultadoJogador3)*/



//-------------------------------------------------------------------------------------
/*{Desafio - Jurassic Park}

1. Desenvolva um sistema que simula a organização de uma ilha cheia de
dinossauros, como em Jurassic Park. A ilha é representada por uma matriz 10x10,
onde cada célula é um quadrado da ilha e pode ter diferentes tipos de terreno ou
dinossauros.
a) Crie uma função que irá gerar uma matriz 10x10 onde cada célula tem um valor
aleatório. Use os seguintes códigos para definir o conteúdo de cada célula:
0: "grama"; 1: "água"; 2: "floresta"; 3: "carnívoro"; 4: "herbívoro"
b)Após gerar a ilha, faça uma função que recebe a direção que os dinossauros irão
se mover (cima, baixo, esquerda, direita) Ex.: const movimentos = [[-1, 0], // cima[1,
0], // baixo[0, -1], // esquerda[0, 1] // direita ];
Dica: Verifique se a posição está dentro dos limites da ilha. Depois de de mover o dinossauro
transforme a posição da ilha em grama.

c) Após as movimentações, exiba a ilha e mostre a contagem de
dinossauros restantes na ilha.*/

let carnivoro='\u{1F996}'
let herbivoro='\u{1F995}'
let montanha1='\u{1F30B}'
let montanha2='\u{1F5FB}'
let agua='\u{1F30A}'
let floresta1='\u{1F332}'
let floresta2='\u{1F334}'
let floresta3='\u{1F335}'
let grama='🟩'


let tabuleiro=[
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,]
]

//função para decidir a posição dos navios de forma aleatória
function posicaoMapa(matriz){
    matriz.forEach((linha,i)=> {
        linha.forEach((_,j)=>{
        tabuleiro[i][j]= Math.floor(Math.random() *5)
        })
        
    });
}
posicaoMapa(tabuleiro)

tabuleiro.forEach((linha,i)=>{
    linha.forEach((_,j)=>{
        if(tabuleiro[i][j]===0){
            tabuleiro[i][j]=montanha2
        }

        else if(tabuleiro[i][j]===1){
            tabuleiro[i][j]=agua
                
        }
        if(tabuleiro[i][j]===2){
            let floresta=Math.floor(Math.random() *3)
            switch(floresta){
                case 0:
                    tabuleiro[i][j]=floresta1
                break
                case 1:
                    tabuleiro[i][j]=floresta2
                break
                case 2:
                    tabuleiro[i][j]=floresta3
                break
            }
        }
        else if(tabuleiro[i][j]===3){
            let dino=Math.floor(Math.random() *2)
            switch(dino){
                case 0:
                    tabuleiro[i][j]=carnivoro
                    break
                    case 1:
                        tabuleiro[i][j]=herbivoro
                        break
            }
            
        }
        else if(tabuleiro[i][j]===4){
            let grama=Math.floor(Math.random() *2)
            switch(grama){
                case 0:
                    tabuleiro[i][j]=floresta1
                    break
                case 1:
                    tabuleiro[i][j]=floresta2
                    break
            }
            
            
        }
    })
})

console.table(tabuleiro)

function subir(matriz,i,j){

}