/*const professor={
    nome:"Lucas",
    idade: 32,
    altura:1.75,
    email:"lukasluut@gmail.com",
    tarefas:['dar aula', 'responder dúvidas'],
    contarPiadas:function(){
        console.log("É pa vê ou pa come?")
    }
}

console.log(`O nome da pessoa é ${pessoa.nome}, ele tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}.`)


const donoDoPet={
    nome:"Luut",
    idade:30,
    pet:{
        nome:"vitinho"
        ,raça:"caucasiano"
        ,tamanhoDoPinto:"grandão"
    }

}


const curso={
    nome:'front end noturno',
    linguagens:['js','css','html']
}

console.log(curso.linguagens[0])


const professores=[
    {nome:'Lucas',idade:32,modulo:1},{nome:'Leo',idade:29,modulo:2},{nome:'Mika',idade:29,modulo:3}
]

console.log(professores[2].nome)

*//*

const filme={
    nome:"Harry Potter e o Prisioneiro de Askaban ",
    direção:" Alfonso Cuarón",
    lançamento:"4 de junho de 2004",
    elenco:["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
    roteiro:"Steve Kloves",
    assistido:"Claro",
    notaImdb:7.9

}

filme.personagens=["Harry Potter","Hermione Grenger","Ronny Wesley"]

for(let i=0;i<=filme.elenco.length-1;i++){
    console.log(`o ator: ${filme.elenco[i]} representa o personagem ${filme.personagens[i]}`)
}

filme.elenco[0]="xuxa"

for(let i=0;i<=filme.elenco.length-1;i++){
    console.log(`o ator: ${filme.elenco[i]} representa o personagem ${filme.personagens[i]}`)
}

console.log(filme)



let pessoa1={
    nome:"Vitão da Massa",
    idade: 15,
    generoMusical:"hip-hop"}

function pessoas(pessoa){
    let pessoa2={...pessoa,
        comidas:["carne","yaksoba","pizza"],
        melhorAmig:{nome:"Vitoria",idade:20,}
    }
    return pessoa2
}

console.log(`O nome da pessoa é ${pessoas(pessoa1).nome} e suas comidas preferidas são ${pessoas(pessoa1).comidas[0]},${pessoas(pessoa1).comidas[1]} e ${pessoas(pessoa1).comidas[2]}.
Sua melhor amiga se chama ${pessoas(pessoa1).melhorAmig.nome} e tem ${pessoas(pessoa1).melhorAmig.idade} anos`)

*/


let personas=[
    {nome: "Naruto Uzumaki", idade: 16, estilo: "Ninjutsu", jutsus: "Rasengan"},
    {nome: "Sasuke Uchiha", idade: 16, estilo: "Ninjutsu", jutsus: "Chidori"},
    {nome: "Sakura Haruno", idade: 16, estilo: "Ninjutsu", jutsus: "Cherry Blossom Impact"},
    {nome: "Kakashi Hatake", idade: 30, estilo: "Ninjutsu", jutsus: "Copy Ninja Techniques"},
    {nome: "Orochimaru", idade: 50, estilo: "Ninjutsu", jutsus: "Summoning: Snakes"},
    {nome: "Gaara", idade: 16, estilo: "Ninjutsu", jutsus: "Sand Coffin"},
    {nome: "Itachi Uchiha", idade: 21, estilo: "Ninjutsu", jutsus: "Amaterasu"},
    {nome: "Jiraiya", idade: 50, estilo: "Ninjutsu", jutsus: "Summoning: Toads"},
    {nome: "Tsunade Senju", idade: 50, estilo: "Ninjutsu", jutsus: "Creation Rebirth"},
    {nome: "Minato Namikaze", idade: 24, estilo: "Ninjutsu", jutsus: "Flying Thunder God Technique"}
]
function addPersona(array, persona){array.push(persona)}

//Corrigir, não está funcionando
function buscaPersona(array){ 
    if(array.nome.includes(prompt('qual ninja?'))){console.log("esse ninja está na lista")}
    else{console.log("esse ninja não está na lista")}
}


//aplicar lógica
function listarPersna(array){ }
buscaPersona(personas)