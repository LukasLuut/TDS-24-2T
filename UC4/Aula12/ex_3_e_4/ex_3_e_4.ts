class Client 
{
  protected name: string = "";
  protected contact: string = "";
  protected invoiceList: Array<Invoice> = [];

  public setName(newName: string) {
    this.name = newName;
  }

  public getName(): string {
    return this.name;
  }

  public setContact(newContact: string): void {
    this.contact = newContact;
  }

  public getContact(): string {
    return this.contact;
  }

  public addInvoice(invoice: Invoice): void {
    this.invoiceList.push(invoice)
  }

  public getInvoice():Array<Invoice> {
    return this.invoiceList;
  }
}

class Vehicle {
  private model: string;
  private plate: string;
  private year: number;
  private color: string;

  public constructor(
    model: string,
    plate: string,
    year: number,
    color: string
  ) {
    this.model = model;
    this.color = color;
    this.plate = plate;
    this.year = year;
  }
}

class CommomClient extends Client 
{
  private vehicle: Vehicle

  constructor(vehicle: Vehicle) {
    super();
    this.vehicle = vehicle
  }

  public getVehicle(): Vehicle {
      return this.vehicle
  }

  public setVehicle(newVehicle: Vehicle) {
    this.vehicle = newVehicle;
  }
}

class FleetClient extends Client 
{
  private vehicleList: Array<Vehicle> = [];

  public setVehicle(vehicles: Array<Vehicle>) {
    vehicles.forEach((vehicle) => {
      this.vehicleList.push(vehicle);
    });
  }

  public getVehicle(i: number): Vehicle {
    return this.vehicleList[i];
  }
}

enum Type 
{
  regular,
  added,
  alcohol,
}

class Fuel 
{
  private type: Type | null = null;
  private price: number = 0;
  private quantity: number = 0;

  public constructor(type: Type, quantity: number) {
    this.type = type;
    this.quantity = quantity;
  }

  public getType(): string {
    if (this.type === Type.regular) {
        return `regular gasoline`;
      } else if (this.type === Type.added) {
        return `added gasoline`;
      } else {
        return `alcohol`;
      }
    }

  public getPrice(): number {
    if (this.type === Type.regular) {
      this.price = 5.5;
      return this.price;
    } else if (this.type === Type.added) {
      this.price = 6;
      return this.price;
    } else {
      this.price = 4.5;
      return this.price;
    }
  }

  public reduceGas(quantity: number): void {
    this.quantity -= quantity
  }

  public getQuantity(): number {
    return this.quantity;
  }
}

class Invoice 
{
  private id: number = 0;
  private issueDate: Date = new Date();
  private value: number = 0;
  private client: Client
  private vehicle: Vehicle

  public constructor(id: number, value: number, client: Client, vehicle: Vehicle) {
    this.id = id
    this.value = value
    this.client = client
    this.vehicle = vehicle
  }
}

class Suplly 
{
    private client: Client
    private vehicle: Vehicle
    private fuel: Fuel
    private quantity: number

    public constructor(client: Client, fuel: Fuel, vehicle: Vehicle, quantity: number) {
        this.client = client
        this.fuel = fuel
        this.quantity = quantity
        this.vehicle = vehicle

    }

    private calculatePrice(): number {
        return this.fuel.getPrice() * this.quantity
    }

    public paymentFuel(id: number) {
        let invoice = new Invoice(id, this.fuel.getPrice(), this.client, this.vehicle)
        this.client.addInvoice(invoice)
        this.fuel.reduceGas(this.quantity)

        return `The ${this.client.getName()} filled up the vehicle and paid ${this.calculatePrice()} for ${this.quantity} liters for ${this.fuel.getType()}`
    }
}



let vehicle1 = new Vehicle("VW Gol", "ABC-1763", 2003, "Red");
let vehicle2 = new Vehicle("Fiat Palio Attractive", "IUM-5H54", 2013, "Silver");
let vehicle3 = new Vehicle("Honda Fit", "ICJ-4445", 2007, "Gray");
let vehicle4 = new Vehicle("Ford Fiesta", "MJS-2349", 1998, "White");

let client1 = new CommomClient(vehicle1)
client1.setName('Vitor')
client1.setVehicle(vehicle1)

let client2 = new FleetClient()
client2.setName('Vitória')
client2.setVehicle([vehicle2, vehicle3, vehicle4])

let gas = new Fuel(Type.regular, 600);
let alcohol = new Fuel(Type.added, 400);
let added = new Fuel(Type.added, 500);

let suplly = new Suplly(client1, gas, client1.getVehicle(), 10)

let supply2 = new Suplly(client2, added, client2.getVehicle(2), 250)

console.log(supply2.paymentFuel(23141))
console.log(added.getQuantity())


console.log(suplly.paymentFuel(143134))
console.log(client1.getInvoice())



//////////////////////////////////////////////////

//////////////////////////////////////////////////

//////////////////////////////////////////////////

class Student
{
    private name: string = ''
    private course: Subject|null = null
    private cpf: string = ''

    public getName(): string {
        return this.name;
    }

    public getCpf(): string {
        return this.cpf
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public setCpf(newCpf: string): void {
        this.cpf = newCpf;
    }

    public setCourse(newCourse: Subject): void {
        this.course = newCourse;
    }

    public getCourse(): Subject|null {
        return this.course;
    }

}


function getDayWeek(dayNumber: number) {
    switch (dayNumber) {
        case -1: return 'Sunday'
        break;
        case 0: return 'Monday'
        break;
        case 1: return 'Tuesday'
        break;
        case 2: return 'Wednesday'
        break;
        case 3: return 'Thursday'
        break;
        case 4: return 'Friday'
        break;
        case 5: return 'Saturday'
        break
        case 6: return 'Sunday'
        break;
        default: return '' 
}
}

class SchoolClass
{
    private name: string
    private students: Array<Student> = []
    private lessons: Array<Lesson> = []
    private dateClass: Date = new Date('2024-12-05')

    constructor(name: string) {
        this.name = name
    }

    public setStudent(student: Student): void {
        console.log(`The ${student.getName()} was registred!`)
        this.students.push(student)
    }

    public getStudent() {
        this.students.forEach((element) =>
        console.log(element.getName())
    )
    }

    public setLessons(lesson: Lesson): void {
        this.lessons.push(lesson)
    }

    public getDay(): string {
        return getDayWeek(this.dateClass.getDay())
    }
}

class Lesson
{
    private nameLesson: string = ''
    private lessonDate: Date = new Date('2024-12-05')

    public constructor(nameLesson: string, lessonDate: Date) {
        this.nameLesson = nameLesson
        this.lessonDate = lessonDate
    }

    public setNameLesson(newName: string): void {
        this.nameLesson = newName;
    }

    public getNameLesson(): string {
        return this.nameLesson;
    }

    public getDay(): string {
        return getDayWeek(this.lessonDate.getDay());
    }
}

class Teacher
{
    private nameTeacher: string
    private cpf: string

    public constructor(name: string, cpf: string) {
        this.nameTeacher = name
        this.cpf = cpf
    }

    public setName(newName: string): void {
        this.nameTeacher = newName
    }

    public getName(): string {
        return this.nameTeacher;
    }

    public setCpf(newCpf: string): void {
        this.cpf = newCpf;
    }

    public getCpf(): string {
        return this.cpf;
    }
}

class Subject
{
    private nameSubject: string
    private weekDays: Array<Date>
    private professor: Teacher

    constructor(nameSubject: string, weekDays: Array<Date>, professor: Teacher) {
        this.nameSubject = nameSubject;
        this.weekDays = weekDays;
        this.professor = professor;
    }

    public setNameSub(newSub: string): void {
        this.nameSubject = newSub;
    }

    public getNameSub(): string {
        return this.nameSubject;
    }

    public setProfessor(newProfessor: Teacher): void {
        this.professor = newProfessor;
    }

    public getProfessor(): string {
        return `Professor Name: ${this.professor.getName()}`;
    }

    public getDays(): void {
        this.weekDays.forEach((element) => 
            console.log(getDayWeek(element.getDay()))
        )
    }
}

let professor1 = new Teacher('Gustavo Berned', '123.123.123-76');
let professor2 = new Teacher('Lucas Alves', '123.123.123-99');
let professor3 = new Teacher('Mária Cláudia', '123.123.123-82');

let date
let english = new Subject('English', [new Date('2024-12-05'), new Date('2024-12-06')], professor3)

let student1 = new Student()
student1.setName('Vitor Reis')
student1.setCpf('123.123.123-12')
student1.setCourse(english)

let student2 = new Student()
student2.setName('Lucas Luut')
student2.setCpf('123.123.123-74')
student1.setCourse(english)

let pronoun = new Lesson('Pronouns', new Date('2024-12-04'))
let verbs = new Lesson('Verbs', new Date('2024-11-27'))

let schoolClass = new SchoolClass('English School')
schoolClass.setStudent(student1);
schoolClass.setStudent(student2)
schoolClass.setLessons(pronoun)
schoolClass.setLessons(verbs)

console.log(schoolClass.getDay())
schoolClass.getStudent()

english.getDays()