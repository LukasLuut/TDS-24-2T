alert("--------- BEM VINDO AO DISTRITO 24-2T --------")

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


