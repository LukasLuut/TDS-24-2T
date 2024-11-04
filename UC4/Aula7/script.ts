
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