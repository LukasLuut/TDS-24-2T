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
let montanha='\u{1F5FB}'
let agua='\u{1F30A}'
let floresta='\u{1F332}'
let floresta2='\u{1F334}'
let floresta3='\u{1F335}'
let folha='\u{1F343}'
let osso='\u{1F9B4}'


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

let pontos={herbivoros:0,carnivoros:0}
//função para decidir a posição dos elementos de forma aleatória
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
            tabuleiro[i][j]=montanha
        }

        else if(tabuleiro[i][j]===1){
            tabuleiro[i][j]=agua
                
        }
        if(tabuleiro[i][j]===2||tabuleiro[i][j]===4){
            tabuleiro[i][j]=floresta
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
    })
})

console.table(tabuleiro)

function subir(matriz){
    for(let i=1;i<matriz.length;i++){//deve impedir que o movimento saia para fora do limite da matriz
        
        for (let j = 0; j < matriz[i].length; j++) {
            
            //se a posição for carnívoro ou herbívoro| deve mover apenas os dinossauros
            if(matriz[i][j]===carnivoro||matriz[i][j]===herbivoro){

                //se a posição que será movido não for montanha ou água, deve mover
                if(matriz[i-1][j]!==montanha&&matriz[i-1][j]!==agua){
                    
                    //acho que pode ter ficado redundante esse IF junto do IF a cima que verifica carnivoros e herbivoros
                    if(matriz[i][j]===carnivoro){
                       
                        //verifica se a posição que será ocupada é um herbivoro
                        if( matriz[i-1][j]===herbivoro){
                           
                            //se sim, substitui pelo carnívoro e deixa um osso para trás 
                            matriz[i-1][j]=carnivoro
                            matriz[i][j]=osso
                            pontos.carnivoros+=10                            
                        }
                        //se houver floresta ou folha ou osso, avança 
                        else if(matriz[i-1][j]===floresta){
                            matriz[i-1][j]=carnivoro
                            matriz[i][j]=floresta
                        }
                        else if(matriz[i-1][j]===folha){
                            matriz[i-1][j]=carnivoro
                            matriz[i][j]=folha
                        }
                        else if(matriz[i-1][j]===osso){
                            matriz[i-1][j]=carnivoro
                            matriz[i][j]=osso
                        }
                        else if(matriz[i-1][j]===carnivoro){
                            matriz[i-1][j]=carnivoro
                            matriz[i][j]=osso
                            pontos.carnivoros+=10
                        }
                    }
                    //se o herbívoro for para casa do carnívoro, ele morre 
                    else if(matriz[i][j]===herbivoro){
                        if(matriz[i-1][j]===carnivoro){
                        matriz[i][j]=osso
                        pontos.carnivoros+=10  
                        }
                        
                        
                        //se ele for para uma floresta, ele come e deixa uma folha
                        else if(matriz[i-1][j]===floresta){
                            matriz[i-1][j]=herbivoro
                            matriz[i][j]=folha
                            pontos.herbivoros+=10
                        }
                        else if(matriz[i-1][j]===osso){
                            matriz[i-1][j]=herbivoro
                            matriz[i][j]=osso
                        }
                        else if(matriz[i-1][j]===folha){
                            matriz[i-1][j]=herbivoro
                            matriz[i][j]=folha
                        }
                    }
                }
                
            }
            
        }
    }
    console.clear()
    console.table(tabuleiro)
    console.log(`%cPONTOS:\nHerbívoros: ${pontos.herbivoros}\nCarnívoros: ${pontos.carnivoros}`,'Font-size:15px') 
}

function descer(matriz){
    for (let i = matriz.length - 2; i >= 0; i--) {//deve impedir que o movimento saia para fora do limite da matriz
        
        for (let j = 0; j < matriz[i].length; j++) {
            
            //se a posição for carnívoro ou herbívoro| deve mover apenas os dinossauros
            if(matriz[i][j]===carnivoro||matriz[i][j]===herbivoro){

                //se a posição que será movido não for montanha ou água, deve mover
                if(matriz[i+1][j]!==montanha&&matriz[i+1][j]!==agua){
                    
                    //acho que pode ter ficado redundante esse IF junto do IF a cima que verifica carnivoros e herbivoros
                    if(matriz[i][j]===carnivoro){
                       
                        //verifica se a posição que será ocupada é um herbivoro
                        if( matriz[i+1][j]===herbivoro){
                           
                            //se sim, substitui pelo carnívoro e deixa um osso para trás 
                            matriz[i+1][j]=carnivoro
                            matriz[i][j]=osso
                            pontos.carnivoros+=10                            
                        }
                        //se houver floresta ou folha ou osso, avança 
                        else if(matriz[i+1][j]===floresta){
                            matriz[i+1][j]=carnivoro
                            matriz[i][j]=floresta
                        }
                        else if(matriz[i+1][j]===folha){
                            matriz[i+1][j]=carnivoro
                            matriz[i][j]=folha
                        }
                        else if(matriz[i+1][j]===osso){
                            matriz[i+1][j]=carnivoro
                            matriz[i][j]=osso
                        }
                        else if(matriz[i+1][j]===carnivoro){
                            matriz[i+1][j]=carnivoro
                            matriz[i][j]=osso
                            pontos.carnivoros+=10
                        }
                    }
                    //se o herbívoro for para casa do carnívoro, ele morre 
                    else if(matriz[i][j]===herbivoro){
                        if(matriz[i+1][j]===carnivoro){
                        matriz[i][j]=osso
                        pontos.carnivoros+=10}
                        
                        //se ele for para uma floresta, ele come e deixa uma folha
                        else if(matriz[i+1][j]===floresta){
                            matriz[i+1][j]=herbivoro
                            matriz[i][j]=folha
                            pontos.herbivoros+=10
                        }
                        else if(matriz[i+1][j]===osso){
                            matriz[i+1][j]=herbivoro
                            matriz[i][j]=osso
                        }
                        else if(matriz[i+1][j]===folha){
                            matriz[i+1][j]=herbivoro
                            matriz[i][j]=folha
                        }
                    }
                }
                
            }
            
        }
    }
    console.clear()
    console.table(tabuleiro)
    console.log(`%cPONTOS:\nHerbívoros: ${pontos.herbivoros}\nCarnívoros: ${pontos.carnivoros}`,'Font-size:15px') 
}

function esquerda(matriz){
    for (let i = 0; i < matriz.length; i++) {//deve impedir que o movimento saia para fora do limite da matriz
        
        for (let j = 1; j < matriz[i].length; j++) {
            
            //se a posição for carnívoro ou herbívoro| deve mover apenas os dinossauros
            if(matriz[i][j]===carnivoro||matriz[i][j]===herbivoro){

                //se a posição que será movido não for montanha ou água, deve mover
                if(matriz[i][j-1]!==montanha&&matriz[i][j-1]!==agua){
                    
                    //acho que pode ter ficado redundante esse IF junto do IF a cima que verifica carnivoros e herbivoros
                    if(matriz[i][j]===carnivoro){
                       
                        //verifica se a posição que será ocupada é um herbivoro
                        if( matriz[i][j-1]===herbivoro){
                           
                            //se sim, substitui pelo carnívoro e deixa um osso para trás 
                            matriz[i][j-1]=carnivoro
                            matriz[i][j]=osso 
                            pontos.carnivoros+=10                           
                        }
                        //se houver floresta ou folha ou osso, avança 
                        else if(matriz[i][j-1]===floresta){
                            matriz[i][j-1]=carnivoro
                            matriz[i][j]=floresta
                        }
                        else if(matriz[i][j-1]===folha){
                            matriz[i][j-1]=carnivoro
                            matriz[i][j]=folha
                        }
                        else if(matriz[i][j-1]===osso){
                            matriz[i][j-1]=carnivoro
                            matriz[i][j]=osso
                        }
                        else if(matriz[i][j-1]===carnivoro){
                            matriz[i][j-1]=carnivoro
                            matriz[i][j]=osso
                            pontos.carnivoros+=10
                        }
                    }
                    //se o herbívoro for para casa do carnívoro, ele morre 
                    else if(matriz[i][j]===herbivoro){
                        if(matriz[i][j-1]===carnivoro){
                        matriz[i][j]=osso
                        pontos.carnivoros+=10}
                        
                        //se ele for para uma floresta, ele come e deixa uma folha
                        else if(matriz[i][j-1]===floresta){
                            matriz[i][j-1]=herbivoro
                            matriz[i][j]=folha
                            pontos.herbivoros+=10
                        }
                        else if(matriz[i][j-1]===osso){
                            matriz[i][j-1]=herbivoro
                            matriz[i][j]=osso
                        }
                        else if(matriz[i][j-1]===folha){
                            matriz[i][j-1]=herbivoro
                            matriz[i][j]=folha
                        }
                    }
                }
                
            }
            
        }
    }
    console.clear()
    console.table(tabuleiro)
    console.log(`%cPONTOS:\nHerbívoros: ${pontos.herbivoros}\nCarnívoros: ${pontos.carnivoros}`,'Font-size:15px') 
}

function direita(matriz){
    for (let i = 0; i < matriz.length; i++) {//deve impedir que o movimento saia para fora do limite da matriz
        
        for (let j = matriz[i].length - 2; j >= 0; j--) {
            
            //se a posição for carnívoro ou herbívoro| deve mover apenas os dinossauros
            if(matriz[i][j]===carnivoro||matriz[i][j]===herbivoro){

                //se a posição que será movido não for montanha ou água, deve mover
                if(matriz[i][j+1]!==montanha&&matriz[i][j+1]!==agua){
                    
                    //acho que pode ter ficado redundante esse IF junto do IF a cima que verifica carnivoros e herbivoros
                    if(matriz[i][j]===carnivoro){
                       
                        //verifica se a posição que será ocupada é um herbivoro
                        if( matriz[i][j+1]===herbivoro){
                           
                            //se sim, substitui pelo carnívoro e deixa um osso para trás 
                            matriz[i][j+1]=carnivoro
                            matriz[i][j]=osso
                            pontos.carnivoros+=10                            
                        }
                        //se houver floresta ou folha ou osso, avança 
                        else if(matriz[i][j+1]===floresta){
                            matriz[i][j+1]=carnivoro
                            matriz[i][j]=floresta
                        }
                        else if(matriz[i][j+1]===folha){
                            matriz[i][j+1]=carnivoro
                            matriz[i][j]=folha
                        }
                        else if(matriz[i][j+1]===osso){
                            matriz[i][j+1]=carnivoro
                            matriz[i][j]=osso
                        }
                        else if(matriz[i][j+1]===carnivoro){
                            matriz[i][j+1]=carnivoro
                            matriz[i][j]=osso
                            pontos.carnivoros+=10
                        }
                    }
                    //se o herbívoro for para casa do carnívoro, ele morre 
                    else if(matriz[i][j]===herbivoro){
                        if(matriz[i][j+1]===carnivoro){
                        matriz[i][j]=osso
                        pontos.carnivoros+=10}
                        
                        //se ele for para uma floresta, ele come e deixa uma folha
                        else if(matriz[i][j+1]===floresta){
                            matriz[i][j+1]=herbivoro
                            matriz[i][j]=folha
                            pontos.herbivoros+=10
                        }
                        else if(matriz[i][j+1]===osso){
                            matriz[i][j+1]=herbivoro
                            matriz[i][j]=osso
                        }
                        else if(matriz[i][j+1]===folha){
                            matriz[i][j+1]=herbivoro
                            matriz[i][j]=folha
                        }
                    }
                }
                
            }
            
        }
    }
    console.clear()
    console.table(tabuleiro)
    console.log(`%cPONTOS:\nHerbívoros: ${pontos.herbivoros}\nCarnívoros: ${pontos.carnivoros}`,'Font-size:15px') 
}
'\n'
console.log(`%cPONTOS:\nHerbívoros: ${pontos.herbivoros}\nCarnívoros: ${pontos.carnivoros}`,'Font-size:15px')

//adicionado ação das funções pelas teclas do teclado
addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowDown':
            descer(tabuleiro);
            break;
        case 'ArrowUp':
            subir(tabuleiro);
            break;
        case 'ArrowLeft':
            esquerda(tabuleiro);
            break;
        case 'ArrowRight':
            direita(tabuleiro);
            break;
    }
    console.clear()
    console.table(tabuleiro)
    console.log(`%cPONTOS:\nHerbívoros: ${pontos.herbivoros}\nCarnívoros: ${pontos.carnivoros}`,'Font-size:15px')})
