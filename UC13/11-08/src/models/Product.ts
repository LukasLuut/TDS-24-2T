export class Product{
    
        id:number;
        nome:string;
        qdt:number;
        preco:number;


	constructor(id: number, nome: string, qdt: number, preco: number) {
		this.id = id;
		this.nome = nome;
		this.qdt = qdt;
		this.preco = preco;
	}
}

export let produtos: Product []=[]//Representa nosso banco 