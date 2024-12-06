var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Transporter = /** @class */ (function () {
    function Transporter(name, cnpj) {
        this.name = name;
        this.cnpj = cnpj;
        this.clients = [];
        this.vehicles = [];
        this.invoices = [];
        this.orders = [];
        this.drivers = [];
    }
    Transporter.prototype.getName = function () {
        return this.name;
    };
    Transporter.prototype.getCnpj = function () {
        return this.cnpj;
    };
    Transporter.prototype.registerOrder = function (order) {
        this.orders.push(order);
    };
    Transporter.prototype.getOrder = function (i) {
        if (i === undefined) {
            return this.orders;
        }
        else {
            return this.orders[i];
        }
    };
    Transporter.prototype.registerClient = function (client) {
        this.clients.push(client);
    };
    Transporter.prototype.registerVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    Transporter.prototype.registerInvoice = function (invoice) {
        this.invoices.push(invoice);
    };
    Transporter.prototype.registerDriver = function (driver) {
        this.drivers.push(driver);
    };
    return Transporter;
}());
var Order = /** @class */ (function () {
    function Order(client, driver, vehicle, load, route, delivery, invoice) {
        this.client = client;
        this.driver = driver;
        this.vehicle = vehicle;
        this.load = load;
        this.route = route;
        this.delivery = delivery;
        this.invoice = invoice;
    }
    return Order;
}());
var Client = /** @class */ (function () {
    function Client(name, cnpj, adress) {
        this.name = name;
        this.cnpj = cnpj;
        this.adress = adress;
    }
    Client.prototype.getName = function () {
        return this.name;
    };
    Client.prototype.setAdress = function (adress) {
        this.adress = adress;
    };
    Client.prototype.getAdress = function () {
        return this.adress;
    };
    Client.prototype.setCnpj = function (cnpj) {
        this.cnpj = cnpj;
    };
    Client.prototype.getCnpj = function () {
        this.cnpj;
    };
    return Client;
}());
var ClientContractor = /** @class */ (function (_super) {
    __extends(ClientContractor, _super);
    function ClientContractor(discout, name, cnpj, adress) {
        if (discout === void 0) { discout = 10; }
        var _this = _super.call(this, name, cnpj, adress) || this;
        _this.discout = discout;
        return _this;
    }
    return ClientContractor;
}(Client));
var ClientSporadic = /** @class */ (function (_super) {
    __extends(ClientSporadic, _super);
    function ClientSporadic(discout, name, cnpj, adress) {
        if (discout === void 0) { discout = 0; }
        var _this = _super.call(this, name, cnpj, adress) || this;
        _this.discout = discout;
        return _this;
    }
    return ClientSporadic;
}(Client));
var Vehicle = /** @class */ (function () {
    function Vehicle(plate, model, loadCapacity, typeLoad, status) {
        this.plate = plate;
        this.model = model;
        this.loadCapacity = loadCapacity;
        this.typeLoad = typeLoad;
        this.status = status;
    }
    Vehicle.prototype.setPlate = function (plate) {
        this.plate = plate;
    };
    Vehicle.prototype.getPlate = function () {
        return this.plate;
    };
    Vehicle.prototype.getStatus = function () {
        return this.status;
    };
    Vehicle.prototype.setModel = function (model) {
        this.model = model;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.setLoadCapacity = function (loadCapacity) {
        this.loadCapacity = loadCapacity;
    };
    Vehicle.prototype.getLoadCapacity = function () {
        return this.loadCapacity;
    };
    return Vehicle;
}());
var Load = /** @class */ (function () {
    function Load(weight, volume, type, route, boardingDate, expectedDeliveryDate) {
        this.weight = weight;
        this.volume = volume;
        this.type = type;
        this.route = route;
        this.boardingDate = boardingDate;
        this.expectedDeliveryDate = expectedDeliveryDate;
    }
    return Load;
}());
var Driver = /** @class */ (function () {
    function Driver(name, cnh, category, experience, vehicle) {
        this.name = name;
        this.cnh = cnh;
        this.category = category;
        this.experience = experience;
        this.vehicle = vehicle;
    }
    return Driver;
}());
var Route = /** @class */ (function () {
    function Route(origin, destiny, distance, estimatedTime) {
        this.origin = origin;
        this.destiny = destiny;
        this.distance = distance;
        this.estimatedTime = estimatedTime;
        this.avaliableVehicle = [];
    }
    Route.prototype.registerVehiclePerRoute = function (vehicle) {
        if (vehicle.getStatus() === true)
            this.avaliableVehicle.push(vehicle);
    };
    return Route;
}());
var Delivery = /** @class */ (function () {
    function Delivery(date, client, load, vehicle, driver, status, observation) {
        this.date = date;
        this.client = client;
        this.load = load;
        this.vehicle = vehicle;
        this.driver = driver;
        this.status = status;
        this.observation = observation;
    }
    return Delivery;
}());
var Invoice = /** @class */ (function () {
    function Invoice(number, espeditionDate, client, totalValue, paymentMathod) {
        this.number = number;
        this.espeditionDate = espeditionDate;
        this.client = client;
        this.totalValue = totalValue;
        this.paymentMathod = paymentMathod;
        this.itens = [];
    }
    Invoice.prototype.bordingLoad = function (load) {
        this.itens.push(load);
    };
    return Invoice;
}());
var empresa_1 = new Transporter('Galeria304', '789512378');
var client_1 = new ClientContractor(10, 'Vitin Vida-Loka', '4722221366544', 'rua dos boy');
var carro_1 = new Vehicle('SIO2314', 'Monza-Turbo', 565, 'litros', true);
empresa_1.registerVehicle(carro_1);
var motorista_1 = new Driver('Vitória', 789512378, 'D', '10 anos', carro_1);
var rota_1 = new Route('São Leopoldo', 'Porto Alegre', '28km', new Date());
rota_1.registerVehiclePerRoute(carro_1);
var carga_1 = new Load(20, 30, 'solido', rota_1, new Date(), new Date());
var entrega_1 = new Delivery(new Date(), client_1, carga_1, carro_1, motorista_1, 'em processo', 'explodir no destino');
var pedido_1 = new Invoice(1, new Date(), client_1, 199, 'suas vidas');
pedido_1.bordingLoad(carga_1);
var ordem_1 = new Order(client_1, motorista_1, carro_1, carga_1, rota_1, entrega_1, pedido_1);
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
var Enterprise = /** @class */ (function () {
    function Enterprise(name) {
        this.name = name;
        this.employee = [];
        this.paymentHistory = [];
    }
    Enterprise.prototype.getPaymentHistory = function (i) {
        if (i = 0) {
            i = 1;
        }
        else if (i === undefined) {
            return this.paymentHistory;
        }
        else {
            return this.paymentHistory[i - 1];
        }
    };
    Enterprise.prototype.addEmployee = function (employee) {
        this.employee.push(employee);
    };
    Enterprise.prototype.getEmployee = function (i) {
        if (i === undefined) {
            return this.employee;
        }
        else {
            return this.employee[i];
        }
    };
    Enterprise.prototype.payment = function (employee) {
        //PAGAMENTO HORISTA
        if (employee.getType() === 'hourly') {
            //busca as horas trabalhadas e multiplica pelo valor da hora
            var payment = employee.getHours() * employee.getHourValue();
            //realiza o push no histórico de pagamentos do funcionário e empresa
            employee.paymentHistory.push("Payment confirmed to ".concat(employee.getName(), ": R$").concat(payment, " at:").concat(new Date()));
            this.paymentHistory.push("Payment confirmed to ".concat(employee.getName(), ": R$").concat(payment, " at:").concat(new Date()));
        }
        //PAGAMENTO ASSALARIADO
        else if (employee.getType() === 'salaried') {
            //realiza o push no histórico de pagamentos do funcionário e empresa
            employee.paymentHistory.push("Payment confirmed to ".concat(employee.getName(), ": R$").concat(employee.getSalary(), " at:").concat(new Date()));
            this.paymentHistory.push("Payment confirmed to ".concat(employee.getName(), ": R$").concat(employee.getSalary(), " at:").concat(new Date()));
        }
        //PAGAMENTO COMISSIONADO
        else if (employee.getType() === 'comissioned') {
            //realiza o push no histórico de pagamentos do funcionário e empresa
            employee.paymentHistory.push("Payment confirmed to ".concat(employee.getName(), ": R$").concat(employee.getSalary(), " at:").concat(new Date()));
            this.paymentHistory.push("Payment confirmed to ".concat(employee.getName(), ": R$").concat(employee.getSalary(), " at:").concat(new Date()));
        }
        else {
            console.log('Type invalid');
        }
    };
    return Enterprise;
}());
var Employee = /** @class */ (function () {
    function Employee(name, type) {
        this.name = name;
        this.type = type;
        this.paymentHistory = [];
    }
    Employee.prototype.getType = function () {
        return this.type;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getPaymentHistory = function (i) {
        if (i === undefined) {
            return this.paymentHistory;
        }
        else {
            return this.paymentHistory[i - 1];
        }
    };
    //realizado polimorfismo nas classes filhas
    Employee.prototype.getHourValue = function () { return 0; };
    Employee.prototype.getHours = function () { return 0; };
    Employee.prototype.getSalary = function () { return 0; };
    return Employee;
}());
var Hourly = /** @class */ (function (_super) {
    __extends(Hourly, _super);
    function Hourly(name, type, hourValue) {
        var _this = _super.call(this, name, type) || this;
        _this.hoursWorked = 0;
        _this.hourValue = 0;
        _this.hourValue = hourValue;
        return _this;
    }
    Hourly.prototype.sumHours = function (hour) {
        this.hoursWorked += hour;
    };
    Hourly.prototype.setHours = function (hour) {
        this.hoursWorked = hour;
    };
    Hourly.prototype.getHours = function () {
        return this.hoursWorked;
    };
    Hourly.prototype.getHourValue = function () {
        return this.hourValue;
    };
    Hourly.prototype.setHourValue = function (value) {
        this.hourValue = value;
    };
    return Hourly;
}(Employee));
var Salaried = /** @class */ (function (_super) {
    __extends(Salaried, _super);
    function Salaried(name, type, salary) {
        var _this = _super.call(this, name, type) || this;
        _this.salary = salary;
        return _this;
    }
    Salaried.prototype.getSalary = function () {
        return this.salary;
    };
    Salaried.prototype.setSalary = function (value) {
        this.salary = value;
    };
    return Salaried;
}(Employee));
var Commissioned = /** @class */ (function (_super) {
    __extends(Commissioned, _super);
    function Commissioned(name, type, salary) {
        var _this = _super.call(this, name, type) || this;
        _this.salary = salary;
        _this.goalBeat = false;
        return _this;
    }
    Commissioned.prototype.getSalary = function () {
        if (this.goalBeat) {
            return this.salary + (this.salary * .10);
        }
        else {
            return this.salary;
        }
    };
    return Commissioned;
}(Employee));
var galeria304 = new Enterprise('Galeria304');
var vitorHorista = new Hourly('Vitão', 'hourly', 23);
var arthirAssalariado = new Salaried('Arthur', 'salaried', 6500);
var luutComissionado = new Commissioned('Luut', 'comissioned', 8000);
galeria304.addEmployee(vitorHorista);
galeria304.addEmployee(arthirAssalariado);
galeria304.addEmployee(luutComissionado);
vitorHorista.sumHours(10);
galeria304.payment(vitorHorista);
galeria304.payment(arthirAssalariado);
galeria304.payment(luutComissionado);
console.log(luutComissionado.getPaymentHistory());
