class Transporter{
  
    private clients:Client[]=[]
    private vehicles:Vehicle[]=[]
    private invoices:Invoice[]=[]
    private orders:Order[]=[]
    private drivers:Driver[]=[]

    
    public constructor(
        private name:string,
        private cnpj:string,
    ){}


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
        private driver:Driver,
        private vehicle:Vehicle,
        private load:Load,
        private route:Route,
        private delivery:Delivery,
        private invoice:Invoice
    ){
        
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
    constructor(
        private discout:number=0,
        name:string,
        cnpj:string,
        adress:string
        
    ){
        super(name,cnpj,adress)
    }
}


class Vehicle{

    constructor(
    private plate:string,
    private model:string,
    private loadCapacity:number,
    private typeLoad:string,
    private status:boolean,
    ){}


    public setPlate(plate:string){
        this.plate=plate
    }

    public getPlate(){
        return this.plate
    }


    public getStatus(){
        return this.status
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
    private expectedDeliveryDate:Date,
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


    registerVehiclePerRoute(vehicle:Vehicle){
        if(vehicle.getStatus()===true)
        this.avaliableVehicle.push(vehicle)
    }
}


class Delivery{
    
    constructor(
    private date:Date,
    private client:Client,
    private load:Load,
    private vehicle:Vehicle,
    private driver:Driver,
    private status:string,
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

let empresa_1=new Transporter('Galeria304','789512378')


let client_1= new ClientContractor (10,'Vitin Vida-Loka','4722221366544','rua dos boy')
console.log(client_1)

let carro_1=new Vehicle('SIO2314','Monza-Turbo',565,'litros',true)
empresa_1.registerVehicle(carro_1)

let motorista_1=new Driver('Vitória',789512378,'D','10 anos',carro_1)

let rota_1=new Route('São Leopoldo','Porto Alegre','28km',new Date())
rota_1.registerVehiclePerRoute(carro_1)

let carga_1= new Load(20,30,'solido',rota_1,new Date(),new Date())

let entrega_1=new Delivery(new Date(), client_1,carga_1,carro_1,motorista_1,'em processo','explodir no destino')

let pedido_1=new Invoice(1,new Date(),client_1,199,'suas vidas')
pedido_1.bordingLoad(carga_1)

let ordem_1= new Order(client_1,motorista_1,carro_1,carga_1,rota_1,entrega_1,pedido_1)

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////


class Enterprise{
   private employee:Employee[]=[]

   payment(employee:Employee){
    if(employee.getPosition()==='cashier'){
        //realizar lógica de tipos de pagamentos
    }
   }

}

class Employee{

    private paymentHistory:object[]=[]

    constructor(
    private name:string,
    private position:string,
    ){}

    getPosition(){
        return this.position
    }
}


