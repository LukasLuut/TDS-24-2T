class Transporter{
    private name:string;
    private cnpj:string;
    private clients:Client[]=[]
    private vehicles:Vehicle[]=[]
    private invoices:Invoice[]=[]
    private orders:Order[]=[]
    private drivers:Driver[]=[]

    
    public constructor(
        name:string,
        cnpj:string,
    ){
        this.name=name,
        this.cnpj=cnpj
    }


    public getName(){
        return this.name
    }


    public getCnpj(){
        return this.cnpj
    }



    public registerOrder(order:Order){
        this.orders.push(order)
    }

    public getOrder(i?:number){
        if(i===undefined){
            return this.orders
        }
        else{
            return this.orders[i]
        }
    }



    public registerClient(client:Client){
        this.clients.push(client)
    }


    public registerVehicle(vehicle:Vehicle){
        this.vehicles.push(vehicle)
    }


    public registerInvoice(invoice:Invoice){
        this.invoices.push(invoice)
    }


    public registerDriver(driver:Driver){
        this.drivers.push(driver)
    }
}


class Order{
    
    public constructor(
        private client: Client,
        private clientType:Client,
        private driver:Driver,
        private vehicle:Vehicle,
        private load:Load,
        private route:Route,
        private delivery:Delivery,
        private invoice:Invoice
    ){
        
    }

    getClient() {
        this.client
    }
}


class Client{

    public constructor(
       private name:string,
       private cnpj:string,
       private adress:string
    ){}



    public getName(){
        return this.name
    }



    public setAdress(adress:string){
    this.adress=adress
    }
    
    public getAdress(){
        return this.adress
    }



    public setCnpj(cnpj:string){
        this.cnpj=cnpj
        }

    public getCnpj(){
        this.cnpj
    }
}



class ClientContractor extends Client{
    constructor(
        private discout:number=10,
        name:string,
        cnpj:string,
        adress:string
        
    ){
        super(name,cnpj,adress)
    }

}


class ClientSporadic extends Client{
    discout:number=0

}



class Vehicle{
    private plate:string=''
    private model:string=''
    private loadCapacity:number=0
    private typeLoad:string=''
    private status:boolean=false

    public setPlate(plate:string){
        this.plate=plate
    }

    public getPlate(){
        this.plate
    }


    public setModel(model:string){
        this.model=model
    }

    public getModel(){
        return this.model
    }


    public setLoadCapacity(loadCapacity:number){
        this.loadCapacity=loadCapacity
    }

    public getLoadCapacity(){
        return this.loadCapacity
    }
}


class Load{

    constructor(
    private weight:number,
    private volume:number,
    private type:string,
    private route:Route,
    private boardingDate:Date,
    private deliveryDate:Date,
){}
}


class Driver{

    constructor(
    private name:string,
    private cnh:number,
    private category:string,
    private experience:string,
    private vehicle:Vehicle,
){}
}


class Route{

    avaliableVehicle:Vehicle[]=[]

    constructor(
    private origin:string,
    private destiny:string,
    private distance:string,
    private estimatedTime:Date,
){}
}


class Delivery{
    
    constructor(
    private date:Date,
    private client:Client,
    private load:Load,
    private vehicle:Vehicle,
    private driver:Driver,
    private status:boolean,
    private observation:string,
){}
}


class Invoice{

    itens:Load[]=[]

    constructor(
    private number:number,
    private espeditionDate:Date,
    private client:Client,
    private totalValue:number,
    private paymentMathod:string,
){}
    
    bordingLoad(load:Load){
        this.itens.push(load)
    }
}


let clientVitor= new ClientContractor (10,'Vitin Vida-Loka','4722221366544','rua dos boy')
console.log(clientVitor)









//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////


