/*let i = 0;

while(i<10){
    console.log("o número é: ",i)
    i++;
}

let estomago=0

while(estomago<100){
    console.log(`Quero mais uma coxinha por favor \nMeu consagrado ${estomago}`)
    estomago+=10
}
------------------------------------------------------------------------------------
let resp=Number(prompt("digite um valor:"))
let array=[]
while(resp!==0){
array.push(resp)
resp=Number(prompt("digite outro valor:"))
}
let soma = array.reduce((acumulador, elemento) => acumulador + elemento, 0)
console.log("o valor da soma é:",soma)
let indice=0
for(let i=0; i<array.length-1;i++ ){
    indice+=1
    console.log(`os valores digitados são ${array[indice]}`)
}
------------------------------------------------------------------------------------*//*
let c=1
do{
    console.log(`O valor do contador é ${c}`)
    c++
}while(c<6)

------------------------------------------------------------------------------------*//*

let array=[21,15,18,14,12,13]
let maior=0
for(let i=0;i<array.length-1;i++){
    if(maior<=array[i]){
        maior=array[i]
    }
}
console.log(maior)   

------------------------------------------------------------------------------------*/

/*
let array=[21,15,18,14,12,13]
let par=0  
for(let i=0;i<array.length-1;i++){
    if((array[i]%2)===0){
        par+=array[i]
    }
}
console.log(par)  


------------------------------------------------------------------------------------*/
/*
let palavras=["oi","sumido","tudo","bem?","Saudades"]
let frase=""
for(palavra of palavras){
     frase+=palavra+" "
}
console.log(frase)
------------------------------------------------------------------------------------*//*
let pares=[21,15,18,14,12,13]
let soma=0
for(let par of pares){
    if(par%2===0){
        soma+=par
    }
}
console.log(soma)
------------------------------------------------------------------------------------*/

let palavras=["ola","Lucas","papibaquígrafo","josnel","pato","aula","vôlei"]
let maiorPalavra=[]
let tamanhoPalavra=0
for(let palavra of palavras){
    if(palavra.length>tamanhoPalavra){
        tamanhoPalavra=palavra.length
        maiorPalavra.push(palavra)
    }
}
console.log(maiorPalavra)