class ItemBiblioteca{//Não precisa de constructor porque não será instanciado 
    titulo:string;
    dataPublicacao:number;

    
}


class Livro extends ItemBiblioteca{
    autor:string;
    ISBN:string;
    numberPaginas:number;

    obterInfo(){
        console.log(`${this.autor}, ${this.ISBN},${this.numberPaginas},${this.titulo},${this.dataPublicacao}`)
    }
}

class Revista extends ItemBiblioteca{
    editora:string;
    ISSN:string;
    numeroEdicoes:number;
    obterInfo(){
        console.log(`${this.editora}, ${this.ISSN},${this.numeroEdicoes},${this.titulo},${this.dataPublicacao}`)
    }
}

class Usuario{
    nome:string;
    matricula:string;
    tipo:string;
    obterInfo(){
        console.log(`${this.nome}, ${this.matricula},${this.tipo}`)
    }
}

class Emprestimo{
    dataEmprestimo:string;
    dataDevolução:string;
    usuario:string;
    itemEmprestado:string;
    obterInfo(){
        console.log(`${this.dataEmprestimo}, ${this.dataDevolução},${this.usuario},${this.itemEmprestado}`)
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////



class Animal{
    nome:string;
    idade:number;
    especie:string;
    raca:string;
    peso:number;
}

class Mamifero extends Animal{
    tipoPelo:string;
    caracteristica:string="se amamenta"

    emitirSom(){
        console.log("muuu- se for vaca")
    }
}

class Ave extends Animal{
    envergaduraAsa:string;
    tipoBico:string;

    emitirSom(){
        console.log("có-có se for galinha")
    }
}

class Peixe extends Animal{
    tamanhoAquario:string;
    tipoAlimentacao:string;

    emitirSom(){
        console.log("blu blu - se for qualquer merda na água")
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

class Forma{
    nome:string;
    cor:string;
}

class Circulo{
    raio:number;

    calcArea(){
        return 3.14*(this.raio*this.raio)
    }
}

class Retangulo{
    base:number;
    altura:number;
    calcArea(){
        return this.base*this.altura
    }
}

class Trinagulo{
    base:number;
    altura:number;
    calcArea(){
        return (this.base*this.altura)/2
    }
}