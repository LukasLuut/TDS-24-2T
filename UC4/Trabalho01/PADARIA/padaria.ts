class Cliente 
{
    nome: string
    cpf: string
    dataNascimento: Date
    historico: Array<string> = []

    constructor(nome: string, cpf: string, dataNascimento: Date) {
        this.nome = nome,
        this.cpf = cpf,
        this.dataNascimento = dataNascimento
    }
}

class Produto 
{
    nome: string
    codigo: number
    tipo: string
    valor: number

    constructor(nome: string, codigo: number, tipo: string, valor: number) {
        this.nome = nome
        this.codigo = codigo
        this.tipo = tipo
        this.valor = valor
    }
    calcularImposto(imposto: number) {
        let valorTotal: number = this.valor
        valorTotal += (valorTotal * (imposto/100))
        return valorTotal
    }
}

class Estoque
{
    item: string
    quantidade: number
    valor: number

    constructor(item: string, quantidade: number, valor: number) {
        this.item = item
        this.quantidade = quantidade
        this.valor = valor
    }

    valorTotal() {
        let valorEstoque: number = 0
        valorEstoque = this.valor * this.quantidade
        return valorEstoque
    }
}

class Padaria 
{
    estoque: Array<Estoque> = []
    listaClientes: Array<Cliente> = []
    listaProdutos: Array<Produto> = []

    cadastroCliente(cliente: Cliente) {
    this.listaClientes.push(cliente)
    }

    cadastroProduto(produto: Produto) {
    this.listaProdutos.push(produto)
    }

    cadastroEstoque(produto: Estoque) {
    this.estoque.push(produto)
    }

    calcularLucro() {
        let faturamento: number = 0

        for(let produto of this.listaProdutos) {
            faturamento += produto.calcularImposto(30)
        }
        return faturamento;
    }

    calcularTotalEstoque() {
        let valorTotalEstoque: number = 0
        for(let item of this.estoque) {
            valorTotalEstoque += item.valorTotal()
        }
        return valorTotalEstoque
    }
}

class Venda 
{
    comprar(cliente: Cliente, produto: Produto) {
        let compra: string = `O cliente ${cliente.nome} pagou ${produto.calcularImposto(30)} pelo item ${produto.tipo + ' ' + produto.nome}`
        cliente.historico.push(compra)
        return compra
        }
}

let cliente1: Cliente = new Cliente('Vitor', '12312312312', new Date('2003-02-05'))
let produto1: Produto = new Produto('Farias', 1234, 'Pão', 4.50)
let padaria: Padaria = new Padaria()
let venda: Venda = new Venda()
let mantimento1: Estoque = new Estoque('Farinha', 10, 3)
let mantimento2: Estoque = new Estoque('Ovo', 30, 0.50)



padaria.cadastroCliente(cliente1)
padaria.cadastroProduto(produto1)
padaria.cadastroEstoque(mantimento1)
padaria.cadastroEstoque(mantimento2)

console.log(padaria.calcularTotalEstoque())
console.log(padaria.listaClientes)
console.log(padaria.listaProdutos)
console.log(venda.comprar(cliente1, produto1))
console.log(cliente1.historico)
console.log(padaria.calcularLucro())