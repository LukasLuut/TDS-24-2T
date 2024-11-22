class Transporter{
    name:string;
    cnpj:string;
    clients:Client[]=[]
    vehicles:Vehicle[]=[]
    invoices:Invoice[]=[]

    public registerClient(client:Client){
        this.clients.push(client)
    }

    public registerVehicle(vehicle:Vehicle){
        this.vehicles.push(vehicle)
    }

    public registerInvoice(invoice:Invoice){
        this.invoices.push(invoice)
    }


}

class Order{
    client:Client;
    vehicle:Vehicle
}

class Client{
    name:string;
    cnpj:string;
    adress:string;
}


class ClientContractor extends Client{
    flat:boolean

}

class ClientSporadic extends Client{
    

}


class Vehicle{
    plate:string;
    model:string;
    loadCapacity:number;
    typeLoad:string;
    status:boolean;

}

class Load{
    weight:number;
    volume:number;
    type:string;
    origin:string;
    destiny:string;
    boardingDate:Date;
    deliveryDate:Date;
}

class Driver{
    name:string;
    cnh:number;
    category:string;
    experience:string;
    vehicle:Vehicle;
}

class Route{
    origin:string;
    destiny:string;
    distance:string;
    estimatedTime:Date;
    avaliabeVehicle:Vehicle[]=[]
}

class Delivery{
    date:Date;
    client:Client;
    load:Load;
    vehicle:Vehicle;
    driver:Driver;
    status:boolean;
    observation:string;

}

class Invoice{
    number:number;
    espeditionDate:Date;
    client:Client;
    itens:Load[]=[]
    totalValue:number;
    paymentMathod:string;
    
    
    bordingLoad(load){
        this.itens.push(load)
    }

}










//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////


class Employee{
    name:string;
    adress:string;

}

class Hourly extends Employee{
    hourlyRate:number;
    hourWorked:number;

}