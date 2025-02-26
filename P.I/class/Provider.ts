class Provider extends User{
    //o provedor terá vários serviços que é capaz de realizar aqui
    //todos terão categorias préviamente disponíveis pelo sistema, que ajuda na filtragem de serviços
    //pode ser filtrado por serviço ou por servidor, (servidor faz mais sentido)
    available_service:Array<Service>;
 
     constructor(name:string,birth:Date,address:Address,cnpj_cpf:string,){
         super(name,birth,address,cnpj_cpf)
     }
     
     //escolhe uma categoria existente no sistema e adiciona detalhes, preço e duração do serviço
     create_service(service:Service, price:number,days:number,description:string){
         service.setPrice(price);
         service.setWorkload(days);
         service.setDescription(description)
 
     }
 
 }