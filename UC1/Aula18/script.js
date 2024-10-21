/*let obj={
    nome:"Lucas",
    apelido:["Luut","Lutinho","Deus do Caos e da desordem"]
}

let imp=(a)=>{console.log(`eu sou ${a.nome}, mas pode me chamar de ${a.apelido[0]}, ${a.apelido[1]} ou ${a.apelido[2]}`)
}
imp(obj)


let obj2={
    ...obj,
    apelido:["Luti","Leite","Luto"]
}

imp(obj2)


let people={
    nome:"Luut",
    idade:30,
    profissão:"fotógrafo"
}

let func=(a)=>{console.log(
 `Meu nome é ${a.nome}, que tem ${a.nome.length} letras. \n
Tenho ${a.idade} anos e minha porffisão é ${a.profissão}, que tem ${a.profissão.length} letras`
)}

func(people)

*/

/*
let carrinho=[]

frutas=[{nome:"uva",dispon:true},{nome:"morango",dispon:true},{nome:"pêssego",dispon:true}]

let addCar=(a)=>{for(let i=0;i<=a.length-1;i++){if(a[i].dispon){carrinho.push(a[i])}}}

addCar(frutas)
console.log(carrinho)


let criarPessoa=()=>{
    let pessoa={
        nome:"",
        idade:0,
        profissão:"",
    }
    pessoa.nome=prompt("Qual seu nome?")
    pessoa.idade=Number(prompt("quantos anos você tem?"))
    pessoa.profissão=prompt("qual sua profissão?")
    
    return pessoa

}
console.log(criarPessoa())*/

/*
obj1={nome:"senhor dos aneis", ano:2001}
obj2={nome:"O Hobbit", ano: 2021}

let comp=(a,b)=>a.ano<b.ano?
console.log(`O ${a.nome} lançou primeiro que o ${b.nome}`):
console.log(`O ${b.nome} lançou primeiro que o ${a.nome}`)

comp(obj1,obj2)*/


const negrinho = {
    nome: 'Negrinho do Pastoreio',
    tipo: 'Personagem',
    ano: 1850,
    descricao: 'Segundo a lenda, ainda no tempo da escravidão, o Negrinho foi um pequeno escravo que sofreu muito nas mãos de um fazendeiro.',
    regiao: 'RS',
    saudar: () => {
      return "Negrinho do pastoreio, Acendo esta vela pra ti. E peço que me devolvas, A querência que perdi."
    }
  }
  
  const sereia = {
    nome: 'Sereia da Furna do Diamante',
    tipo: 'Personagem',
    ano: 1900,
    descricao: 'A sereia protege a Furna do Diamante e guarda nela um esconderijo secreto, repleto de pedras preciosas e diamantes. Toda sexta-feira, em noites de lua cheia, ela aparece na porta da gruta e, certamente, pedirá um pente para quem encontrar – para poder pentear seus longos e belos cabelos.',
    regiao: 'Torres', 
    saudar: () => {
      return "Eu também sou Sereia e peço os seus dedos para passar entre os meus cabelos."
    }
  }
  
  const sepe = {
    nome: 'Sepé Tiaraju',
    tipo: 'Personagem',
    ano: 1756,
    descricao: 'A lenda de Sepé Tiaraju diz que ele era filho de um cacique, possuía vigoroso porte físico e era um valente guerreiro.',
    regiao: 'Misiones Orientales',
    saudar: () => {
      return "Esta terra tem dono, e ninguém no-la tira"
    }
  }
  
  let personagens = [negrinho, sereia, sepe]
  
  const retornaSaudacao = (array) => {
    for(let i = 0; i < array.length; i++) {
      console.log(array[i].saudar())
    }
  }
  
  retornaSaudacao(personagens)








