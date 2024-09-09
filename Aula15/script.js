/*
function calcArea(largura, altura){
    const area= largura*altura
    console.log(area)
}
calcArea(2,19)
calcArea(9,9)

function print(){
    console.log("Adeus mundo!")
}
//------------------------------------------------------------------
function bemVindo(){
    console.log("bem vindo turma 24-2T")
}

bemVindo()

//------------------------------------------------------------------

function soma(){
    let result=9+10
    console.log(result)
}

soma()
//------------------------------------------------------------------

function dobro(a){
let dobro=a*2
console.log(`O dobro desse valor é: ${dobro}`)}

let num=Number(prompt("digite um número:"))
dobro(num)
//------------------------------------------------------------------*//*

function nome(a){console.log(`Olá ${a}`)}
    
    let name=prompt("digite um nome:")
    nome(name)

//------------------------------------------------------------------

function soma(a,b){
    let somar=a+b
    console.log(`a soma dos valores é: ${somar}`)}
    
    let num=Number(prompt("digite um número:"))
    let num2=Number(prompt("digite outro número:"))
    soma(num,num2)
    
//------------------------------------------------------------------*//*

function wendryu(){
    alert(`boa tarde ${nome}`)
    hobbie=prompt("você tem algum hobbie? Qual?")
    alert(`que massa que você se envolve com ${hobbie}, eu curto Fotografia`)
}

let nome=prompt("digite seu nome:")
wendryu(nome)*//*

function soma(a,b){
    let res=a+b
    return res
}
console.log(res)

function lastFirst(array){
    let array2=[] 
    array2.push(array[array.length-1])
    array2.push(array[0])
    return array2
}
let array=[2,4,6,8,10]
console.log(lastFirst(array))*/
/*
let calcArea=function(a,b){
    let soma=a*b
    return soma
}

let result=calcArea(2,5)

//--------------------------------------------*//*

let nome=(b,a)=>{let resF=0;for(let i=0;i<a;i++){resF+=b}return resF}
let valor=Number(prompt("digite um valor:"))
let multiplicador=Number(prompt("multiplicado por:"))

console.log(nome(valor, multiplicador))*/
let monstros=[{caracteristica:"temSedeDeSangue"},{caracteristica:"transformaComLuaCheia"}, 
   {caracteristica:"perguntaSeTemDúvida"}, {caracteristica:"naoPerguntaSeTemDúvida"}]
let monstro=(a)=>{
     if(a.caracteristica==="temSedeDeSangue"){console.log("o monstro é um Vampiro")}
else if(a.caracteristica==="transformaComLuaCheia"){console.log("o monstro é um Lobisomem")}
else if(a.caracteristica==="perguntaSeTemDúvida"){console.log("a criatura é um Professor")}
else if(a.caracteristica==="naoPerguntaSeTemDúvida"){console.log("o monstro é um Aluno")}
}
let criatura=monstros[Math.floor(Math.random()*monstros.length)]
monstro(criatura)