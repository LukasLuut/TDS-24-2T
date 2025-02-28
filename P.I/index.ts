class User{
    private name:string;
    private birth:Date; 
    private address: Address;
    private cnpj_cpf: string;
    private email: string=''
     
 
     constructor(name:string, birth:Date, address:Address, cnpj_cpf:string){
         this.name=name,
         this.birth=birth,
         this.address=address,
         this.cnpj_cpf=cnpj_cpf
 
     }
 
     public getName(){
         return this.name
     }
 
     public setName(newName:string){
         this.name=newName
 
     }
     public getCnpj_cpf(){
         return this.cnpj_cpf
     }
     public setCnpj_cpf(value: string) {
         this.cnpj_cpf = value;
     }
 
     public getAddress(){
         return this.address;
     }
     public setAddress(value: Address) {
         this.address = value;
     }
     
     public getBirth(){
         return this.birth
     }
 
     public getEmail(){
         return this.email;
     }
     public setEmail(value: string) {
         this.email = value;
     }
 
     
 }
 
 class Provider extends User{
    //o provedor terá vários serviços que é capaz de realizar aqui
    //todos terão categorias préviamente disponíveis pelo sistema, que ajuda na filtragem de serviços
    //pode ser filtrado por serviço ou por servidor, (servidor faz mais sentido)
    provider_agenda:Agenda;
    available_service:Array<Service>;
 
     constructor(name:string,birth:Date,address:Address,cnpj_cpf:string,){
         super(name,birth,address,cnpj_cpf)
         this.provider_agenda=new Agenda;
     }
     
     //escolhe uma categoria existente no sistema e adiciona detalhes, preço e duração do serviço
     create_service(service:Service, price:number,days:number,description:string){
         service.setPrice(price);
         service.setWorkload(days);
         service.setDescription(description)
 
     }

     budget(service:Service){
        //Gerar lógica de orçamento e agendamento de um serviço
        //semelhante ao método a cima, verificar se existe necessidade dos 2

     };
 
 }
 
 
 class Client extends User{ //desenvolver melhor
    
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
 
 class Category{
     //deve ser a raiz do serviço, vai indicar qual setor do serviço e um breve resumo
     private name_category:string;
     private description_Category:string;
 
     constructor(name_category:string,description_Category:string){
        this.name_category=name_category;
        this.description_Category=description_Category;
         
     }
 }
 
 //o serviço em sí, o coração da aplicação
 class Service{
    private firstContact:string;
    private client:Client;
    private service_address:Address;
    private type: Category;
    private price: number;
    private description_service: string;
    private duration: number;//EM HORAS
    private start_date:Date;
    private end_date:Date;
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
public getDuration(): number {
        return this.duration;
    }
public setDuration(value: number) {
        this.duration = value;
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
      weekday: 'long', year: 'numeric', month: 'short', day: 'numeric',
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
        this.start_date = new Date();
    }

public finishService(){
        this.status = 'concluída';
    }
public cancelService(){
        this.status = 'cancelada';
    }
 }
 
 
 
 class Address{
     private street: string;
     private number:number;
     private district: string;
     private city: string;
     private cep: string;
     
 
     constructor(street:string,number:number,district:string,city:string,cep:string){
         this.street=street;
         this.number=number;
         this.district=district;
         this.city=city;
         this.cep=cep;
     }

public getStreet() {
        return this.street;
    }
public setStreet(value: string) {
        this.street = value;
    }
public getNumber() {
        return this.number;
    }
public setNumber(value: number) {
        this.number = value;
    }
public getDistrict(): string {
        return this.district;
    }
public setDistrict(value: string) {
        this.district = value;
    }
public getCity(): string {
        return this.city;
    }
public setCity(value: string) {
        this.city = value;
    }
public getCep(): string {
        return this.cep;
    }
public setCep(value: string) {
        this.cep = value;
    }
 };


class Agenda{//talvez mudar para agenda

    //aqui cria um array de objetos
     agenda:{service: Service, startDate: Date, endDate: Date;}[]=[];

    //aqui o algorítmo deve tentar realizar o agendamento
    public schedule(service:Service,startDate:Date){ 
        let endDate = new Date(startDate.getTime() + service.getDuration() * 3600000)//calcula a duração em horas
        
        //ira comparar a data com todas as datas ocupadas no array agenda
        for (let scheduling of this.agenda) {
            if (this.conflictCheck(scheduling, startDate, endDate)) {//usa o conflict que faz a verificação das datas
                return 'Horário indisponível para este serviço.'; //se já existir data, retorna horário indisponível

                //aqui posso implementar uma lógica que retorna quais serviços estão utilizando essa data e opção para reagendar o serviço novo ou o já agendado
            }
        }

        // Adiciona o agendamento na agenda
        this.agenda.push({ service, startDate, endDate });
        return 'Agendamento realizado com sucesso!';

    }

    //privado porque só será usado dentro do método agenda()
    private conflictCheck(existingSchedule: { service: Service, startDate: Date, endDate: Date }, startDate: Date, endDate: Date): boolean {
        return (startDate < existingSchedule.endDate && existingSchedule.startDate < endDate);//deve retornar true se já existir um agendamento dentro da duração do novo serviço
    }

    //exibe todos os agendamentos
    public listAppointments(){
        if (this.agenda.length === 0) {
            console.log('Não há agendamentos.');
            ;
        }
        else{
        console.log('Agendamentos:');
        this.agenda.forEach((scheduling, index) => {
            console.log(`${index + 1}. ${scheduling.service.getType()} - Início: ${scheduling.startDate.toLocaleString()} - Fim: ${scheduling.endDate.toLocaleString()}`);
        })};
    }
    
}










 
 
 
 let enderecoDoArthur=new Address('Elsa Dauber Steimer',67,'Scharlau','São Leopoldo','93120520')
 let marcenaria=new Category('Marcenaria','realiza trabalhos com madeira');
 let arthur=new Provider('Arthur Soltol',new Date('2002-1-3'),enderecoDoArthur,'03304699082');
 let Luut=new Client('Luut',new Date('1994-5-3'),enderecoDoArthur,'03304699082','Lukasluut@gmail.com')
 let corteMadeira=new Service(marcenaria,Luut);

let agenda=new Agenda()
agenda.listAppointments()

 
 
//Isso é a criação de um orçamento, vai para o array de orçamentos do cliente
 Luut.budget('Preciso concertar a pia do meu banheiro que está vazando',marcenaria,Luut)

console.log(Luut.service_budget)
Luut.service_budget[0].setWorkload(4)
console.log(Luut.service_budget[0].getWorkload())
Luut.service_budget[0].setWorkload(4)
console.log(Luut.service_budget[0].getWorkload())

arthur.provider_agenda.listAppointments()