/*
Métodos concretos e métodos abstratos

Classe concreta: quando o desenvolvedor escreve e desenvolve a classe 

Classe abstrata 
Não são instanciadas, servem apenas de modelo para outras hierarquias 
métodos devem ser definidos nas classes filhas que herdam da classe abstrata 

abstract class Pessoa{

abstract andar():void;
}


Agiotagem 

cliente 
agiota 
cobrador 
contrato


*/

abstract class People{
    name:string=''
    adress:string=''
    money:number=0
    contract:Contract

    abstract setContract():void;

}

class Client extends People{
    
    
    constructor(name:string,adress:string,money:number){
        super()
    }
    setContract(): void {
        
    }
}

class Contract {
    
}


