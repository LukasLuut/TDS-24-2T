var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, dataNascimento) {
        this.historico = [];
        this.nome = nome,
            this.cpf = cpf,
            this.dataNascimento = dataNascimento;
    }
    return Cliente;
}());
var Produto = /** @class */ (function () {
    function Produto(nome, codigo, tipo, valor) {
        this.nome = nome;
        this.codigo = codigo;
        this.tipo = tipo;
        this.valor = valor;
    }
    Produto.prototype.calcularImposto = function (imposto) {
        var valorTotal = this.valor;
        valorTotal += (valorTotal * (imposto / 100));
        return valorTotal;
    };
    return Produto;
}());
var Estoque = /** @class */ (function () {
    function Estoque(item, quantidade, valor) {
        this.item = item;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    Estoque.prototype.valorTotal = function () {
        var valorEstoque = 0;
        valorEstoque = this.valor * this.quantidade;
        return valorEstoque;
    };
    return Estoque;
}());
var Padaria = /** @class */ (function () {
    function Padaria() {
        this.estoque = [];
        this.listaClientes = [];
        this.listaProdutos = [];
    }
    Padaria.prototype.cadastroCliente = function (cliente) {
        this.listaClientes.push(cliente);
    };
    Padaria.prototype.cadastroProduto = function (produto) {
        this.listaProdutos.push(produto);
    };
    Padaria.prototype.cadastroEstoque = function (produto) {
        this.estoque.push(produto);
    };
    Padaria.prototype.calcularLucro = function () {
        var faturamento = 0;
        for (var _i = 0, _a = this.listaProdutos; _i < _a.length; _i++) {
            var produto = _a[_i];
            faturamento += produto.calcularImposto(30);
        }
        return faturamento;
    };
    Padaria.prototype.calcularTotalEstoque = function () {
        var valorTotalEstoque = 0;
        for (var _i = 0, _a = this.estoque; _i < _a.length; _i++) {
            var item = _a[_i];
            valorTotalEstoque += item.valorTotal();
        }
        return valorTotalEstoque;
    };
    return Padaria;
}());
var Venda = /** @class */ (function () {
    function Venda() {
    }
    Venda.prototype.comprar = function (cliente, produto) {
        var compra = "O cliente ".concat(cliente.nome, " pagou ").concat(produto.calcularImposto(30), " pelo item ").concat(produto.tipo + ' ' + produto.nome);
        cliente.historico.push(compra);
        return compra;
    };
    return Venda;
}());
var cliente1 = new Cliente('Vitor', '12312312312', new Date('2003-02-05'));
var produto1 = new Produto('Farias', 1234, 'Pão', 4.50);
var padaria = new Padaria();
var venda = new Venda();
var mantimento1 = new Estoque('Farinha', 10, 3);
var mantimento2 = new Estoque('Ovo', 30, 0.50);
padaria.cadastroCliente(cliente1);
padaria.cadastroProduto(produto1);
padaria.cadastroEstoque(mantimento1);
padaria.cadastroEstoque(mantimento2);
console.log(padaria.calcularTotalEstoque());
console.log(padaria.listaClientes);
console.log(padaria.listaProdutos);
console.log(venda.comprar(cliente1, produto1));
console.log(cliente1.historico);
console.log(padaria.calcularLucro());
