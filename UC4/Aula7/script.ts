<<<<<<< HEAD
/*class Character{
    name:string=''
    hp:number=0
    def:number=0
    str:number=0

    atack(){
        console.log(`${this.name} attacked the enemy`)
    }

    useItem(){
        console.log(`${this.name} used an item`)
    }

}


class Mage extends Character{


    constructor (
        public name:string,
        public hp:number,
        public def:number,
        public str:number){super()}

    //subrescrever método
    atack(): void {
        console.log(`${this.name} used an hability`)
    }
}

class Warrior extends Character{

}*/


class Character{

    constructor(
        public name:string,
        public hp:number,
        public str:number,
        public def:number,
    ){}



    atack() : void {
        console.log(`${this.name} attacked the enemy`)
    }

    useItem(){
        console.log(`${this.name} used an item`)
    }

}


class Mage extends Character{

    //sobreEscrever método
    atack():  void {
        console.log(`${this.name} used a skill`)
    }

}

let gendalf=new Mage('Gendalf',10,5,4)

gendalf.useItem()

=======

//Creation basic classes
class Chacacter{
    name:string =""
    hp:Number=0
    str:Number=0
    def:Number=0
    



    attack(){
        console.log("the character attacked")
    }

    defense(){
        console.log("the character defended")
    }

    castSkill(){
        console.log("the character cast a skill")
    }

    escape(){
        console.log("the character run away")
    }

    useItem(){
        console.log("the character use item")
    }
    
    upLevel(){
        console.log("the character reached the next level")
    }
}



class Mage extends Chacacter{

//SobreEscrita de castSkill    
castSkill(): void {
    console.log(`The ${this.name} cast a fireball`)
}




}

class Warrior extends Chacacter{
    
}

class Archer extends Chacacter{
    
}
>>>>>>> bdbe8fcd225a6cc527faff86e026c23cd2a70521
