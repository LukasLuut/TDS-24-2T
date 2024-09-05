/*alert("--------- BEM VINDO AO DISTRITO 24-2T --------")

let jogador={nome:"",vida:1,recurso:0,}

jogador.nome=prompt("Como seu Tributo se chama?")

alert(`Bem vindo ${jogador.nome}, obrigado por se voluntariar.\nVocê precisa sobreviver até juntar 10 recursos.\nBoa sorte!`)

console.log("Na exploração você pode encontrar recursos, perigos ou inimigos.\nDescançar recupera 1 ponto de vida.")

do{
    esc=Number(prompt("O que deseja fazer?\n\n[1]-EXPLORAR\n[2]-DESCANÇAR "))

if(esc===1){    
    let esc2=Number(Math.floor(Math.random()*4))
   
    if(esc2===0){
        console.log("você encontrou um Tributo Inimigo.")
        esc3=Number(prompt("o que deseja fazer?\n\n[1]-FUGIR\n[2]-LUTAR"))
       
        if(esc3===1){alert("Você fugiu como um covarde, mas sobreviveu outro dia.")}
        else if(esc3===2){alert("Você lutou bravamente, mas saiu ferido.\n\n-1 vida")
         jogador.vida-=1
         
            if(jogador.vida<=0){
            alert("O tributo está morto\nGame-Over")
            esc4=Number(prompt("Deseja jogar novamente?\n\n[1]-SIM\n[2]-NÃO"))
           
            if(esc4===1){window.location.reload(false);}}}}

    else if(esc2===1||2){
        console.log("você encontrou recursos por onde explorou")
        let rec2=Number(Math.floor(Math.random()*3)+1)
        jogador.recurso+=rec2
        console.log(`agora você tem:${jogador.recurso} recursos.`)
       
        if(jogador.recurso>=10){alert("---PARABÉNS!!!---\nVocê sobreviveu e juntou os 10 recursos necessários\nPode ir para casa.")}}
    
    else if(esc2===3){
        console.log("você encontrou perigos por onde explorou, mas passou ileso.")}}

else if(esc===2){alert("você descansa e recupera suas energias.\n\nVida+1")
    jogador.vida+=1
 
}
else{}}
while(jogador.recurso<10&&jogador.vida>0)
*//*
//-----------------------------------------------------------------------------
for(let i=0;i<10;i++){console.log(i)}

//-----------------------------------------------------------------------------
for(let i=0;i<20;i++){if(i%2===0){console.log(i)}}

//-----------------------------------------------------------------------------
let num= Number(prompt("digite um número:"))
for(let i=1;i<=10;i++){
    res=i*num
    console.log(`${i}x${num}=${res}`)}

//-----------------------------------------------------------------------------
let soma=0
for(let i=1;i<=5;i++){let num2=Number(prompt("digite um número"))
    soma+=num2}
console.log(soma)

//-----------------------------------------------------------------------------
let soma=0
for(let i=1;i<=5;i++){let num2=Number(prompt(`Digite a nota do aluno ${i}:`))
    soma+=num2}
console.log(`A média das notas é ${soma/5}`)

//-----------------------------------------------------------------------------*/
let palavras=["abc"]
let palavra=palavras[Math.floor(Math.random()*palavras.length)]
let resposta=[]
let respostaF=""
let tentativas=5

for(let letra of palavras){resposta.push(letra)}




for(let i=0;i<palavra.length;i++){respostaF+="_."}//um array de caracteres '_.' do tamanho da palavra
//for(let letra of palavra){resposta.push(letra)}
console.log(`Palavra:${respostaF}`)

alert(`Advinhe a palavra, ela tem ${palavra.length} letras`)

do{    
    let esc=prompt("Digite uma letra:")
    tentativas--
    if(palavra.includes(esc)){
        for(let i=0;i<palavra.length;i++){
            if(esc===palavra[i]){
                resposta.splice(i,1,esc)
                respostaF[i]=resposta[i]
                console.log(resposta)
                }}
                    
        
    }
}while(tentativas!==0)

