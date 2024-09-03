/*
Exercício 1)
apresenta no log o valor de 5

Exercício 2)
    A) apresenta no log 19, 21,23, 25, 27, 30.


    B) const listas=[10, 11, 12, 15, 18, 19, 21,23, 25, 27, 30.]
for(let lista of listas){

}

Exercício 3

apresenta no log: ***
/*
let pet=prompt("Você tem pet?")
let cont=1
let pets=[]
if(pet.toLowerCase()==="sim"){
   let petN=prompt('Quantos?')
    while(pets.
    
    length<petN){
        pets.push(prompt(`qual o nome do seu ${cont}º pet`))
        cont++}
    for( let peti of pets){
        console.log(peti)}}
else{alert("Vai adotar um, seu pedaço de bosta ambulante!")}


//Exercício 4
/*
let arrayO=[13,78,54,39,82,51,99,75]
let array10=[]
let arrayPar=[]
let arrayFrase=[]
let maiorNumero=0
let menorNumero=arrayO[0]
for(let num of arrayO){
    console.log(num)
    array10.push(num/10)
    if(num%2===0){
        arrayPar.push(num)
    }}
    console.log(array10)
for(let i=0;i< arrayO.length;i++){
    arrayFrase[i]=`O elemento do índex ${i} é:${arrayO[i]}`
}
for(let cada of arrayO){
    if(cada>maiorNumero){
        maiorNumero=cada
    }
    }
    for(let cadaa of arrayO){
        if(cadaa<menorNumero){
            menorNumero=cadaa
        }
        }
    console.log(`O maior número é ${maiorNumero} \nO menor número é ${menorNumero}`)*//*

    ------------------------------------------------------------------------------------

    let numero=Number(prompt("Digite um número de 1 a 100"))
    alert("------VAMOS JOGAR!!-------")
    let escolha=Number(prompt("Qual foi o número digitado?"))
    let tent=1
    while(escolha!==numero){
        
        console.log(`O número de tentativas é ${tent}`)
        if(escolha<numero){
            escolha=Number(prompt('O número é maior Burrão:'))
            tent++
        }
        else{escolha=Number(prompt('É menor Animal:'))
        tent++
        console.log(`O número de tentativas é ${tent}`)
}}
console.log(`tentativas: ${tent}`)
    alert("Parabéns gênio")
*/

let vida = 1
let recursos = 0
let jogo = alert(`Vamos começar o jogo, comece a primeira rodada... Você começa com ${vida} de vida e ${recursos} recursos`)


while(vida < 10 && recursos < 10) {
let rodada = prompt('Você quer explorar ou descansar?').toLowerCase()

if(rodada === 'descansar') {
    console.log('Você ganhou 1 de vida')
    vida++   
}

if(rodada === 'explorar') {
    rodada = prompt('Você quer explorar ou descansar?').toLowerCase()
} 

if(rodada !== 'descansar' && rodada !== 'explorar') {
    alert('Caminho inválido')
}
}
alert('Você virou imortal')