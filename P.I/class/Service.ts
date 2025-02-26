 //o serviço em sí, o coração da aplicação
 class Service{
    private firstContact:string;
    private client:Client;
    private service_address:Address;
    private type: Category;
    private price: number;
    private description_service: string;
    private start_service:Date;
    private status: 'cancelada'|'pendente' | 'em andamento' | 'concluída';
    private workload: string;//está sendo gerado um prazo de trabalho com método
    
 
 constructor(type:Category,client:Client)
     {
     this.client=client;
     this.type=type;
     this.firstContact=this.formateDate(new Date());
     this.status='pendente';
     
     } 
 
public getClient(){
        return this.client
     }
public getService_address(){
    return this.service_address
     }
public setService_address(address:Address){
    this.service_address=address;
    }

public getType(){
         return this.type;
     }
public setType(value: Category) {
         this.type = value;
     }
 
public getPrice(){
         return this.price;
     }
public setPrice(value: number) {
         this.price = value;
     }
 
public getDescription(){
         return this.description_service;
     }
public setDescription(value: string) {
         this.description_service = value;
     }
 
public getWorkload(){
         return `prazo: ${this.workload}`;
     }
public setWorkload(value: number) {
         this.addDays(value)
     }

     //serve para formatar o texto de data, utilizado na criação de Ordem de Serviço 
public formateDate(data:Date){
        return data.toLocaleString('pt-BR', {
      weekday: 'short', year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric'
    })
    }
public addDays(day:number){
        let newDeadline=new Date();//cria uma var onde salva o a data de hoje ----VERIFICAR SE AS DATAS SOMAM UMA EM CIMA DA OUTRA 
        newDeadline.setDate(newDeadline.getDate()+day)//adiciona o número de dias a partir da data de hoje
        this.workload=this.formateDate(newDeadline);
        return newDeadline // retorna o novo prazo 
    }
public getStatus(){
    return this.status
}
public startService(){
        this.status = 'em andamento';
        this.start_service = new Date();
    }

public finishService(){
        this.status = 'concluída';
    }
public cancelService(){
        this.status = 'cancelada';
    }
 }