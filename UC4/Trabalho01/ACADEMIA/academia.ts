class Instrutor 
{
    nome: string
    especialidade: string
    dataNascimento: Date

    constructor(nome: string, especialidade: string, dataNascimento: Date) {
        this.nome = nome
        this.especialidade = especialidade
        this.dataNascimento = dataNascimento
    }
}

enum Plano 
{
    mensal,
    semestral,
    anual
}


class Treino
{
    nome: string
    tipo: string
    serie: number
    repeticao: number

    constructor(nome: string, tipo: string, serie: number, repeticao: number) {
        this.nome = nome
        this.tipo = tipo
        this.serie = serie
        this.repeticao = repeticao
    }
}

class Aluno 
{
    nome: string
    instrutor: Instrutor
    plano: Plano
    tipoTreino: string
    treinos: Array<Treino> = []

    constructor(nome: string, instrutor: Instrutor, plano: Plano, tipoTreino: string) {
    this.nome = nome
    this.instrutor = instrutor
    this.plano = plano
    this.tipoTreino = tipoTreino
    }

    cadastroTreino(treino: Treino) {
        this.treinos.push(treino)
    }
    
}

class Equipamento
{
    nome: string
    quantidade: number
    dimensao: string
    capacidade: number

    constructor(nome: string, quantidade: number, dimensao: string, capacidade: number) {
        this.nome = nome
        this.quantidade = quantidade
        this.dimensao = dimensao
        this. capacidade = capacidade
    }
}

class Sala
{
    listaPresenca: Array<Aluno> = []

    constructor(public numero: number, public equipamento: Equipamento, public instrutor: Instrutor, public capacidade: number) {
    }
    
    marcarPresenca(aluno: Aluno) {
        this.listaPresenca.push(aluno)
    }

}

let instrutor1: Instrutor = new Instrutor('Muzy', 'Musculação', new Date('1982-04-12'))

let supino: Treino = new Treino('Supino', 'Peito', 4, 20)
let rosca: Treino = new Treino('Rosca', 'Bíceps', 3, 12)
let leg: Treino = new Treino('Leg Press', 'Pernas', 4, 15)

let equipamento1: Equipamento = new Equipamento('Flexora', 10, '120x150', 150)
let equipamento2: Equipamento = new Equipamento('Esteira', 30, '150x130', 200)
let equipamento3: Equipamento = new Equipamento('Bicicleta', 10, '120x120', 130)

let sala1: Sala = new Sala(10, equipamento1, instrutor1, 30)
let aluno1: Aluno = new Aluno('Vitor', instrutor1, Plano.anual, 'Musculação')
let aluno2: Aluno = new Aluno('Luut', instrutor1, Plano.mensal, 'Pilates')

sala1.marcarPresenca(aluno1)
aluno1.cadastroTreino(supino)
aluno1.cadastroTreino(rosca)

