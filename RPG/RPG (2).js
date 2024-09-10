/* 
PONTOS PARA CORRIGIR: 
1. Corrigir dano da arma busca um valor aleatório e o torna fixo 
2. Vendas na loja apresentam NaN e undefined 
3. LevelUp não conclui SWTICH and CASE
4. Adicionar ao MENU a opção de ver itens equipados
5. Corrigir contador negativo na vida dos inimigos
6. Criar sistema de habilidades
7. Criar sistema de poções
8. Criar sistema de defesa 
9. Criar sistema de ataque inimigo

*/

let jogador = {
    nome: "",classe: "",lvl:1,expMax:10, exp:0, moeda:100, dano:0, hp:100, for: 0, def: 0, mag: 0, des: 0,
    equipamento:[], inventario:[], hpMax:100, forMax: 0, defMax: 0, magMax: 0, desMax: 0,
}
let armas = [
    { classe: 'arma', tipo: 'Espada Longa', dano: dado('D8'), hpMax: 0, for: 5, def: 0, mag: 0, des: 0, moedas: 10 },
    { classe: 'arma', tipo: 'Besta Pesada', dano: 50, hpMax: 0, for: 0, def: 0, mag: 0, des: 0, moedas: 15 },
    { classe: 'arma', tipo: 'Machado de Batalha', dano: dado('D8'), hpMax: 0, for: 6, def: 0, mag: 0, des: 0, moedas: 12 },
    { classe: 'arma', tipo: 'Varinha Mágica', dano: dado('D6'), hpMax: 0, for: 0, def: 0, mag: 8, des: 0, moedas: 20 },
    { classe: 'arma', tipo: 'Alabarda', dano: dado('D10'), hpMax: 0, for: 8, def: 0, mag: 0, des: 0, moedas: 18 },
    { classe: 'arma', tipo: 'Espada Curta', dano: dado('D6'), hpMax: 0, for: 4, def: 0, mag: 0, des: 0, moedas: 8 },
    { classe: 'arma', tipo: 'Bastão Arcano', dano: dado('D8'), hpMax: 0, for: 0, def: 0, mag: 6, des: 0, moedas: 14 },
    { classe: 'arma', tipo: 'Foice', dano: dado('D10'), hpMax: 0, for: 7, def: 0, mag: 0, des: 0, moedas: 16 },
    { classe: 'arma', tipo: 'Adaga', dano: dado('D4'), hpMax: 0, for: 3, def: 0, mag: 0, des: 0, moedas: 6 },
    { classe: 'arma', tipo: 'Arco Longo', dano: dado('D8'), hpMax: 0, for: 0, def: 0, mag: 0, des: 6, moedas: 15 },
    { classe: 'arma', tipo: 'Espada Bastarda', dano: dado('D10'), hpMax: 0, for: 7, def: 0, mag: 0, des: 0, moedas: 17 },
    { classe: 'arma', tipo: 'Cajado de Elementalista', dano: dado('D6'), hpMax: 0, for: 0, def: 0, mag: 7, des: 0, moedas: 18 },
    { classe: 'arma', tipo: 'Martelo de Guerra', dano: dado('D8'), hpMax: 0, for: 6, def: 0, mag: 0, des: 0, moedas: 13 },
    { classe: 'arma', tipo: 'Tridente', dano: dado('D8'), hpMax: 0, for: 5, def: 0, mag: 0, des: 0, moedas: 12 },
    { classe: 'arma', tipo: 'Sabre', dano: dado('D6'), hpMax: 0, for: 4, def: 0, mag: 0, des: 0, moedas: 7 }
];
let armaduras = [
    { classe: 'armadura', tipo: 'Placas de Mithral', dano: 0, hpMax: 25, for: 8, def: 6, mag: 0, des: 0, moedas: 30 },
    { classe: 'armadura', tipo: 'Couro de Dragão', dano: 0, hpMax: 20, for: 4, def: 4, mag: 0, des: 0, moedas: 25 },
    { classe: 'armadura', tipo: 'Cota de Malha', dano: 0, hpMax: 15, for: 5, def: 5, mag: 0, des: 0, moedas: 20 },
    { classe: 'armadura', tipo: 'Peitoral Élfico', dano: 0, hpMax: 18, for: 4, def: 6, mag: 0, des: 0, moedas: 22 },
    { classe: 'armadura', tipo: 'Elmo de Guerra', dano: 0, hpMax: 0, for: 3, def: 3, mag: 0, des: 0, moedas: 15 },
    { classe: 'armadura', tipo: 'Bracelete de Proteção', dano: 0, hpMax: 0, for: 2, def: 2, mag: 0, des: 0, moedas: 10 },
    { classe: 'armadura', tipo: 'Botas de Velocidade', dano: 0, hpMax: 0, for: 1, def: 2, mag: 0, des: 5, moedas: 12 },
    { classe: 'armadura', tipo: 'Elmo de Resistência', dano: 0, hpMax: 0, for: 2, def: 4, mag: 0, des: 0, moedas: 18 },
    { classe: 'armadura', tipo: 'Escudo Mágico', dano: 0, hpMax: 0, for: 3, def: 5, mag: 0, des: 0, moedas: 25 },
    { classe: 'armadura', tipo: 'Luvas de Destreza', dano: 0, hpMax: 0, for: 1, def: 1, mag: 0, des: 3, moedas: 8 },
    { classe: 'armadura', tipo: 'Armadura de Placas', dano: 0, hpMax: 30, for: 10, def: 8, mag: 0, des: 0, moedas: 35 },
    { classe: 'armadura', tipo: 'Colete de Couro', dano: 0, hpMax: 12, for: 3, def: 3, mag: 0, des: 0, moedas: 17 },
    { classe: 'armadura', tipo: 'Elmo de Ferro', dano: 0, hpMax: 0, for: 4, def: 4, mag: 0, des: 0, moedas: 20 },
    { classe: 'armadura', tipo: 'Capa de Proteção', dano: 0, hpMax: 0, for: 2, def: 2, mag: 0, des: 0, moedas: 13 },
    { classe: 'armadura', tipo: 'Botas de Resistência', dano: 0, hpMax: 0, for: 1, def: 2, mag: 0, des: 4, moedas: 14 }
];
let loja = [
    { id: 1, nome: 'Espada Mágica', tipo: 'arma', preco: 50, atributos: { dano: dado('D6'), hpMax: 0, for: 8, def: 2, mag: 0, des: 0 } },
    { id: 2, nome: 'Armadura de Aço', tipo: 'armadura', preco: 40, atributos: { dano: 0, hpMax: 20, for: 0, def: 8, mag: 0, des: 0 } },
    { id: 3, nome: 'Cajado das Trevas', tipo: 'arma', preco: 60, atributos: { dano: dado('D6'), hpMax: 0, for: 0, def: 0, mag: 10, des: 0 } },
    { id: 4, nome: 'Botas Velozes', tipo: 'armadura', preco: 30, atributos: { dano: 0, hpMax: 0, for: 0, def: 3, mag: 0, des: 5 } }
]
let inimigo=randEnemy(
)
function randEnemy() {
    let enemyClasses = [
        { tipo: 'Humanoide', nome: 'Goblin', dano: dado('D6'), hp: 30, def: 2, for: 8, exp:10, },
        { tipo: 'Humanoide', nome: 'Orc', dano: dado('D8'), hp: 40, def: 3, for: 10, exp:10, },
        { tipo: 'Besta', nome: 'Lobo', dano: dado('D6'), hp: 25, def: 1, for: 6 , exp:10,},
        { tipo: 'Besta', nome: 'Urso', dano: dado('D10'), hp: 50, def: 4, for: 12, exp:10, },
        { tipo: 'Monstro Mágico', nome: 'Banshee', dano: dado('D8'), hp: 35, def: 2, for: 6, mag: 8 , exp:10,},
        { tipo: 'Monstro Mágico', nome: 'Dragão Jovem', dano: dado('D12'), hp: 80, def: 6, for: 18, mag: 12 , exp:10,},
    ];

    let selectedClass = enemyClasses[Math.floor(Math.random() * enemyClasses.length)];

    let inimigo = {
        tipo: selectedClass.tipo,
        lvl: 1, // Nível do inimigo (pode ser ajustado conforme necessidade)
        nome: selectedClass.nome,
        dano: selectedClass.dano,
        hp: selectedClass.hp,
        def: selectedClass.def,
        for: selectedClass.for,
        mag: selectedClass.mag || 0, // Atributo mágico opcional
        exp: selectedClass.exp,
        inventario: [
            armas[Math.floor(Math.random() * armas.length)],
            armaduras[Math.floor(Math.random() * armaduras.length)]
        ],
        moedasDropadas: Math.floor(Math.random() * 11) // Moedas variando de 0 a 10
    };

    return inimigo;
}
function sta (){
    let sta = `==================jogador===================
    Nome: ${jogador.nome}
    Lvl: ${jogador.lvl}
    Classe: ${jogador.classe}
    hHp: ${jogador.hp}/${jogador.hpMax}
    Forca: ${jogador.forMax}
    Def: ${jogador.defMax}
    Mag: ${jogador.magMax}
    Des: ${jogador.desMax}
    Xp: ${jogador.exp}/${jogador.expMax}`
    return sta
}
function lvlUp(jog){
    if (jog.exp>=jog.expMax){
        alert('Você ficou mais forte!')
        jog.expMax+=50
        jog.exp=0
        jog.lvl+=1
        switch(jog.classe){
        case "Mago": {
            jog.hpMax+=10
            jog.for+=1
            jog.def+=1
            jog.mag+=3
            jog.des+=1
            break;
        }
        case "Guerreiro": {
            jog.hpMax+=10
            jog.for+=2
            jog.def+=2
            jog.mag+=1
            jog.des+=1
            break;
        }
        case "Arqueiro":{
            jog.hpMax+=10
            jog.for+=1
            jog.def+=2
            jog.mag+=1
            jog.des+=2
            break;
        }
        case "Bardo":{
            jog.hpMax+=10
            jog.for+=1
            jog.def+=1
            jog.mag+=2
            jog.des+=2
            break;
        }
        case "Indigente":{
            jog.hpMax+=15
            jog.for+=2
            jog.def+=2
            jog.mag+=2
            jog.des+=2
            break;
        }}return }

}
function status() {
    jogador.hpMax = jogador.hp;
    jogador.forMax = jogador.for;
    jogador.defMax = jogador.def;
    jogador.magMax = jogador.mag;
    jogador.desMax = jogador.des;

    for (let i = 0; i < jogador.equipamento.length; i++) {
        // Verifica se jogador.equipamento[i] é um objeto antes de acessar suas propriedades
        if (jogador.equipamento[i]) {
            jogador.hpMax += jogador.equipamento[i].hpMax || 0;
            jogador.forMax += jogador.equipamento[i].for || 0;
            jogador.defMax += jogador.equipamento[i].def || 0;
            jogador.magMax += jogador.equipamento[i].mag || 0;
            jogador.desMax += jogador.equipamento[i].des || 0;
        }
    }
}
function comprarItem(jogador, item) {
    let itemLoja = loja.find(i => i.id === item);
    if (itemLoja) {
        if (jogador.inventario.length < 10) { // Limite de 10 itens no inventário
            if (jogador.moeda >= itemLoja.preco) {
                jogador.moeda -= itemLoja.preco; // Deduz o preço do item da experiência do jogador
                jogador.inventario.push({ ...itemLoja }); // Adiciona uma cópia do item ao inventário do jogador
                console.log(`${jogador.nome} comprou ${itemLoja.nome} por ${itemLoja.preco} moedas.`);
            } else {
                console.log("Você não tem moedas suficientes para comprar este item.");
            }
        } else {
            console.log("Seu inventário está cheio. Você não pode comprar mais itens.");
        }
    } else {
        console.log("Item não encontrado na loja.");
    }
}
function venderItem(jogador, indice) {
    if (jogador.inventario[indice]) {
        let item = jogador.inventario[indice];
        jogador.moeda += Math.floor(item.preco / 2); // O jogador recebe metade do preço de volta
        jogador.inventario.splice(indice, 1); // Remove o item do inventário do jogador
        console.log(`${jogador.nome} vendeu ${item.nome} por ${Math.floor(item.preco / 2)} moedas.`);
    } else {
        console.log("Índice de inventário inválido.");
    }
}
function dado(tipoDado) {
    let resultado = 0;
    switch (tipoDado) {
        case 'D4':
            do {
                resultado = Math.floor(Math.random() * 4) + 1;
            } while (resultado === 0);
            break;
        case 'D6':
            do {
                resultado = Math.floor(Math.random() * 6) + 1;
            } while (resultado === 0);
            break;
        case 'D8':
            do {
                resultado = Math.floor(Math.random() * 8) + 1;
            } while (resultado === 0);
            break;
        case 'D10':
            do {
                resultado = Math.floor(Math.random() * 10) + 1;
            } while (resultado === 0);
            break;
        case 'D12':
            do {
                resultado = Math.floor(Math.random() * 12) + 1;
            } while (resultado === 0);
            break;
        case 'D20':
            do {
                resultado = Math.floor(Math.random() * 20) + 1;
            } while (resultado === 0);
            break;
        default:
            console.log("Tipo de dado não suportado.");
    }
    return resultado;
}
function batalha(jog, ini) {
    alert(`===Você encontrou ${ini.nome}===\n${jog.nome} VS ${ini.nome}\n${jog.nome}: ${jog.hp} Vida\n${ini.nome}: ${ini.hp} Vida`);
    console.log('A batalha começa!');
    
    while (jog.hp > 0 && ini.hp > 0) {
        // Jogador realiza ação
        let acao = Number(prompt(`Em batalha:\n [1] Atacar\n [2] Usar Habilidade Especial\n [3] Defender\n [4] Fugir`));
        
        switch (acao) {
            case 1: // Atacar
                ini.hp -= calcularDano(jog, ini);
                break;
            case 2: // Usar Habilidade Especial
                usarHabilidade(jog, ini);
                break;
            case 3: // Defender
                defender(jog);
                break;
            case 4: // Fugir
                console.log(`${jog.nome} fugiu da batalha.`);
                break;
            default:
                console.log('Ação inválida. Tente novamente.');
                continue;
        }
        
        // Verifica se o inimigo foi derrotado
        if (ini.hp <= 0) {
            jog.moeda += ini.moedasDropadas;
            let itemDropado = ini.inventario[Math.floor(Math.random() * ini.inventario.length)];
            jog.inventario.push(itemDropado);
            jog.exp+=ini.exp
            alert(`${ini.nome} foi derrotado!`);
            alert(`Você ganhou ${ini.moedasDropadas} moedas e recebeu um item: ${itemDropado.tipo}`);
            lvlUp(jogador)
            }
        
        // Inimigo realiza ação
        acaoInimiga(jog, ini);
        
        // Verifica se o jogador foi derrotado
        if (jog.hp <= 0) {
            console.log(`${jog.nome} foi derrotado! A batalha acabou.`);
            return;
        }
        
        // Mostra status atual da batalha
        console.log(`\n${jog.nome}: ${jog.hp} Vida`);
        console.log(`${ini.nome}: ${ini.hp} Vida\n`);
    }
    
    console.log('A batalha acabou!');
}
function calcularDano(atacante, defensor) {
    let dano = atacante.dano - defensor.def;
    if (dano < 0) {
        dano = 0; // Não pode causar dano negativo
    }0
    defensor.hp -= dano;
    console.log(`${atacante.nome} causou ${dano} de dano em ${defensor.nome}.`);
    return dano;
}
function usarHabilidade(jogador, inimigo) {
    calcularDano(jogador, inimigo) // Lógica para escolher e aplicar habilidades especiais
    console.log(`${jogador.nome} usou uma habilidade especial!`);
    // Implemente lógica para habilidades especiais
    // Pode causar efeitos especiais ou dano adicional
}
function defender(jogador) {
    console.log(`${jogador.nome} está se defendendo.`);
    // Implemente lógica para aumentar a defesa temporariamente
}
function acaoInimiga(jogador, inimigo) {
    let acao = Math.floor(Math.random() * 3) + 1; // Simula ação aleatória do inimigo
    switch (acao) {
        case 1:
            inimigoAtaca(jogador, inimigo);
            break;
        case 2:
            console.log(`${inimigo.nome} usou uma habilidade especial!`);
            // Implemente lógica para habilidades especiais do inimigo
            break;
        case 3:
            console.log(`${inimigo.nome} está se defendendo.`);
            // Implemente lógica para defesa temporária do inimigo
            break;
    }
}
function inimigoAtaca(jogador, inimigo) {
    let dano = inimigo.dano - jogador.def;
    if (dano < 0) {
        dano = 0; // Não pode causar dano negativo
    }
    jogador.hp -= dano;
    console.log(`${inimigo.nome} causou ${dano} de dano em ${jogador.nome}.`);
}
function menu() {
    let esc;
    do {
        esc = Number(prompt("O que deseja fazer agora?\n[1] Ver inventário\n[2] Visitar a loja\n[3] Descansar e ver status\n[4] Avançar"));

        if (esc === 1) {
            console.log(`Inventário:\n${inventario(jogador.inventario)}`);
            let item = Number(prompt(`Digite o número do item (0 para sair):`)) - 1;
            if (jogador.inventario[item]) {
                esc = Number(prompt("[1] Equipar\n[2] Excluir"));
                if (esc === 1) {
                    equipar(jogador, item);
                    status();
                    console.log(`Você está equipando:\n${inventario(jogador.equipamento)}`);
                } else if (esc === 2) {
                    jogador.inventario.splice(item, 1);
                    console.log(`Você removeu o item do seu inventário.`);
                }
            }
        } else if (esc === 2) {
            let escolhaLoja = Number(prompt("O que deseja fazer na loja?\n[1] Comprar itens\n[2] Vender itens\n[0] Sair da loja"));

            if (escolhaLoja === 1) {
                // Mostrar itens da loja para compra
                loja.forEach(item => console.log(`[${item.id}] ${item.nome} - ${item.preco} moedas`));

                // Opção de compra na loja
                let opcaoCompra = Number(prompt("Digite o número do item que deseja comprar (0 para sair):"));
                if (opcaoCompra > 0 && opcaoCompra <= loja.length) {
                    comprarItem(jogador, opcaoCompra);
                    status();
                }
            } else if (escolhaLoja === 2) {
                // Mostrar inventário para venda de itens
                console.log(`Inventário:\n${inventario(jogador.inventario)}`);
                let opcaoVenda = Number(prompt("Digite o número do item que deseja vender (0 para sair):")) - 1;
                if (jogador.inventario[opcaoVenda]) {
                    venderItem(jogador, opcaoVenda);
                    status();
                }
            } else {
                console.log("Saindo da loja...");
            }
        } else if (esc === 3) {
            jogador.hp = jogador.hpMax; // Descansar recupera vida
            console.log('Você descansa e recupera as energias.')
            console.log(sta());
        }
    } while (esc !== 4);
}
function inventario (inventario){                   
    let ordem       
    for(let x in inventario){
        if(inventario[x] === inventario[0]){                    // Apresenta e orienta o inventário 
            ordem = `[${Number(x)+1}] ${inventario[x].tipo}`
        }else if(inventario[x] !== inventario[0]){
            ordem += `\n[${Number(x)+1}] ${inventario[x].tipo}`
        }
    }
    return ordem
}
function equipar(jog, indice){
    if(jog.inventario[indice].classe==='arma'){         // verifica se a classe do item pode ser equipado no indice X
        if(jog.equipamento[0]===true){                  // verifica se existe item no ídice indicado, se tiver executa o cod
            jog.inventario.push(jog.equipamento[0])     // deve copiar o item para o inventário e apagar do equipamento 
            jog.equipamento.splice(0,1)                 // depois deve copiar o item para o equipamento e apagar do inventtário
            jog.equipamento[0]=jog.inventario[indice]      
            jog.inventario.splice(indice,1)
            
            alert('sua arma foi substituída')}
            else{
    jog.equipamento[0]=jog.inventario[indice]           // se não existir item no indice, apenas copia para o equipamento   
    jog.inventario.splice(indice,1)
                                // depois apaga do inventário
    alert(`Sua arma foi equipada`)}
            }
    else if(jog.inventario[indice].classe==='helmo'){
        if(jog.equipamento[1]===true){
            jog.inventario.push(jog.equipamento[1])
            jog.equipamento.splice(1,1)
            jog.equipamento[1]=jog.inventario[indice]
            jog.inventario.splice(indice,1)
            
            alert('sua arma foi substituída')}
            else{
        jog.equipamento[1]=jog.inventario[indice]
        jog.inventario.splice(indice,1)
    }}
    else if(jog.inventario[indice].classe==='armadura'){
        if(jog.equipamento[2]===true){
            jog.inventario.push(jog.equipamento[2])
            jog.equipamento.splice(2,1)
            jog.equipamento[2]=jog.inventario[indice]
            jog.inventario.splice(indice,1)
            
            alert('sua arma foi substituída')}
            else{
        jog.equipamento[2]=jog.inventario[indice]
        jog.inventario.splice(indice,1)
        
    }}
    else if(jog.inventario[indice].classe==='manopla'){
        if(jog.equipamento[3]===true){
            jog.inventario.push(jog.equipamento[3])
            jog.equipamento.splice(3,1)
            jog.equipamento[3]=jog.inventario[indice]
            jog.inventario.splice(indice,1)
            
            alert('sua arma foi substituída')}
            else{
        jog.equipamento[3]=jog.inventario[indice]
        jog.inventario.splice(indice,1)
        
    }}
    else if(jog.inventario[indice].classe==='bota'){
        if(jog.equipamento[4]===true){
            jog.inventario.push(jog.equipamento[4])
            jog.equipamento.splice(4,1)
            jog.equipamento[4]=jog.inventario[indice]
            jog.inventario.splice(indice,1)
            
            alert('sua arma foi substituída')}
            else{
        jog.equipamento[4]=jog.inventario[indice]
        jog.inventario.splice(indice,1)
        
    }}
    else{
        alert('Você não pode equipar esse item!')
        
    }
}




console.log("=====Bem vindo(a)=====\nVamos criar seu personagem.")


jogador.nome = prompt("Qual nome do seu Herói?")


console.log(`Olá ${jogador.nome} Agora escolha a classe do seu herói:\n[1] Mago:\n[2] Arqueiro\n[3] Guerreiro\n[4] Bardo`)


let esc = prompt("Escolha a classe do seu herói:")
esc=Number(esc)
switch(esc){                                         // Rever valores de status de HP e HPMAX
    case 1:
        jogador.classe = "Mago"
        jogador.hp = jogador.hp+70
        jogador.for = jogador.for+5
        jogador.def = jogador.def+7
        jogador.mag = jogador.mag+20
        jogador.des = jogador.des+3
        jogador.equipamento=[armas[1]],
        jogador.inventario = [armaduras[0], armaduras[1]]
        jogador.dano=jogador.equipamento[0].dano
        
        break
    case 2:
        jogador.classe = "Arqueiro"
        jogador.hpMax =jogador.hpMax+70
        jogador.hp = jogador.hp+12
        jogador.for = jogador.for+8
        jogador.def = jogador.def+8
        jogador.mag = jogador.mag+5
        jogador.des = jogador.des+20
        jogador.equipamento=[armas[1]],
        jogador.inventario = [armaduras[0], armaduras[1]]
        jogador.dano=jogador.equipamento[0].dano
        break
    case 3:
        jogador.classe = "Guerreiro"
        jogador.hp = jogador.hp+20
        jogador.for = jogador.for+15
        jogador.def = jogador.def+10
        jogador.mag = jogador.mag+0
        jogador.des = jogador.des+2
        jogador.equipamento=[armas[1]],
        jogador.inventario = [armaduras[0], armaduras[1]]
        jogador.dano=jogador.equipamento[0].dano
        break
    case 4:
        jogador.classe = "Ladino"
        jogador.hp = jogador.hp+15
        jogador.for = jogador.for+5
        jogador.def = jogador.def+10
        jogador.mag = jogador.mag+16
        jogador.des = jogador.des+8
        jogador.equipamento=[armas[1]],
        jogador.inventario = [armaduras[0], armaduras[1]]
        jogador.dano=jogador.equipamento[0].dano
        break
    default:
        console.log("Indigente")
        jogador.classe ='Indigente'
        jogador.hp =jogador.hp+10
        jogador.for = jogador.for+5
        jogador.def =jogador.def+0
        jogador.mag =jogador.mag+0
        jogador.equipamento=[armas[1]],
        jogador.inventario = [armaduras[0], armaduras[1]]
        jogador.dano=jogador.equipamento[0].dano
        break
}
alert(`Parabéns ${jogador.nome}, você se juntou ao clã dos ${jogador.classe}s`)

alert(`Você trás no inventário:\n${inventario(jogador.inventario)}`)
status(jogador)

   batalha(jogador, inimigo)
   
  menu()
    

   