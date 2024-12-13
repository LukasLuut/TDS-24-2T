class Livro{
    titulo:string=''
    autor:string=''
    ISBN:number=0
    numeroDePaginas:number=0

}

class Autor{
    nome:string=''
    nacionalidade:string=''

}

class Emprestimo{
    dataEmprestimo:Date
    dataDevolucao:Date
    livro:Livro
    usuario:Usuario


}

class Usuario{
    nome:string=''
    matriculo:number=0
}

/*
Generalização e Especialização 
Criação de classes, atributos e métodos
Possibilidade de criação de classes abstratas e Interfaces 
Deixar atributos privados, publicos


*/