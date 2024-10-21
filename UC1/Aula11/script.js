/*Exercícios de interpretação de código
1. Teste de números:
a) Explique o que o código faz. Qual o teste que ele realiza?
b) Para que tipos de números ele imprime no console "Passou no teste"?
c) Para que tipos de números a mensagem é "Não passou no teste"?*/

//A)o código verifica se o número digitado pelo usuário é par.
//B)retorna "passou no teste" para números pares
//C)retorna "não passou no teste" para números impares


//--------------------------------------------------------------------------------------


/*Exercícios de interpretação
2. Mercado
a) Para que serve o código?
b) Qual será a mensagem impressa
no console, se o valor de fruta for
`"Maçã"`?
c) Qual seria a mensagem
impressa no console se comprasse
`pera`e retirássemos o `break` que
está logo acima do `default`
("BREAK PARA O ITEM c.")?*/


//A) Serve para saber o valor das frutas 
//B)2.25
//C)o preço seria 5


//--------------------------------------------------------------------------------------


/*Exercícios de interpretação de código
3. Mensagem Secreta
a) O que a primeira linha está fazendo?
b) Considere um usuário digitou o número 10. Qual será a mensagem do
terminal? E se fosse o número -10?
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou
escopo.*/


//A) Pedindo um número para o usuário
//B) Console apresenta "Esse número passou no teste", se fosse -10 apresentaria erro
//C) erro de escopo está na variável mensagem 

//--------------------------------------------------------------------------------------

/*Exercícios de escrita de código
4. Faça um programa que pergunta ao usuário qual a idade dele e imprima no
console se ele/ela pode dirigir (apenas maiores de idade).
a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para
number para isso.
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite
dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima
`"Você não pode dirigir."`*/

/*
let idade=Number(prompt('qual sua idade?'))

if(idade>=18){
    console.log('você pode digirir')
}
else{console.log('você não tem idade suficiente para dirigir')}
*/

//--------------------------------------------------------------------------------------

/*Exercícios de escrita de código
5. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça
para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a
mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

6. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.*/

/*
let turno=prompt('qual turno você estuda?\n[M]-Matutino\n[V]-Vespertino\n[N]-Noturno')

if(turno==='M'){
    console.log('Bom dia')
}
else if(turno==='V'){
    console.log('Boa tarde')
}
else if(turno==='N'){
    console.log('Boa noite')
}

switch(turno){
    case 'M':
        console.log('Bom dia')
        break
    case 'V':
        console.log('Boa tarde')
    break

    case 'N':
        console.log('Boa noite')
}
*/
//--------------------------------------------------------------------------------------


/*Exercícios de escrita de código
7. Considere a situação: você vai ao cinema com um amigo ou amiga, porém
ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o
ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o
gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo,
imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha
outro filme :("*/

/*
let genero=promt('Qual o gênero do filme?')
let ingresso=Number(prompt('qual o valor do ingresso?'))
if(genero.toLocaleLowerCase ==='fantasia'&& ingresso<15){
console.log('Bom filme')
}
else{console.log('escolha outro filme')}
*/
//-----------------------------------------------------------------------------------------

/*1. Modifique o código do exercício 7 de escrita de código para, antes de imprimir
a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele
vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens
"Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo
que o usuário colocou no input.*/


/*
let genero=promt('Qual o gênero do filme?')
let ingresso=Number(prompt('qual o valor do ingresso?'))
if(genero.toLocaleLowerCase ==='fantasia'&& ingresso<15){
    let lanche=prompt('o que você vai comprar?\n[1]-pipoca\n[2]-chocolate\n[3]-doces')
    switch(lanche){
        case '1':
            console.log(`aproveite sua pipoca`)
            break
        case '2': 
        console.log(`aproveite seu chocolate`)
            break
        case '3':
            console.log(`aproveite seu doce`)
            break
    }
console.log('Bom filme')
}
else{console.log('escolha outro filme')}
*/
//-------------------------------------------------------------------------------------------------------------------

/*Você foi contratado para criar um sistema de vendas de ingressos de jogos de
um estádio de futebol. Para esta compra, o usuário deve fornecer algumas
informações:
Nome completo; Tipo de jogo: IN indica internacional e DO indica doméstico;
Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI

indica final. Categoria: pode ser as opções 1, 2, 3 ou 4;
Quantidade de ingressos*/


let usuario={
    nome:'',
    tipo:'',
    etapa:'',
    categoria:0,
    quantidade:0,
    valor:0
}


let tabela=[
    {Jogo:'SF-Semifinais', categoria1:1320, categoria2:880, categoria3:550,categoria4:220},
    {Jogo:'DT-Decisão 3ºlugar', categoria1:660 , categoria2:440, categoria3:330,categoria4:170},
    {Jogo:'FI-Final', categoria1:1980, categoria2:1320, categoria3:880,categoria4:330},
    ]
usuario.nome=prompt('Como você se chama?')
usuario.tipo=prompt('Qual o tipo de jogo?\nIN indica internacional e DO indica doméstico.')
console.table(tabela)
usuario.etapa=prompt('Qual etapa do jogo?\nSF indica semi-final\nDT indica decisão de terceiro lugar\nFI indica final.')
usuario.categoria=Number(prompt('Qual a categoria do ingresso?\n1, 2, 3 ou 4'))
usuario.quantidade=Number(prompt('Quantos ingressos você vai querer?'))

switch(usuario.etapa){
    case 'sf':
        if(usuario.categoria===1){
        usuario.valor=(usuario.quantidade*tabela[0].categoria1)/5.65
        }
        else if(usuario.categoria===2){
            usuario.valor=(usuario.quantidade*tabela[0].categoria2)/5.65
        }
        else if(usuario.categoria===3){
            usuario.valor=(usuario.quantidade*tabela[0].categoria3)/5.65
        }
        else if(usuario.categoria===4){
            usuario.valor=(usuario.quantidade*tabela[0].categoria4)/5.65
        }
    break
    case 'dt':
        if(usuario.categoria===1){
            usuario.valor=(usuario.quantidade*tabela[1].categoria1)/5.65
            }
            else if(usuario.categoria===2){
                usuario.valor=(usuario.quantidade*tabela[1].categoria2)/5.65
            }
            else if(usuario.categoria===3){
                usuario.valor=(usuario.quantidade*tabela[1].categoria3)/5.65
            }
            else if(usuario.categoria===4){
                usuario.valor=(usuario.quantidade*tabela[1].categoria4)/5.65
            }
        break
        case 'fi':
        if(usuario.categoria===1){
            usuario.valor=(usuario.quantidade*tabela[2].categoria1)/5.65
            }
            else if(usuario.categoria===2){
                usuario.valor=(usuario.quantidade*tabela[2].categoria2)/5.65
            }
            else if(usuario.categoria===3){
                usuario.valor=(usuario.quantidade*tabela[2].categoria3)/5.65
            }
            else if(usuario.categoria===4){
                usuario.valor=(usuario.quantidade*tabela[2].categoria4)/5.65
            }
        break
}

alert(`Pedido de:${usuario.nome}.\nTipo de jogo: ${usuario.tipo}\nEtapa: ${usuario.etapa}\nCategoria: ${usuario.categoria}\n
Ingressos: ${usuario.quantidade}\nTotal: U$${usuario.valor.toFixed(2)}`)