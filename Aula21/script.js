/*a) Quais números serão
impressos no console e
por que apenas esses
números serão exibidos?*/

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



//-------------------------------------------------------------------------------
/*1. Crie uma matriz 5x5 que representa um mapa de jogo com
diferentes tipos de terreno. Cada célula pode ter um valor
aleatório entre 0 e 2, onde: 0 representa "grama", 1 representa
"água", 2 representa "montanha".
Depois, imprima o mapa no console de forma organizada.*/

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

console.log(mapa)

