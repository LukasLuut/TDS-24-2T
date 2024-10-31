// NOMES: VITOR REIS E LUCAS WILLIAM


class Morador
{
    nome: string;
    apartamento: Apartamento;
    telefone: string;
    email: string;
    dependentes: string = ''
    veiculos: Veiculo|boolean=false;
    pets: Pet|boolean=false
    historicoPagamentos: Array<Pagamento> = []
    contatoEmergencial: string = ''

    constructor(nome: string, apartamento: Apartamento, telefone: string, email: string, veiculos: Veiculo|boolean=false, pets: Pet|boolean=false) {
    this.nome = nome
    this.apartamento = apartamento
    this. telefone = telefone
    this.email = email
    if(veiculos!== false) {
    this.veiculos = veiculos
    }
    if(pets !== false) {
    this.pets = pets
    }
    }

    pagarCondominio(condominio: Condominio, pagamento: Pagamento) {
    condominio.pagamentoRecebido.push(pagamento)
    this.historicoPagamentos.push(pagamento)
    }

    darSugestaoReclamacao(registro: string, condominio: Condominio) {
        condominio.registroSugestoes.push(registro)
    }
}

class Apartamento 
{
    constructor(public bloco: string, public numero: number, public tipo: string) {}
}

class Pet 
{
    
    constructor(public nome: string, public raca: string, public cor: string, public especie: string) {

    }
}

class Veiculo
{

    constructor(public ano: number, public modelo: string, public cor: string, public placa: string) {

    }
}

class Funcionario
{
    constructor(public nome: string, public cargo: string, public setor: string, public jornadaTrabalho: Date, 
    public contatoEmergencia: string, public historicoPagamentos: Array<Pagamento>) {

    }

}
 
class Pagamento 
{
    constructor(public pagador: string, public data: Date, public valor: number, public descricao: string) {}
}

class Servico
{
    constructor(public tipo: string, public funcionario: Funcionario, public descricao: string) {

    }

}

class Empresa {
    
    constructor(public nome: string, public pagamentos: Array<Pagamento>, public contato: string, public servico: Servico) {

    }

}

class Area
{
    constructor(public local: string, public descricao: string, public disponibilidade: boolean) {}


}

class Condominio
{
    nome: string = ''
    areas: Array<Area> = []
    moradores: Array<Morador> = []
    funcionarios: Array<Funcionario> = []
    pagamentoEfetuado: Array<Pagamento> = []
    pagamentoRecebido: Array<Pagamento> = [] 
    registroManutencao: Array<Servico> = []
    registroSugestoes: Array<string> = []

    cadastrarArea(area: Area) {
        this.areas.push(area)
    }

    cadastrarMorador(morador: Morador) {
        this.moradores.push(morador)
    }

    cadastrarFuncionario(funcionario: Funcionario) {
        this.funcionarios.push(funcionario)
    }

    pagarFuncionario(funcionario: Funcionario, valor: Pagamento) {
        funcionario.historicoPagamentos.push(valor)
        this.pagamentoEfetuado.push(valor)
    }

    pagarEmpresa(empresa: Empresa, pagamento: Pagamento) {
        empresa.pagamentos.push(pagamento)
        this.pagamentoEfetuado.push(pagamento)
    }

    registrarServico(servico: Servico) {
        this.registroManutencao.push(servico)
    }
}


let morador: Morador = new Morador(
    'Luut',
    new Apartamento('D4', 69, 'Kit-net'),
    '5198080-2020',
    'lukasluut@gmail.com',
    new Veiculo(2009, 'Ford Ecosport', 'Preto', 'PNC-6969'),
    new Pet('Conde Drácula', 'Marlin', 'Azul', 'Peixe'))

let morador1: Morador = new Morador(
    'Vitor',
    new Apartamento('D4', 69, 'Kit-net'),
    '5198080-2020',
    'lukasluut@gmail.com',
    new Veiculo(2009, 'Ford Ecosport', 'Preto', 'PNC-6969'))

// console.log(morador)


let funcionario1 = new Funcionario(
    'Vitória',
    'Porteira', 
    'Portaria', 
    new Date(),
    '5198080-3030',
    [])

let funcionario2 = new Funcionario(
    'Arthur',
    'Jardineiro',
    'Jardim',
    new Date(),
    '5198080-5050',
    []
)

let servico: Servico = new Servico('Recepção', funcionario1, 'Recepciona os moradores na portaria')
let empresa: Empresa = new Empresa('Frentão L.M. Ltda.', [], '5198080-1010', new Servico('Agiotagem', funcionario2, 'Realiza empréstimos com juros "amigáveis" :) '))

let academia: Area = new Area('GYM', 'Área de exercícios', true)
// console.log(servico, empresa, area)

let condominio: Condominio = new Condominio()
condominio.nome = 'Ravena'
condominio.pagarFuncionario(funcionario1, new Pagamento(condominio.nome, new Date(), 2000, 'Salário Mês Agosto'))
// console.log(condominio.historicoContas, funcionario1.historicoPagamentos)

condominio.cadastrarArea(academia)
condominio.cadastrarFuncionario(funcionario1)
condominio.cadastrarMorador(morador)
condominio.cadastrarMorador(morador1)

condominio.registrarServico(servico)

morador.pagarCondominio(condominio, new Pagamento(morador.nome, new Date(), 1100, '700 de aluguel + 400 de condomínio'))
condominio.pagarEmpresa(empresa, new Pagamento(condominio.nome, new Date(), 12000, '3 mil de parcela + 8 mil de juros amigáveis'))

console.log(morador, condominio, empresa)