/*let matrizNumeros=[
    [1,2,3],
    [4,5,6]
]

//console.log(matriz[1][0])

/*for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}

let matriz2=[
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

for(let i=0;i<matriz2.length;i++){
    for(let j=0;j<matriz2.length;j++){
       
    console.log(matriz2[i][j])
        }
    
    }   


let matriz3=[]

matriz3[0]=[1,2,3]
matriz3[1]=[4,5,6]
matriz3[2]=[7,8,9]


//console.log(matriz2[2][1])


let matriz4=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

matriz4[1][2]=1

//console.log(matriz4[1][2])


    console.log(matriz4[0])
    console.log(matriz4[1])
    console.log(matriz4[2])

    function criarGraficoDeCalor(matriz) {
        for (let linha of matriz) {
            let linhaGrafico = linha.map(valor => {
                return valor > 5 ? '🟥' : '🟩'; // vermelho para > 5, verde para <= 5
            }).join('');
            console.log(linhaGrafico);
        }
    }
    
    criarGraficoDeCalor(matrizNumeros);
*/
    /*let matriz5=[
        [1,2,3,4,],
        [5,6,7,8,],
        [9,10,11,12],
        [13,14,15,16]
    ]

    function percorreMatriz(array){
        let soma=0
        for(let i=0;i<array.length;i++){
            for(let j=0;j<array.length;j++){
            soma+=array[i][j]
            }
        }
        return console.log(soma)
    }

    percorreMatriz(matriz5)

*/

    /*criar uma matriz de 10x10
    preencher com alguns navios, podem ser representados pelo número 1
    os espaços vazios devem ser representados por 0 
    deve perguntar ao jogador onde deseja atacar 


    */
    const navio = '\u{1F6A2}';
    const agua= '~~';
    const onda= '\u{1F30A}'

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
    function posicaoNavio(matriz){
        matriz.forEach((linha,i)=> {
            linha.forEach((_,j)=>{
                if(Math.floor(Math.random() * 20)>13){
                    tabuleiro[i][j]= 1
                }
            }
        )
            
        });
    }
    posicaoNavio(tabuleiro)

// Matriz apenas para exibição-Estudar melhor a iteração de map dentro de map
let matrizExibicao = tabuleiro.map(linha => linha.map(coluna => agua));

//apresentação da matriz utilizando table
console.table(matrizExibicao)
alert("PREPARE-SE PARA BATALHA\nO primeiro número se refere a linha horizontal\nO segundo número se refere a coluna vertical")

//loop para 5 tentativas
for(let i=0;i<5;i++){

    let esc1=Number(prompt('Qual linha horizontal?'))
    let esc2=Number(prompt('Qual coluna vertical?'))

    //condição para acerto
    if(tabuleiro[esc1][esc2]===1){
    
        console.clear();
        tabuleiro[esc1][esc2]=navio//deve mudar a posição no tabuleiro para verificar acerto na mesma coordenada
        matrizExibicao[esc1][esc2]=navio//atualiza o table para visualização do usuário
        console.table(matrizExibicao)
        alert("Você acertou um navio")
}
else if(
    //verifica se o local já foi acertado antes e adiciona +1 tentativa
    tabuleiro[esc1][esc2]===navio||tabuleiro[esc1][esc2]===onda){
    console.clear();
    console.table(matrizExibicao)
    alert('você já atirou nessas coordenadas, tente novamente!')
    i--
}
else{
    //tiro na agua e atualização da matriz de apresentação
    console.clear();
    tabuleiro[esc1][esc2]=onda
    matrizExibicao[esc1][esc2]=onda
    console.table(matrizExibicao)
    alert("tiro na água")
}}