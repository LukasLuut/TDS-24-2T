/*1. Crie um programa que peça ao usuário para inserir o seu nome e sua cor
favorita e imprima a mensagem:
"A cor favorita de FULANO é COR: "

2. Realize o exercícios duas vezes. Utilizando template strings e concatenação.*/
/*
let nome=prompt('qual seu nome?')
let cor=prompt("qual sua cor favorita?")
console.log(`a cor favorita de ${nome} é ${cor} `)

//-----------------------------------------------------------------


/*Peça para o usuário escrever uma frase e imprima no console a frase alterada,
com:*/
/*
let frase=prompt("Digite uma frase:")

console.log(frase.toUpperCase)
console.log(frase.replaceAll(o,i))
console.log(frase.length)


//--------------------------------------------------------

let array=[1,2,3,4,5,6]

array.push(7)
array.splice(2,2)
array.length

//---------------------------------------------------------


let array
console.log('a.', array)//erro devido array não ser definido 


array=null
console.log('b.', array)//vai apresentar NULL no console


array=[3,4,5,6,7,8,9,10,11,12,13]
console.log('c.',array.length)//vai apresentar o tamanho do array


let i=0 
console.log('d.',array[i])//apresenta 3 no console


array[i+1]=19
console.log('e', array)//apresenta no console 3,19,5,6,7,8,9,10,11,12,13


const valor=array[i+6]
console.log('f',valor)//apresenta no console 10





/*3. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida,
Imprima no console a seguinte mensagem:

O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o),
`nomeDoUsuario`!*/
/*

let nomeDoUsuario=prompt('Qual seu nome?')
let emailDoUsuario=prompt('Qual seu Email?')

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o),
${nomeDoUsuario}!`)




/*4. Faça um programa que contenha um array com 5 das suas comidas preferidas,
armazenado em uma variável. Em seguida, siga os passos:

a) Imprima no console o array completo
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
seguida por cada uma das comidas, uma embaixo da outra.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a
segunda comida da sua lista pela inserida pelo usuário. Imprima no console a
nova lista*/


/*
let comidas=['sanduiche','lasanha','hamburguer','almondega','enroladinho']

console.log(comidas)

console.log(`Essas são minhas comidas favoritas:`)

comidas.forEach((_,i)=>{
    console.log(comidas[i])
})

let comidaPreferida=prompt('Qual sua comida favorita')
comidas[1]=comidaPreferida

*/

/*Exercícios de escrita de código

5. Faça um programa, seguindo os passos:

a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`.
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as,
uma por uma, no array.
c) Imprima o array no console.
d) Peça ao usuário que digite o índice da tarefa que ele já realizou: 0, 1 ou 2.
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no console.*/


let arrayVazio=[]

for(let i=0;i<3;i++){
    arrayVazio.push(prompt('Tarefas a fazer:'))
}
console.log(arrayVazio)

arrayVazio.forEach((_,i)=>{
    console.log(`[${i}]`,arrayVazio[i])})


let tarefa=Number(prompt('qual tarefa você ja terminou? '))
arrayVazio.splice(tarefa,1)

console.log(arrayVazio)


/*1. Receba uma frase e retorne um array onde cada elemento é uma das palavras
da frase, ignorando os espaços*/

let array= ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let frase=""

array.forEach((_,i)=>{
    frase+=array[i]
})
console.log(frase)

