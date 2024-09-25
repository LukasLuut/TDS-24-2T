// VITOR VITALINO e LUCAS WILLIAM

let estiloInimigo = "font-weight: bold; color: red; font-size: 20px;font-style: italic;";//estilização de texto
let estiloBatalha = "font-weight: bold; font-size: 20px;font-style: italic;";
let jogarNovamente = 1

let armas= [
  { classe: 'arma', tipo: 'Espada Longa', dano: 10, moedas: 5 },
  { classe: 'arma', tipo: 'Machado de Guerra', dano: 12, moedas: 8 },
  { classe: 'arma', tipo: 'Cajado Mágico', dano: 8, moedas: 15 },
  { classe: 'arma', tipo: 'Lança', dano: 9, moedas: 6 },
  { classe: 'arma', tipo: 'Adaga Élfica', dano: 7, moedas: 4 },
  { classe: 'arma', tipo: 'Clava', dano: 11, moedas: 3 },
  { classe: 'arma', tipo: 'Espada de Gondor', dano: 14, moedas: 10 },
  { classe: 'arma', tipo: 'Sabre de Rohan', dano: 9, moedas: 7 },
  { classe: 'arma', tipo: 'Martelo de Batalha', dano: 15, moedas: 12 },
  { classe: 'arma', tipo: 'Falcão de Glaurung', dano: 15, moedas: 18 },
  { classe: 'arma', tipo: 'Espada Curta', dano: 6, moedas: 2 },
  { classe: 'arma', tipo: 'Espada de Élfica', dano: 13, moedas: 9 },
  { classe: 'arma', tipo: 'Lança de Mirkwood', dano: 10, moedas: 11 },
  { classe: 'arma', tipo: 'Cajado de Saruman', dano: 8, moedas: 20 },
  { classe: 'arma', tipo: 'Cajado de madeira', dano: 5, moedas: 5 }
];

let armaduras= [
  { classe: 'armadura', tipo: 'Armadura de Couro', defesa: 5, moedas: 7 },
  { classe: 'armadura', tipo: 'Armadura de Placas', defesa: 12, moedas: 12 },
  { classe: 'armadura', tipo: 'Armadura de Malha', defesa: 8, moedas: 10 },
  { classe: 'armadura', tipo: 'Cota de Malha', defesa: 9, moedas: 9 },
  { classe: 'armadura', tipo: 'Armadura de Escamas', defesa: 11, moedas: 14 },
  { classe: 'armadura', tipo: 'Armadura Élfica', defesa: 15, moedas: 18 },
  { classe: 'armadura', tipo: 'Armadura de Guerra', defesa: 6, moedas: 5 },
  { classe: 'armadura', tipo: 'Capa de couro de ovelha negra', defesa: 4, moedas: 20 },
  { classe: 'armadura', tipo: 'Armadura de Guerreiro', defesa: 13, moedas: 13 },
  { classe: 'armadura', tipo: 'Armadura de Rohan', defesa: 10, moedas: 11 },
  { classe: 'armadura', tipo: 'Peitoral de Gondor', defesa: 14, moedas: 15 },
  { classe: 'armadura', tipo: 'Cota de Malha Élfica', defesa: 12, moedas: 16 },
  { classe: 'armadura', tipo: 'Armadura de Ferreiro', defesa: 10, moedas: 8 },
  { classe: 'armadura', tipo: 'Armadura de Barba de Anão', defesa: 13, moedas: 19 },
  { classe: 'armadura', tipo: 'Armadura de Caça', defesa: 7, moedas: 6 }
];

console.clear()

//Função de level Up
function lvlUp(jogador){

  //Verifica se o jogador ganho EXP suficiente para upar
  if (jogador.exp>=jogador.expMax){

//Se sim, adiciona status permanentes ao jogador, aumenta o expMax necessário para subir novamente e zera o exp atual
      alert('Você ficou mais forte!')
      jogador.expMax+=30
      jogador.exp=0
      jogador.nivel+=1
      jogador.hpMax+=20
      jogador.ataque+=3
      jogador.defesa+=1
      jogador.hp=jogador.hpMax//Também restaura o HP para o máximo 
      adicionarAcao(`Você subiu para o Nível:${jogador.nivel}`)
    }}

// Função para adicionar uma ação ao histórico e apresentar no console do jogador
function adicionarAcao(acao) {
  console.log(acao)

 // new Date() pega a data e hora do computador em um array   .toLocaleTimeString() converte para uma versão da hora mas em string
let hora = new Date().toLocaleTimeString(); // Captura a hora da ação
    seuHeroi.historico.push(`[${hora}] ${acao}`);
}

// Função para exibir o histórico no console:
function exibirHistorico() {
    console.log('Histórico de Ações:');

    //foi trocado for por forEach
    seuHeroi.historico.forEach(acao => {
        console.log(acao);
    });
}

// Função que rola um dado D20 para probabilidades 
function dado(){return Math.floor(Math.random() * 20) + 1;}

// Função que verifica iniciativa antes da batalha
function rolarIniciativa(jogador, inimigo) {    
  //Realiza loop enquanto os valores forem iguais, para não ocorrer empate
  do {
      jogador.iniciativa = dado();
      inimigo.iniciativa = dado();
  } while (jogador.iniciativa === inimigo.iniciativa);
}
//Função de batalha, está muito grande e deve ser dividida em partes menores para melhor funcionalidade e manutenção
function batalha(jogador,inimigo){
  let turno = 1

 // Enquanto o jogador ou o inimigo estiverem vivos, o loop continua
 while(jogador.hp>0 && inimigo.hp>0){

        // Pergunta o que o jogador deseja fazer
        let escolha=Number(prompt(`O que deseja fazer:\n[1] Atacar \n[2] Usar Habilidade \n[3] Defender \n[4] Fugir da Batalha \n[5] Mostrar Histórico`)) 
        console.clear()

        if(escolha===4) {
          jogador.hp = -100 
        } else if(escolha===5){
          exibirHistorico()
        } else {
        console.log(`%cTURNO Nº${turno}`,"font-weight: bold; font-size: 15px;")
        // Se escolher atacar, rola um ataque simples, dano-defesa 
        if(escolha===1){ 

             // Esse Math.max serve para que o dano não seja negativo, (valor1, valor2, valor3) ele pega o maior
             // Se o resultado da operação matemática for negativo, ele pega o valor 0 que é maior, então o dano nunca vai ser negativo.
            let dano=Math.max((jogador.ataque-inimigo.defesa), 0)

             // Verifica se o efeito de def do inimigo está ativo
             // Esse efeito de tempo pode ser implementado em uma função separada, por ser usado constantemente
               if (inimigo.efeitoTempo.efeito) {

                // Reduz o dano recebido durante a defesa
                dano = Math.max(dano - 10, 0); 
                inimigo.efeitoTempo.turnos--;

                // Desativa o efeito quando o turnos chegar a zero
                if (inimigo.efeitoTempo.turnos <= 0) {
                    inimigo.efeitoTempo.efeito = false;
                    inimigo.defesa -= 10;
                    console.log(`%c${inimigo.tipo}\nHP:${inimigo.hp}`,"color: red; font-weight: bold; font-size: 15px;")
                    adicionarAcao("A defesa temporária do inimigo acabou.");
                }
              }
       
            // Inimigo toma o dano que sobra depois de subtrair da sua defesa
            inimigo.hp-=dano
            console.log(`%c${jogador.nome}\nHP:${jogador.hp}`,"font-weight: bold; font-size: 15px;")
            adicionarAcao(`Você causou ${dano} de dano com um ataque. `)
          }
        
        // Se escolher utilizar habilidade especial
        // Jogador.ataque pode ser substituído por jogador.habilidades[x] que pode ser escolhido pelo jogador
        if(escolha===2){

            // Verifica se o jogador rolou dano Crítico 
            if(dado()>=18){ 

                // Se for crítico, inimigo toma o dobro de dano
                let dano=jogador.ataque+(dado())*2

                // Verifica se o efeito de defesa do inimigo está ativo
                if (inimigo.efeitoTempo.efeito) {

                  // Reduz o dano recebido durante a defesa
                  dano = Math.max(dano - 10, 0); 
                  inimigo.efeitoTempo.turnos--;
  
                  // Desativa o efeito quando o turno chegar a zero
                  if (inimigo.efeitoTempo.turnos <= 0) {
                      inimigo.efeitoTempo.efeito = false;
                      inimigo.defesa -= 10;
                      console.log(`%c${inimigo.tipo}\nHP:${inimigo.hp}`,"color: red; font-weight: bold; font-size: 15px;")
                      adicionarAcao("A defesa temporária do inimigo acabou.");
            }}
                inimigo.hp-=dano
                console.log(`%c${jogador.nome}\nHP:${jogador.hp}`,"font-weight: bold; font-size: 15px;")
                adicionarAcao(`VOCÊ CAUSOU ${dano} DE DANO EM UM ACERTO CRÍTICO COM SUA HABILIDADE ${jogador.habilidades}`)
            }

            // Não sendo crítico, o inimigo toma o dano de ataque + um bônus pela habilidade 
            else{
                let dano=jogador.ataque + dado()

                // Verifica se o efeito de defesa do inimigo está ativo
                if (inimigo.efeitoTempo.efeito) {

                  // Reduz o dano recebido durante a defesa
                  dano = Math.max(dano - 10, 0); 
                  inimigo.efeitoTempo.turnos--;
  
                  // Desativa o efeito quando o turnos chegar a zero
                  if (inimigo.efeitoTempo.turnos <= 0) {
                      inimigo.efeitoTempo.efeito = false;
                      inimigo.defesa -= 10;
                      console.log(`%c${inimigo.tipo}\nHP:${inimigo.hp}`,"color: red; font-weight: bold; font-size: 15px; ")
                      adicionarAcao("A defesa temporária do inimigo acabou.");
            }}
                console.log(`%c${jogador.nome}\nHP:${jogador.hp}`,"font-weight: bold; font-size: 15px;")
                adicionarAcao(`você causou ${dano} de dano com sua habilidade ${jogador.habilidades}`)
                inimigo.hp-=dano
            }

        }

        // Se o jogador escolher defender, recebe um bônus de defesa temporário
        if(escolha===3){
          
          // Verifica se o efeito de defesa está ativado, se for false, muda para true e adiciona turnos e pontos de defesa
          if(!jogador.efeitoTempo.efeito){
          jogador.efeitoTempo.efeito=true
          jogador.efeitoTempo.turnos+=3
          jogador.defesa+=10
          console.log(`%c${jogador.nome}\nHP:${jogador.hp}`,"font-weight: bold; font-size: 15px;")
          adicionarAcao("Você aumentou sua defesa pelos próximos 3 ataques")
        }

        // Se for true, adiciona +2 turnos de def
        else {jogador.efeitoTempo.turnos+=2
          console.log(`%c${jogador.nome}\nHP:${jogador.hp}`,"font-weight: bold; font-size: 15px;")
          adicionarAcao("Você adicionou defesa por mais 2 ataques")
        }
      }
    
      // Aqui, serão as ações do inimigo--------------------------------------------------
       let escolhaDoInimigo = Math.floor(Math.random() * 3) + 1;

      // Se o inimigo escolher atacar
      if (escolhaDoInimigo === 1) {

       // Calcula o dano do inimigo que não pode ser zero
        let dano = Math.max(inimigo.ataque - jogador.defesa, 0);

        // Verifica se o efeito está ativo
        if (jogador.efeitoTempo.efeito) {

            // Reduz o dano recebido durante a defesa
            dano = Math.max(dano - 10, 0); 
            jogador.efeitoTempo.turnos--;

            // Desativa o efeito quando o turno chegar a zero
            if (jogador.efeitoTempo.turnos <= 0) {
                jogador.efeitoTempo.efeito = false;
                jogador.defesa -= 10;
                console.log(`%c${jogador.nome}\nHP:${jogador.hp}`,"font-weight: bold; font-size: 15px;")
                adicionarAcao("A defesa temporária do jogador acabou.");
            }
        }
        // Aplica o dano no hp do jogador
        jogador.hp -= dano; 
        console.log(`%c${inimigo.tipo}\nHP:${inimigo.hp}`,"color: red; font-weight: bold; font-size: 15px;")
        adicionarAcao(`O inimigo causou ${dano} de dano com o ataque.`);
      }
    // Se escolher usar habilidade
      if (escolhaDoInimigo === 2) {

        // Calcula o dano do inimigo recebendo bônus de habilidade aleatória, o resultado não pode ser zero
        // O inimigo não causa acerto crítico
        let dano = Math.max(inimigo.ataque + dado() - jogador.defesa, 0);
         
        // Aplica o dano no hp do jogador
        jogador.hp -= dano;
        console.log(`%c${inimigo.tipo}\nHP:${inimigo.hp}`,"color: red; font-weight: bold; font-size: 15px;")
        adicionarAcao(`O inimigo causou ${dano} de dano com Habilidade.`);

        // Verifica se o efeito de defesa está ativo
        if (jogador.efeitoTempo.efeito) {

            // Reduz o dano recebido durante a defesa
            dano = Math.max(dano - 10, 0); 
            jogador.efeitoTempo.turnos--;

            // Vai desativar o efeito quando o turno chegar a zero
            if (jogador.efeitoTempo.turnos <= 0) {
                jogador.efeitoTempo.efeito = false;
                jogador.defesa -= 10;
                console.log(`%c${jogador.nome}\nHP:${jogador.hp}`,"font-weight: bold; font-size: 15px;")
                adicionarAcao("A defesa temporária do jogador acabou.");
            }
        }
      }
    // Se escolher defender
      if (escolhaDoInimigo === 3) {
        if (!inimigo.efeitoTempo.efeito) {

            // Ativa o efeito de defesa
            inimigo.efeitoTempo.efeito = true;

            // Define 3 turnos de defesa
            inimigo.efeitoTempo.turnos = 3; 
            
            // Aumenta a defesa do inimigo
            inimigo.defesa += 10; 
            console.log(`%c${inimigo.tipo}\nHP:${inimigo.hp}`,"color: red; font-weight: bold; font-size: 15px;")
            adicionarAcao("O inimigo aumentou a defesa pelos próximos 3 ataques.");} 
            
            else {
            // Adiciona 2 turnos extras
            inimigo.efeitoTempo.turnos += 2; 
            console.log(`%c${inimigo.tipo}\nHP:${inimigo.hp}`,"color: red; font-weight: bold; font-size: 15px;")
            adicionarAcao("O inimigo já está defendendo! Turnos de defesa aumentados.");}
            }
   
// Verifica quem venceu e quem foi derrotado
if (jogador.hp <= 0) {
  adicionarAcao('Você foi derrotado!');} 
  
else if (inimigo.hp <= 0) {
  adicionarAcao('Você venceu o inimigo!');}

}
turno += 1

}
}

// Função para escolher a classe do novo personagem...
function escolherClasse() {
  console.log(
    `%cEscolha uma das classes abaixo: \n[1] Mago \n[2] Elfo \n[3] Anão`,"font-size: 20px;"
  );
  let esc = 0;

  // Laço de repetição para usuário escolher a classe...
  while (esc < 1 || esc > 3) {
    esc = Number(
      prompt("Qual será sua classe?")
    );
  } 
  
  // Condicional que retorna o nome da classe...
  switch(esc) {
    case 1: return "Mago";
    break;

    case 2: return "Elfo";
    break;

    case 3: return "Anão";
    break;
  }
}

// Função para cadastrar novos personagens...
function adicionarPersonagem() {

  // Limite máximo de 5 personagens cadastrados
  if (listaHerois.length >= 5) {
    alert("Número máximo de personagens criados...");
  } else {
    if(listaHerois.length === 0) {
    alert(`Bem vindo a Terra Media`)
  }

    let adicionarHeroi = {
      ...heroi,
      nome: prompt("Qual será o nome do seu Herói?"),
      classe: escolherClasse(),
    };

    // Condições para atualizar os status do personagem
    if (adicionarHeroi.classe === "Mago") {
      novoHeroi = {
        ...adicionarHeroi,
        ataque: 10,
        defesa: 5,
        habilidades: "Conjurar Chamas", //Deve-se criar em objeto para adicionar nome e valor de dano da Habilidade---------------------------------------------
      };
    }
    if (adicionarHeroi.classe === "Elfo") {
      novoHeroi = {
        ...adicionarHeroi,
        ataque: 10,
        defesa: 15,
        habilidades: "Flechas perfurantes",
      };
    }
    if (adicionarHeroi.classe === "Anão") {
      novoHeroi = {
        ...adicionarHeroi,
        ataque: 20,
        defesa: 20,
        habilidades: "Bater com Machado",
      };
    }
    listaHerois.push(novoHeroi);
    return listaHerois;
  }
}

// Função para mostrar todos os atributos do personagem do usuário...
function mostrarAtributos(objeto) {
  // Função que mostra todos os atributos do personagem, como nome, classe, etc...
  console.log(`Os atributos do seu personagem são: \nNome: ${objeto.nome} \nClasse: ${objeto.classe} \nHP: ${objeto.hp}
Habilidades: ${objeto.habilidades} \nNível: ${objeto.nivel} \nAtaque: ${objeto.ataque}
Defesa: ${objeto.defesa}`);
}

// Funcão para listar todos os personagens..
function listarPersonagens() {
  console.clear()
  if (listaHerois.length === 0) {
    alert("Nenhum personagem encontrado");
  }
  
  // Comando para colocar a lista em ordem alfabética...
  listaHerois.sort(function compare(a,b) {
    if(a.nome < b.nome) return -1;
    if(a.nome > b.nome) return 1;
    return 0;
  })

  // Comando para mostrar a lista de personagens e atributos
  console.log(`Lista de Personagens`)
  for (let i = 0; i < listaHerois.length; i++) {
    console.log(`[${i + 1}] Nome: ${listaHerois[i].nome} \nClasse: ${
      listaHerois[i].classe
    } \nHP: ${listaHerois[i].hp} \nhabilidades: ${listaHerois[i].habilidades} \nNível: ${listaHerois[i].nivel}
Ataque: ${listaHerois[i].ataque} \nDefesa: ${listaHerois[i].defesa}`);
  }
}

// Função para excluir personagem pelo seu nome...
function excluirPersonagem() {
  console.clear()
  listarPersonagens();
  if (listaHerois.length > 0) {
    let nomeAExcluir = prompt('Qual o nome do personagem que você quer excluir?') 
    for (let i = 0; i < listaHerois.length; i++) {
      if (
        listaHerois[i].nome.toLowerCase() === nomeAExcluir.toLowerCase()
      ) {
        listaHerois.splice(i, 1);
        alert('Personagem Excluído')
      }
    }
  } else {
    console.log('Você não tem personagens para excluir')
  }
}

// Função para abrir menu dos personagens...
function menuPersonagens() {
  console.clear()
  let escolha = 100;
  while (Number(escolha) !== 1)// Já vi isso em algum lugar..-Luut
      {
        console.log(`%cSe prepare para a batalha`,"font-size: 20px;")
    escolha = Number(
      prompt(
        "[1] Ir para o jogo \n[2] Adicionar Personagens \n[3] Listar Personagens \n[4] Excluir Personagens "
      )
    );

    if (escolha === 2) {
      adicionarPersonagem();
    }

    if (escolha === 3) {
      listarPersonagens();
    }

    if (escolha === 4) {
      excluirPersonagem();
    }
  }
}

// Função para escolher com qual personagem o usuário vai jogar baseado no número que ele escolher...
function escolherPersonagem() {
  console.clear()
  listarPersonagens();
  let pergunta = 12

  while(pergunta <= 0 || pergunta > listaHerois.length) {
  pergunta = Number(
    prompt("Qual dos personagens você vai usar? Escolha o número.")
  );
  seuHeroi = listaHerois[pergunta - 1];
}
  return seuHeroi
  }
  
// Objeto com informações base dos personagens
let heroi = {
  nome: "",
  classe: "",
  nivel: 1,
  hpMax:100,
  hp: 100,
  historico: [""],
  habilidades: '',
  ataque: 10,
  defesa: 10,
  efeitoTempo:{efeito:false, turnos:0,},
  exp:0,
  expMax:10,
  inventario:[],
  equipamento:[]
};

// Array com inimígos que devem ser derrotados 
let inimigos = [
  { tipo: 'Orc', exp:5,hp: 50, ataque: 10, defesa: 5, efeitoTempo: { efeito: false, turnos: 0 },inventario: [armas[Math.floor(Math.random() * armas.length)],
    armaduras[Math.floor(Math.random() * armaduras.length)]]},
  { tipo: 'Troll', exp:10,hp: 80, ataque: 15, defesa: 8, efeitoTempo: { efeito: false, turnos: 0 },inventario: [armas[Math.floor(Math.random() * armas.length)],
  armaduras[Math.floor(Math.random() * armaduras.length)]] },
  { tipo: 'Uruk-hai', exp:10,hp: 60, ataque: 12, defesa: 6, efeitoTempo: { efeito: false, turnos: 0 },inventario: [armas[Math.floor(Math.random() * armas.length)],
  armaduras[Math.floor(Math.random() * armaduras.length)]] },
  { tipo: 'Nazgûl', exp:15,hp: 60, ataque: 14, defesa: 6, efeitoTempo: { efeito: false, turnos: 0 },inventario: [armas[Math.floor(Math.random() * armas.length)],
  armaduras[Math.floor(Math.random() * armaduras.length)]] },
  { tipo: 'Balrog', exp:25,hp: 120, ataque: 20, defesa: 10, efeitoTempo: { efeito: false, turnos: 0 },inventario: [armas[Math.floor(Math.random() * armas.length)],
  armaduras[Math.floor(Math.random() * armaduras.length)]] },
  { tipo: 'Cavaleiro Negro', exp:15,hp: 70, ataque: 18, defesa: 7, efeitoTempo: { efeito: false, turnos: 0 },inventario: [armas[Math.floor(Math.random() * armas.length)],
  armaduras[Math.floor(Math.random() * armaduras.length)]] },
  { tipo: 'Saruman', exp:15,hp: 90, ataque: 16, defesa: 5, efeitoTempo: { efeito: false, turnos: 0 },inventario: [armas[Math.floor(Math.random() * armas.length)],
  armaduras[Math.floor(Math.random() * armaduras.length)]] },
  { tipo: 'Sauron', exp:25,hp: 200, ataque: 25, defesa: 15, efeitoTempo: { efeito: false, turnos: 0 },inventario: [armas[Math.floor(Math.random() * armas.length)],
  armaduras[Math.floor(Math.random() * armaduras.length)]] },
  { tipo: 'Gollum', exp:10,hp: 30, ataque: 8, defesa: 3, efeitoTempo: { efeito: false, turnos: 0 },inventario: [armas[Math.floor(Math.random() * armas.length)],
  armaduras[Math.floor(Math.random() * armaduras.length)]] },
  { tipo: 'Smaug', exp:30,hp: 400, ataque: 31, defesa: 20, efeitoTempo: { efeito: false, turnos: 0 },inventario: [armas[Math.floor(Math.random() * armas.length)],
  armaduras[Math.floor(Math.random() * armaduras.length)]] }
];

let listaHerois = [];

adicionarPersonagem();
menuPersonagens();

// Opção para cadastrar personagem para poder iniciar o jogo...
if (listaHerois.length === 0) {
  console.log(
    "%cParece que você não tem nenhum personagem no momento, crie o seu herói...","font-size: 20px;"
  );
  adicionarPersonagem();
}

// Laço para repetir o jogo
while(jogarNovamente === 1) {
  

// Função para escolher o personagem...
escolherPersonagem()

// Variável que escolhe um inimigo aleatório da lista...
let inimigo= inimigos[Math.floor(Math.random() * inimigos.length)]             

console.clear();
console.log("%cAtenção, você está adentrando as terras de MORDOR","font-size: 20px;");

// Menu para iniciar a batalha
while(seuHeroi.hp > 0 && inimigo.hp > 0) {
  console.log(`%c[1] Atravessar os portões! \n[2] Ver seus atributos \n[3] Trocar personagem \n[4] Mostrar Histórico`,"font-size: 15px;");
  let escolhaJogador = Number(
    prompt("Você tem coragem suficiente para atravessar os portões de Mordor, onde a esperança é apenas um eco distante?")
  );  

  // Aqui inicia a lógica de batalha
  if(escolhaJogador===1){  
    console.clear();
    console.log("%cBATALHA:",estiloBatalha)
    console.log(`%c${inimigo.tipo}`,estiloInimigo)
      alert(`Prepare-se para Batalha!\nVocê encontrou um ${inimigo.tipo}`)
      
      batalha(seuHeroi,inimigo)
      // PERSONAGEM DO JOGADOR É seuHeroi
      if(inimigo.hp <= 0) {
      alert("Parabéns, você derrotou um inimigo, mas ainda haverão muitos pela frente.. ")
      console.clear();
      // Aqui vou fazer a soma de exp quando o inimigo morre
        seuHeroi.exp+=inimigo.exp
        
        //função q verifica se o exp atingiu o necessário para upar e upa se tiver atingido
        lvlUp(seuHeroi)
        adicionarAcao(`você recebeu ${inimigo.exp} de experiência`)
        console.clear()
    }
      if(seuHeroi.hp === -100) {
        console.log('Você fugiu da batalha!')
        console.log('Você é uma vergonha para sua raça!')
      }
  }

  if (escolhaJogador === 2) {
    console.clear()
    mostrarAtributos(seuHeroi);
  }

  if(escolhaJogador === 3) {
    escolherPersonagem()
  }

  if(escolhaJogador === 4) {
    exibirHistorico()
  }
}

// Pergunta para jogar novamente
console.log(`[1] Sim \n[2] Não`)
jogarNovamente = Number(prompt('Deseja adentrar mais profundamente em Mordor?'))
}

console.log('OBRIGADO POR JOGAR!')