class User{
    private name:string;
    private birth:Date; // Não está bem implementado ---corrigido, era só declarar direito
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
 