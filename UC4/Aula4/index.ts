
/*class Estacionamento
{
    carros:string;
    vagas:string;

}

class Proprietario
{
    nome:string;
    endereço:string;
    telefone:number;
}

class Carro
{   
    proprietario:Proprietario;
    carro:string;
    placa:string;
    cor:string;
}


class Vaga
{   
    numeroVaga:number;
    ocupação:boolean;    
    horarioEntrada:string;
    horarioSaida:string;
}
*/
///////////////////////////////////////////////////////////////


class Treino
{
    descrição:string='';
    series:number=0;
    repetições:number=0;
}

class Aluno
{
    nome:string=''
    idade:number=0
    treinos:string []=[]


}

class Academia
{
alunos:Aluno[]=[]
cadastrarAluno(aluno1:Aluno){
    this.alunos.push(aluno1)
}
adicionarTreino ( aluno:Aluno,descricao:string ){
const treino1=new Treino()
    aluno.treinos.push()

}
}

//////////////////////////////////////////////////////////////////

class Funcionario{
    nome:string='';
    funcao:string='';

}

//Lembrar de instanciar os objetos, as Classes não criam objetos...
class Empresa {
    funcionarios:Funcionario[]=[];
    adicionarFuncionario(funcionario1:Funcionario){
        this.funcionarios.push(funcionario1)

    }
}




let empresaCu=new Empresa
let funcionarioNovo= new Funcionario()

funcionarioNovo.nome= 'lucas'

empresaCu.adicionarFuncionario(funcionarioNovo)


//////////////////////////////////////////////////////////////////////
class Item{
    tipo:string=''
    quantia:number=0//verificar
}


class Inventario{
    itens:Item[]=[]

    adicionarItem(item:Item){
        this.itens.push(item)

    }
    removerItem(item:Item){

        this.itens.forEach(cadaItem =>{
            if(cadaItem.tipo===item.tipo){
                let index= this.itens.indexOf(item)
                this.itens.splice(index,1)
               
            }
        })
    }
}

let inventario=new Inventario()


let pinto=new Item()
pinto.tipo='nugget'