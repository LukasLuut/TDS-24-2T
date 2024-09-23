// Array de itens que PODEM ser implementados se der tempo 
let armas = [
  { classe: 'arma', tipo: 'Narsil', dano: 15 },
  { classe: 'arma', tipo: 'Glamdring', dano: 12 },
  { classe: 'arma', tipo: 'Orcrist', dano: 11 },
  { classe: 'arma', tipo: 'Espada', dano: 9 },
  { classe: 'arma', tipo: 'Adaga', dano: 6 },
  { classe: 'arma', tipo: 'Lança', dano: 9 },
  { classe: 'arma', tipo: 'Arco', dano: 9 },
  { classe: 'arma', tipo: 'Machado', dano: 12 },
  { classe: 'arma', tipo: 'Besta de Mordor', dano: 7 },
  { classe: 'arma', tipo: 'Clava de Troll', dano: 14 },
  { classe: 'arma', tipo: 'Foice', dano: 13 },
  { classe: 'arma', tipo: 'Espada de Gondor', dano: 11 },
  { classe: 'arma', tipo: 'Martelo', dano: 12 },
  { classe: 'arma', tipo: 'Punhal', dano: 5 },
  
];
let armaduras = [
  { classe: 'armadura', tipo: 'Cota de Malha', defesa: 5 },
  { classe: 'armadura', tipo: 'Armadura de Placas', defesa: 10 },
  { classe: 'armadura', tipo: 'Cota de Couro', defesa: 3 },
  { classe: 'armadura', tipo: 'Armadura de Escamas', defesa: 7 },
  { classe: 'armadura', tipo: 'Armadura de Mitrhil', defesa: 19 },
  { classe: 'armadura', tipo: 'Capa de Guerra', defesa: 4 },
  { classe: 'armadura', tipo: 'Armadura de Montaria', defesa: 9 },
  { classe: 'armadura', tipo: 'Cota de Malha Completa', defesa: 12 },
  { classe: 'armadura', tipo: 'Armadura de Peitoral', defesa: 6 },
  { classe: 'armadura', tipo: 'Armadura de Gondor', defesa: 11 },
  { classe: 'armadura', tipo: 'Cota de Malha de Cavaleiro', defesa: 11 },
  { classe: 'armadura', tipo: 'Armadura de Batalha', defesa: 10 },
  { classe: 'armadura', tipo: 'Armadura de Gladiador', defesa: 8 }
];



// Função para adicionar uma ação ao histórico:
function consoleLog(acao) {
  console.log(acao)

 //new Date() pega a data e hora do computador em um array   .toLocaleTimeString() converte para uma versão da hora mas em string
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

//Array com inimígos que devem ser derrotados 
let inimigos = [
    { classe: 'monstro', tipo: 'Orc', hp: 50, ataque: 10, defesa: 5, iniciativa:0, efeitoTempo:{efeito:false, turnos:0,}},
    { classe: 'monstro', tipo: 'Troll', hp: 80, ataque: 15, defesa: 8, iniciativa:0, efeitoTempo:{efeito:false, turnos:0,}},
    { classe: 'monstro', tipo: 'Uruk-hai', hp: 60, ataque: 12, defesa: 6, iniciativa:0, efeitoTempo:{efeito:false, turnos:0,}},
    { classe: 'monstro', tipo: 'Nazgûl', hp: 60, ataque: 14, defesa: 6, iniciativa:0, efeitoTempo:{efeito:false, turnos:0,}},
    { classe: 'monstro', tipo: 'Balrog', hp: 120, ataque: 20, defesa: 10, iniciativa:0, efeitoTempo:{efeito:false, turnos:0,}}
];

// Função que rola um dado D20 para probabilidades 
function dado(){return Math.floor(Math.random() * 20) + 1;}

//Função que verifica iniciativa antes da batalha
function rolarIniciativa(jogador, inimigo) {    
  //Realiza loop enquanto os valores forem iguais, para não ocorrer empate
  do {
      jogador.iniciativa = dado();
      inimigo.iniciativa = dado();
  } while (jogador.iniciativa === inimigo.iniciativa);
}
//Função de batalha, está muito grande e deve ser dividida em partes menores para melhor manutenção
function batalha(jogador,inimigo){
    
    

// enquanto o jogador ou o inimigo estiverem vivos, o loop continua
while(jogador.hp>0 && inimigo.hp>0){

  //Verifica quem vai atacar
  rolarIniciativa(jogador,inimigo)  

    // Se o jogador for mais rápido
  if(jogador.iniciativa>inimigo.iniciativa){

        //pergunta o que o jogador deseja fazer
        let escolha=Number(prompt(`O que deseja fazer:\n[1]Atacar \n[2]Usar Habilidade \n[3]Defender`)) 
        
        // se escolher atacar, rola um ataque simples, dano-defesa 
        if(escolha===1){ 

             //esse Math.max serve para que o dano não seja negativo, (valor1, valor2, valor3) ele pega o maior
             //se o resultado da operação matemática for negativo, ele pega o valor 0 que é maior, então o dano nunca vai ser negativo.
            let dano=Math.max((jogador.ataque-inimigo.defesa),0)

             //verifica se o efeito de def do inimigo está ativo
             //Esse efeito de tempo pode ser implementado em uma função separada, por ser usado constantemente
               if (inimigo.efeitoTempo.efeito) {

                //reduz o dano recebido durante a defesa
                dano = Math.max(dano - 10, 0); 
                inimigo.efeitoTempo.turnos--;

                //desativa o efeito quando o turnos chegar a zero
                if (inimigo.efeitoTempo.turnos <= 0) {
                    inimigo.efeitoTempo.efeito = false;
                    inimigo.defesa -= 10;
                    consoleLog("A defesa temporária do inimigo acabou.");
                }
              }
       
            // Inimigo toma o dano que sobra depois de subtrair da sua defesa
            inimigo.hp-=dano
            consoleLog(`Você causou ${dano} de dano com um ataque. `)
          }
        
        // se escolher utilizar habilidade especial
        //jogador.ataque pode ser substituído por jogador.habilidades[x] que pode ser escolhido pelo jogador
        if(escolha===2){

            //verifica se o jogador rolou dano Crítico 
            if(dado()>=18){ 

                //se for crítico, inimigo toma o dobro de dano
                let dano=jogador.ataque+(dado())*2

                //verifica se o efeito de def do inimigo está ativo
                if (inimigo.efeitoTempo.efeito) {

                  //reduz o dano recebido durante a defesa
                  dano = Math.max(dano - 10, 0); 
                  inimigo.efeitoTempo.turnos--;
  
                  //desativa o efeito quando o turno chegar a zero
                  if (inimigo.efeitoTempo.turnos <= 0) {
                      inimigo.efeitoTempo.efeito = false;
                      inimigo.defesa -= 10;
                      consoleLog("A defesa temporária do inimigo acabou.");
            }}
                inimigo.hp-=dano

                consoleLog(`VOCÊ CAUSOU ${dano} DE DANO EM UM ACERTO CRÍTICO COM SUA HABILIDADE ${jogador.habilidades[0]}`)
            }

            // não sendo crítico, o inimigo toma o dano de ataque + um bonus pela habilidade 
            else{
                let dano=jogador.ataque + dado()

                //verifica se o efeito de def do inimigo está ativo
                if (inimigo.efeitoTempo.efeito) {

                  //reduz o dano recebido durante a defesa
                  dano = Math.max(dano - 10, 0); 
                  inimigo.efeitoTempo.turnos--;
  
                  //desativa o efeito quando o turnos chegar a zero
                  if (inimigo.efeitoTempo.turnos <= 0) {
                      inimigo.efeitoTempo.efeito = false;
                      inimigo.defesa -= 10;
                      consoleLog("A defesa temporária do inimigo acabou.");
            }}

                consoleLog(`você causou ${dano} de dano com sua habilidade`)
                inimigo.hp-=dano
            }

        }

        //se o jogador escolher defender, recebe um bonus de defesa temporário
        if(escolha===3){
          
          //Verifica se o efeito de defesa está ativado, se for false, muda para true e adiciona turnos e pontos de def
          if(!jogador.efeitoTempo.efeito){
          jogador.efeitoTempo.efeito=true
          jogador.efeitoTempo.turnos+=3
          jogador.defesa+=10

          consoleLog("Você aumentou sua defesa pelos próximos 3 ataques")
        }

        //se for true, adiciona +2 turnos de def
        else {jogador.efeitoTempo.turnos+=2
          consoleLog("Você adicionou defesa por mais 2 ataques")
        }
      }
    
     } // Aqui, serão as ações do inimigo------------------------------------------------------------------------------------------------------------------
  else {
      let escolhaDoInimigo = Math.floor(Math.random() * 3) + 1;

      //se escolher atacar
      if (escolhaDoInimigo === 1) {

       //caucula o dano do inimigo que não pode ser zero
        let dano = Math.max(inimigo.ataque - jogador.defesa, 0);

        //verifica se o efeito está ativo
        if (jogador.efeitoTempo.efeito) {

            //reduz o dano recebido durante a defesa
            dano = Math.max(dano - 10, 0); 
            jogador.efeitoTempo.turnos--;

            //desativa o efeito quando o turnos chegar a zero
            if (jogador.efeitoTempo.turnos <= 0) {
                jogador.efeitoTempo.efeito = false;
                jogador.defesa -= 10;
                consoleLog("A defesa temporária do jogador acabou.");
            }
        }
        //aplica o dano no hp do jogador
        jogador.hp -= dano; 
        
        consoleLog(`O inimigo causou ${dano} de dano com o ataque.`);
      }
    //se escolher usar habilidade
      if (escolhaDoInimigo === 2) {

        //caucula o dano do inimigo recebendo bonus de habilidade aleatória, o resultado não pode ser zero
        //o inimigo não causa acerto crítico
        let dano = Math.max(inimigo.ataque + dado() - jogador.defesa, 0);

        //verifica se o efeito de def está ativo
        if (jogador.efeitoTempo.efeito) {

            //reduz o dano recebido durante a defesa
            dano = Math.max(dano - 10, 0); 
            jogador.efeitoTempo.turnos--;

            //vai desativar o efeito quando o turnos chegar a zero
            if (jogador.efeitoTempo.turnos <= 0) {
                jogador.efeitoTempo.efeito = false;
                jogador.defesa -= 10;
                consoleLog("A defesa temporária do jogador acabou.");
            }
        }
      }
    //Se escolher defender
      if (escolhaDoInimigo === 3) {
        if (!inimigo.efeitoTempo.efeito) {

            //ativa o efeito de defesa
            inimigo.efeitoTempo.efeito = true;

            //define 3 turnos de defesa
            inimigo.efeitoTempo.turnos = 3; 
            
            // Aumenta a defesa do inimigo
            inimigo.defesa += 10; 
            consoleLog("O inimigo aumentou a defesa pelos próximos 3 ataques.");} 
            
            else {
            //adiciona 2 turnos extras
            inimigo.efeitoTempo.turnos += 2; 
            consoleLog("O inimigo já está defendendo! Turnos de defesa aumentados.");}
            }
   }

  consoleLog(`HP do Jogador: ${jogador.hp}, HP do Inimigo: ${inimigo.hp}`)
}
//Verifica quem venceu e quem foi derrotado
if (jogador.hp <= 0) {
  consoleLog('Você foi derrotado!');} 
  
else if (inimigo.hp <= 0) {
  consoleLog('Você venceu o inimigo!');}

}




let heroi = {
  nome: "",
  classe: "",
  nivel: 1,
  hp: 100,
  historico: [""],
  habilidades: "",
  ataque: 10,
  defesa: 10,
  iniciativa: 21, //criei iniciativa para decidir quem ataca primeiro, será utilizado 1x sempre que iniciar o combate-Luut
  efeitoTempo:{efeito:false, turnos:0,}//Criei para efeito temporário da defesa, pode-se implementar outros efeitos, como buff de ataque
};

let listaHerois = [];

// Função para escolher a classe do novo personagem...
function escolherClasse() {
  console.log(
    `Escolha uma das classes abaixo: \n[1] Mago \n[2] Bardo \n[3] Bárbaro`
  );
  let esc = 0;

  // Laço de repetição para usuário escolher a classe...
  while (esc < 1 || esc > 3) {
    esc = Number(
      prompt("Qual será a classe do seu personagem? Escolha o número")
    );
  } 
  
  // Condicional que retorna o nome da classe...
  switch(esc) {
    case 1: return "Mago";
    break;

    case 2: return "Bardo";
    break;

    case 3: return "Bárbaro";
    break;
  }
}

// Função para cadastrar novos personagens...
function adicionarPersonagem() {

  // Limite máximo de 5 personagens cadastrados
  if (listaHerois.length >= 5) {
    alert("Número máximo de personagens criados...");
  } else {
    let adicionarHeroi = {
      ...heroi,
      nome: prompt("Qual será o nome do seu personagem?"),
      classe: escolherClasse(),
    };

    // Condições para atualizar os status do personagem
    if (adicionarHeroi.classe === "Mago") {
      novoHeroi = {
        ...adicionarHeroi,
        ataque: 10,
        defesa: 20,
        habilidades: "Conjurar Chamas", //Deve-se criar em objeto para adicionar nome e valor de dano da Habilidade---------------------------------------------
      };
    }
    if (adicionarHeroi.classe === "Bardo") {
      novoHeroi = {
        ...adicionarHeroi,
        ataque: 10,
        defesa: 15,
        habilidades: "Tocar flauta",
      };
    }
    if (adicionarHeroi.classe === "Bárbaro") {
      novoHeroi = {
        ...adicionarHeroi,
        ataque: 20,
        defesa: 5,
        habilidades: "Bater com porrete",
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
Histórico de ações: ${objeto.historico} \nhabilidades: ${objeto.habilidades} \nNível: ${objeto.nivel} \nAtaque: ${objeto.ataque}
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

console.clear();
adicionarPersonagem();
menuPersonagens();

// Opção para cadastrar personagem para poder iniciar o jogo...
if (listaHerois.length === 0) {
  console.log(
    "Parece que você não tem nenhum personagem no momento, crie o seu herói..."
  );
  adicionarPersonagem();
}

// Função para escolher com qual personagem o usuário vai jogar baseado no número que ele escolher...
function escolherPersonagem() {
console.clear()
listarPersonagens();
let pergunta = Number(
  prompt("Qual dos personagens você vai usar? Escolha o número.")
);
seuHeroi = listaHerois[pergunta - 1];
return seuHeroi
}

escolherPersonagem()
console.clear();
console.log("OLÁ, BEM VINDO AO NOSSO GRANDE RPG ");

console.log(`[1] Começar a luta \n[2] Ver seus atributos \n[3] Trocar personagem`);
let escolhaJogador = Number(
  prompt("Você encontrou o inimigo.")
);
//while (escolhaJogador > 0 || escolhaJogador < 5) {
  
  // Aqui inicia a lógica de batalha-Luut
  if(escolhaJogador===1){  
    let inimigo=inimigos[Math.floor(Math.random() * inimigos.length)]             
      alert(`Prepare-se para Batalha!\nVocê encontrou um ${inimigo.tipo}`)
      
      batalha(seuHeroi,inimigo)
      // PERSONAGEM DO JOGADOR É seuHeroi
      escolhaJogador = Number(
        prompt("Você deseja fazer agora???"))
  
  }

  if (escolhaJogador === 2) {
    mostrarAtributos();
  }

  if(escolhaJogador === 3) {
    escolherPersonagem()
  }
  
//}