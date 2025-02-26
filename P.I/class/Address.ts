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
}