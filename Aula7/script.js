/*const primeiroValor=true
const segundoValor=true
const resultado=primeiroValor&&segundoValor
console.log(resultado)*/

/*
//--------------------------------------------------
let a = true
let b = false
let c = true

console.log("teste do argumento E (&&)\n ")
let resultado = a&&b//false
console.log(resultado)
resultado = b&&c//false
console.log(resultado)
resultado = a&&c//true
console.log(resultado)
resultado = a&&b&&c//false
console.log(resultado)


console.log("teste do argumento OU (||)\n ")
resultado = a||b//true
console.log(resultado)
resultado = b||c//true
console.log(resultado)
resultado = a||c//true
console.log(resultado)
resultado = a||b||c//true
console.log(resultado)
*/

//-----------20/08---------------EXERCÍCIOS DE FIXAÇÃO-------------------------------

let nome=prompt("Dê um nome para essa pessoa:")
let idade=2024-(Number(prompt("Em que ano essa pessoa nasceu:")))
let maiorIdade=idade>=18
let idade2050=idade+26

console.log(`A pessoa se chama ${nome} e tem ${idade} anos de idade.\n
Ela é maior de idade? ${maiorIdade}\nEla terá ${idade2050} anos em 2050`)*/


//------------------------------------------------------------


const bool1= true
const bool2= false
const bool3=!bool2

let resultado = bool1&&bool2
console.log("a. ", resultado)// false

resultado = bool1&& bool2 && bool3
console.log("b. ", resultado)// false 

resultado = !resultado && (bool1||bool2)

console.log("c. ", resultado)//true

console.log("d. ",typeof resultado)//boolean


//------------------------------------------------------------

let primeiroNumero=prompt("digite um número!")
let segundoNumero=prompt("digite outro número!")

const soma=primeiroNumero+segundoNumero

console.log(soma)
//o código está recebendo a entrada como tipo string, precisamos converter usando 
//Number() para converter o tipo de entrada antes da soma.


//------------------------------------------------------------

let minhaIdade=Number(prompt("qual a sua idade?"))
let idadeAmigo=Number(prompt("qual a idade do seu amigo?"))

let comparador=minhaIdade>idadeAmigo
console.log(`Sua idade é maior que a do seu amigo? ${comparador}\nA diferença
    de idade entre você é de ${minhaIdade-idadeAmigo}`)

//-----------------------------------------------------------


let numeroPar=Number(prompt("Digite um número PAR:"))
console.log(numeroPar%2)//Sempre que o número digitado for PAR, o resultado é 0, quando impar o resultado é 1


//------------------------------------------------------------


let idadeAnos=Number(prompt("Quantos anos você tem?"))
idadeMeses=idadeAnos*12
idadeDias=idadeAnos*365
idadeHoras=idadeDias*24
console.log(
`Você tem ${idadeAnos} anos de idade, que representam:\n 
${idadeMeses} Meses\n${idadeDias} Dias\n${idadeHoras} Horas`
)

//------------------------------------------------------------

let numero1=Number(prompt("digite um número"))
let numero2=Number(prompt("digite outro número"))
console.log(
`O primeiro número é maior que o segundo? ${numero1>numero2}\n
O primeiro número é igual o segundo? ${numero1===numero2}\n
O primeiro número é divisível pelo segundo? ${0===(numero1%numero2)}\n
O segundo número é divisível pelo primeiro? ${0===(numero2%numero1)}\n`
)

//------------------------------------------------------------

var cel = Number(prompt("temperatura Celsius: "))
far=((cel)*(9/5)+32).toFixed(2) 
console.log(far+"ºF")
kelvin = (far-32)*(5/9)+273.15
console.log(kelvin+"ºK")


//------------------------------------------------------------

var kW = Number(prompt ("kW consumidos: "))
let kWHora=(kW*0.05)
let desc=(kWHora*((Number(prompt("taxa de desconto em %:")))/100))
kWHora=kWHora-desc
console.log("consumo mensal: " ,kWHora)


//------------------------------------------------------------

let kg=2.20
let num=Number(prompt("quantas lb deseja converter em kg?"))
console.log(`${num} lb equivalem a ${num*kg}kg`)

kg=0.02
num=Number(prompt("quantas oz deseja converter em kg?"))
console.log(`${num} oz equivalem a ${num*kg}kg`)

let mi=1609.34
num=Number(prompt("quantas milhas deseja converter em metros?"))
console.log(`${num} mi equivalem a ${num*mi}m`)

let ft=0.30
num=Number(prompt("quantas ft deseja converter em metros?"))
console.log(`${num} ft equivalem a ${num*ft}m`)

let gal=3.78
num=Number(prompt("quantos gal deseja converter em litros?"))
console.log(`${num}gal equivalem a ${num*gal}L`)

let xic=0.24
num=Number(prompt("quantas xic deseja converter em litros?"))
console.log(`${num}xic equivalem a ${num*xic}L`)




