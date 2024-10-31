// NOMES: VITOR REIS E LUCAS WILLIAM
var Morador = /** @class */ (function () {
    function Morador(nome, apartamento, telefone, email, veiculos, pets) {
        if (veiculos === void 0) { veiculos = false; }
        if (pets === void 0) { pets = false; }
        this.dependentes = '';
        this.veiculos = false;
        this.pets = false;
        this.historicoPagamentos = [];
        this.contatoEmergencial = '';
        this.nome = nome;
        this.apartamento = apartamento;
        this.telefone = telefone;
        this.email = email;
        if (veiculos !== false) {
            this.veiculos = veiculos;
        }
        if (pets !== false) {
            this.pets = pets;
        }
    }
    Morador.prototype.pagarCondominio = function (condominio, pagamento) {
        condominio.pagamentoRecebido.push(pagamento);
        this.historicoPagamentos.push(pagamento);
    };
    Morador.prototype.darSugestaoReclamacao = function (registro, condominio) {
        condominio.registroSugestoes.push(registro);
    };
    return Morador;
}());
var Apartamento = /** @class */ (function () {
    function Apartamento(bloco, numero, tipo) {
        this.bloco = bloco;
        this.numero = numero;
        this.tipo = tipo;
    }
    return Apartamento;
}());
var Pet = /** @class */ (function () {
    function Pet(nome, raca, cor, especie) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.especie = especie;
    }
    return Pet;
}());
var Veiculo = /** @class */ (function () {
    function Veiculo(ano, modelo, cor, placa) {
        this.ano = ano;
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
    }
    return Veiculo;
}());
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, setor, jornadaTrabalho, contatoEmergencia, historicoPagamentos) {
        this.nome = nome;
        this.cargo = cargo;
        this.setor = setor;
        this.jornadaTrabalho = jornadaTrabalho;
        this.contatoEmergencia = contatoEmergencia;
        this.historicoPagamentos = historicoPagamentos;
    }
    return Funcionario;
}());
var Pagamento = /** @class */ (function () {
    function Pagamento(pagador, data, valor, descricao) {
        this.pagador = pagador;
        this.data = data;
        this.valor = valor;
        this.descricao = descricao;
    }
    return Pagamento;
}());
var Servico = /** @class */ (function () {
    function Servico(tipo, funcionario, descricao) {
        this.tipo = tipo;
        this.funcionario = funcionario;
        this.descricao = descricao;
    }
    return Servico;
}());
var Empresa = /** @class */ (function () {
    function Empresa(nome, pagamentos, contato, servico) {
        this.nome = nome;
        this.pagamentos = pagamentos;
        this.contato = contato;
        this.servico = servico;
    }
    return Empresa;
}());
var Area = /** @class */ (function () {
    function Area(local, descricao, disponibilidade) {
        this.local = local;
        this.descricao = descricao;
        this.disponibilidade = disponibilidade;
    }
    return Area;
}());
var Condominio = /** @class */ (function () {
    function Condominio() {
        this.nome = '';
        this.areas = [];
        this.moradores = [];
        this.funcionarios = [];
        this.pagamentoEfetuado = [];
        this.pagamentoRecebido = [];
        this.registroManutencao = [];
        this.registroSugestoes = [];
    }
    Condominio.prototype.cadastrarArea = function (area) {
        this.areas.push(area);
    };
    Condominio.prototype.cadastrarMorador = function (morador) {
        this.moradores.push(morador);
    };
    Condominio.prototype.cadastrarFuncionario = function (funcionario) {
        this.funcionarios.push(funcionario);
    };
    Condominio.prototype.pagarFuncionario = function (funcionario, valor) {
        funcionario.historicoPagamentos.push(valor);
        this.pagamentoEfetuado.push(valor);
    };
    Condominio.prototype.pagarEmpresa = function (empresa, pagamento) {
        empresa.pagamentos.push(pagamento);
        this.pagamentoEfetuado.push(pagamento);
    };
    Condominio.prototype.registrarServico = function (servico) {
        this.registroManutencao.push(servico);
    };
    return Condominio;
}());
var morador = new Morador('Luut', new Apartamento('D4', 69, 'Kit-net'), '5198080-2020', 'lukasluut@gmail.com', new Veiculo(2009, 'Ford Ecosport', 'Preto', 'PNC-6969'), new Pet('Conde Drácula', 'Marlin', 'Azul', 'Peixe'));
var morador1 = new Morador('Vitor', new Apartamento('D4', 69, 'Kit-net'), '5198080-2020', 'lukasluut@gmail.com', new Veiculo(2009, 'Ford Ecosport', 'Preto', 'PNC-6969'));
// console.log(morador)
var funcionario1 = new Funcionario('Vitória', 'Porteira', 'Portaria', new Date(), '5198080-3030', []);
var funcionario2 = new Funcionario('Arthur', 'Jardineiro', 'Jardim', new Date(), '5198080-5050', []);
var servico = new Servico('Recepção', funcionario1, 'Recepciona os moradores na portaria');
var empresa = new Empresa('Frentão L.M. Ltda.', [], '5198080-1010', new Servico('Agiotagem', funcionario2, 'Realiza empréstimos com juros "amigáveis" :) '));
var academia = new Area('GYM', 'Área de exercícios', true);
// console.log(servico, empresa, area)
var condominio = new Condominio();
condominio.nome = 'Ravena';
condominio.pagarFuncionario(funcionario1, new Pagamento(condominio.nome, new Date(), 2000, 'Salário Mês Agosto'));
// console.log(condominio.historicoContas, funcionario1.historicoPagamentos)
condominio.cadastrarArea(academia);
condominio.cadastrarFuncionario(funcionario1);
condominio.cadastrarMorador(morador);
condominio.cadastrarMorador(morador1);
condominio.registrarServico(servico);
morador.pagarCondominio(condominio, new Pagamento(morador.nome, new Date(), 1100, '700 de aluguel + 400 de condomínio'));
condominio.pagarEmpresa(empresa, new Pagamento(condominio.nome, new Date(), 12000, '3 mil de parcela + 8 mil de juros amigáveis'));
console.log(morador, condominio, empresa);
