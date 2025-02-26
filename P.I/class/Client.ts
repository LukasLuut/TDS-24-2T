class Client extends User{
    
    //deve apresentar a agenda de orçamentos solicitados pelo cliente 
     service_budget:Array<Service>=[];
 
     constructor(name:string,birth:Date,address:Address,cnpj_cpf:string,email:string){
         super(name,birth,address,cnpj_cpf)
     }
     
    contracted_service(service:Service){
     this.service_budget.push(service)
     
    }
    //Deve criar instanciar um serviço apenas com categoria e descrição, que deve ser repassado ao Provider 
    //que deve definir valor e duração do serviço
    budget(description:string, type:Category, cliente:Client){
        let service=new Service(type, cliente)//instancia Service
        service.setDescription(description) //adiciona descrição 
        this.contracted_service(service)  //envia para array de Orçamentos
        }


 
 }