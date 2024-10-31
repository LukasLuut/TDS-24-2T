var Instrutor = /** @class */ (function () {
    function Instrutor(nome, especialidade, dataNascimento) {
        this.nome = nome;
        this.especialidade = especialidade;
        this.dataNascimento = dataNascimento;
    }
    return Instrutor;
}());
var Plano;
(function (Plano) {
    Plano[Plano["mensal"] = 0] = "mensal";
    Plano[Plano["semestral"] = 1] = "semestral";
    Plano[Plano["anual"] = 2] = "anual";
})(Plano || (Plano = {}));
var Treino = /** @class */ (function () {
    function Treino(nome, tipo, serie, repeticao) {
        this.nome = nome;
        this.tipo = tipo;
        this.serie = serie;
        this.repeticao = repeticao;
    }
    return Treino;
}());
var Aluno = /** @class */ (function () {
    function Aluno(nome, instrutor, plano, tipoTreino) {
        this.treinos = [];
        this.nome = nome;
        this.instrutor = instrutor;
        this.plano = plano;
        this.tipoTreino = tipoTreino;
    }
    Aluno.prototype.cadastroTreino = function (treino) {
        this.treinos.push(treino);
    };
    return Aluno;
}());
var Equipamento = /** @class */ (function () {
    function Equipamento(nome, quantidade, dimensao, capacidade) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.dimensao = dimensao;
        this.capacidade = capacidade;
    }
    return Equipamento;
}());
var Sala = /** @class */ (function () {
    function Sala(numero, equipamento, instrutor, capacidade) {
        this.numero = numero;
        this.equipamento = equipamento;
        this.instrutor = instrutor;
        this.capacidade = capacidade;
        this.listaPresenca = [];
    }
    Sala.prototype.marcarPresenca = function (aluno) {
        this.listaPresenca.push(aluno);
    };
    return Sala;
}());
var instrutor1 = new Instrutor('Muzy', 'Musculação', new Date('1982-04-12'));
var supino = new Treino('Supino', 'Peito', 4, 20);
var rosca = new Treino('Rosca', 'Bíceps', 3, 12);
var leg = new Treino('Leg Press', 'Pernas', 4, 15);
var equipamento1 = new Equipamento('Flexora', 10, '120x150', 150);
var equipamento2 = new Equipamento('Esteira', 30, '150x130', 200);
var equipamento3 = new Equipamento('Bicicleta', 10, '120x120', 130);
var sala1 = new Sala(10, equipamento1, instrutor1, 30);
var aluno1 = new Aluno('Vitor', instrutor1, Plano.anual, 'Musculação');
var aluno2 = new Aluno('Luut', instrutor1, Plano.mensal, 'Pilates');
sala1.marcarPresenca(aluno1);
aluno1.cadastroTreino(supino);
aluno1.cadastroTreino(rosca);
