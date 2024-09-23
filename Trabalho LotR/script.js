
let jogarNovamente = 'sim'

// Laço para repetir o jogo
while(jogarNovamente === 'sim') {
console.clear()

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
  let rodada = 1

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
        console.log(`RODADA Nº${rodada}`)
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
                    console.log(`%c${inimigo.tipo}`,"color: red; font-weight: bold; font-size: 15px;")
                    adicionarAcao("A defesa temporária do inimigo acabou.");
                }
              }
       
            // Inimigo toma o dano que sobra depois de subtrair da sua defesa
            inimigo.hp-=dano
            console.log(`%c${jogador.nome}`,"font-weight: bold; font-size: 15px;")
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
                      console.log(`%c${inimigo.tipo}`,"color: red; font-weight: bold; font-size: 15px;")
                      adicionarAcao("A defesa temporária do inimigo acabou.");
            }}
                inimigo.hp-=dano
                console.log(`%c${jogador.nome}`,"font-weight: bold; font-size: 15px;")
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
                      console.log(`%c${inimigo.tipo}`,"color: red; font-weight: bold; font-size: 15px; ")
                      adicionarAcao("A defesa temporária do inimigo acabou.");
            }}
                console.log(`%c${jogador.nome}`,"font-weight: bold; font-size: 15px;")
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
          console.log(`%c${jogador.nome}`,"font-weight: bold; font-size: 15px;")
          adicionarAcao("Você aumentou sua defesa pelos próximos 3 ataques")
        }

        // Se for true, adiciona +2 turnos de def
        else {jogador.efeitoTempo.turnos+=2
          console.log(`%c${jogador.nome}`,"font-weight: bold; font-size: 15px;")
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
                console.log(`%c${jogador.nome}`,"font-weight: bold; font-size: 15px;")
                adicionarAcao("A defesa temporária do jogador acabou.");
            }
        }
        // Aplica o dano no hp do jogador
        jogador.hp -= dano; 
        console.log(`%c${inimigo.tipo}`,"color: red; font-weight: bold; font-size: 15px;")
        adicionarAcao(`O inimigo causou ${dano} de dano com o ataque.`);
      }
    // Se escolher usar habilidade
      if (escolhaDoInimigo === 2) {

        // Calcula o dano do inimigo recebendo bônus de habilidade aleatória, o resultado não pode ser zero
        // O inimigo não causa acerto crítico
        let dano = Math.max(inimigo.ataque + dado() - jogador.defesa, 0);

        // Verifica se o efeito de defesa está ativo
        if (jogador.efeitoTempo.efeito) {

            // Reduz o dano recebido durante a defesa
            dano = Math.max(dano - 10, 0); 
            jogador.efeitoTempo.turnos--;

            // Vai desativar o efeito quando o turno chegar a zero
            if (jogador.efeitoTempo.turnos <= 0) {
                jogador.efeitoTempo.efeito = false;
                jogador.defesa -= 10;
                console.log(`%c${jogador.nome}`,"font-weight: bold; font-size: 15px;")
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
            console.log(`%c${inimigo.tipo}`,"color: red; font-weight: bold; font-size: 15px;")
            adicionarAcao("O inimigo aumentou a defesa pelos próximos 3 ataques.");} 
            
            else {
            // Adiciona 2 turnos extras
            inimigo.efeitoTempo.turnos += 2; 
            console.log(`%c${inimigo.tipo}`,"color: red; font-weight: bold; font-size: 15px;")
            adicionarAcao("O inimigo já está defendendo! Turnos de defesa aumentados.");}
            }
   

  adicionarAcao(`HP do Jogador: ${jogador.hp}, HP do Inimigo: ${inimigo.hp}`)

// Verifica quem venceu e quem foi derrotado
if (jogador.hp <= 0) {
  adicionarAcao('Você foi derrotado!');} 
  
else if (inimigo.hp <= 0) {
  adicionarAcao('Você venceu o inimigo!');}

}
rodada += 1

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
        defesa: 20,
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
        defesa: 5,
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
  hp: 100,
  historico: [""],
  habilidades: '',
  ataque: 10,
  defesa: 10,
  efeitoTempo:{efeito:false, turnos:0,}
};

// Array com inimígos que devem ser derrotados 
let inimigos = [
  { tipo: 'Orc', hp: 50, ataque: 10, defesa: 5, efeitoTempo: { efeito: false, turnos: 0 } },
  { tipo: 'Troll', hp: 80, ataque: 15, defesa: 8, efeitoTempo: { efeito: false, turnos: 0 } },
  { tipo: 'Uruk-hai', hp: 60, ataque: 12, defesa: 6, efeitoTempo: { efeito: false, turnos: 0 } },
  { tipo: 'Nazgûl', hp: 60, ataque: 14, defesa: 6, efeitoTempo: { efeito: false, turnos: 0 } },
  { tipo: 'Balrog', hp: 120, ataque: 20, defesa: 10, efeitoTempo: { efeito: false, turnos: 0 } },
  { tipo: 'Cavaleiro Negro', hp: 70, ataque: 18, defesa: 7, efeitoTempo: { efeito: false, turnos: 0 } },
  { tipo: 'Saruman', hp: 90, ataque: 16, defesa: 5, efeitoTempo: { efeito: false, turnos: 0 } },
  { tipo: 'Sauron', hp: 200, ataque: 25, defesa: 15, efeitoTempo: { efeito: false, turnos: 0 } },
  { tipo: 'Gollum', hp: 30, ataque: 8, defesa: 3, efeitoTempo: { efeito: false, turnos: 0 } },
  { tipo: 'Warg', hp: 40, ataque: 11, defesa: 4, efeitoTempo: { efeito: false, turnos: 0 } }
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

// Função para escolher o personagem...
escolherPersonagem()

// Variável que escolhe um inimigo aleatório da lista...
let inimigo= inimigos[Math.floor(Math.random() * inimigos.length)]             

console.clear();
console.log("%cAtenção, você está adentrando as terras de MORDOR","font-size: 20px;");

// Menu para iniciar a batalha
while(seuHeroi.hp > 0 && inimigo.hp > 0) {
  console.log(`%c[1] Começar a luta \n[2] Ver seus atributos \n[3] Trocar personagem`,"font-size: 15px;");
  let escolhaJogador = Number(
    prompt("Você está prestes a encontrar com o inimigo.\nO que deseja fazer?")
  );  

  // Aqui inicia a lógica de batalha
  if(escolhaJogador===1){  
    console.clear();
    console.log("%cBATALHA:","font-weight: bold; font-size: 20px;")
      alert(`Prepare-se para Batalha!\nVocê encontrou um ${inimigo.tipo}`)
      
      batalha(seuHeroi,inimigo)
      // PERSONAGEM DO JOGADOR É seuHeroi
      if(inimigo.hp <= 0) {
      alert("Parabéns, você derrotou um inimigo, mas ainda haverão muitos pela frente.. ")
    }
      if(seuHeroi.hp === -100) {
        console.log('Você fugiu da batalha!')
        console.log('Você é uma vergonha para sua raça!')
      }
  }

  if (escolhaJogador === 2) {
    mostrarAtributos(seuHeroi);
  }

  if(escolhaJogador === 3) {
    escolherPersonagem()
  }
}

jogarNovamente = prompt('Deseja jogar novamente? Sim ou Não').toLowerCase()
}

console.log('OBRIGADO POR JOGAR!')
