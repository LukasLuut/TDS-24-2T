class Conta{
    usuario:string;
    saldo:number;
    taxa_Juros:number;
    limite_Saque:number;

    transferir(valor:number,para:Conta){
        if(valor<=this.saldo){
            this.saldo-=valor
            para.saldo+=valor
        }
        else{console.log('Saldo Insuficiente')}
    }
}

class Conta_Corrente extends Conta{
    taxa_Juros:number=1.2
    limite_Saque:number=1000
}


class Conta_Poupanca extends Conta{
    taxa_Juros:number=1.3
    limite_Saque:number=500
}


class Conta_Investimento extends Conta{
    taxa_Juros:number=1.4
    limite_Saque:number=this.saldo
}


let Luut_Conta_Corrente=new Conta_Corrente
Luut_Conta_Corrente.saldo=1000
Luut_Conta_Corrente.usuario='Luut'

let Vitor_Conta_Polpanca=new Conta_Poupanca
Vitor_Conta_Polpanca.saldo=500
Vitor_Conta_Polpanca.usuario='Vitor'

Luut_Conta_Corrente.transferir(500,Vitor_Conta_Polpanca)
console.log(Luut_Conta_Corrente.saldo,Vitor_Conta_Polpanca.saldo)



/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


class Vehicle{
    capacity:number;
    speed_KmH:number;
    rote:string;

    

}


class Bus extends Vehicle{
    
}
class plane extends Vehicle{
    
}
class train extends Vehicle{
    
}

class Passenger{
    name:string;
    
}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////