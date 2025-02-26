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

