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
        this.clients = [];
        this.vehicles = [];
        this.invoices = [];
        this.orders = [];
        this.drivers = [];
        this.name = name,
            this.cnpj = cnpj;
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
    function Order(client, clientType, driver, vehicle, load, route, delivery, invoice) {
        this.client = client;
        this.clientType = clientType;
        this.driver = driver;
        this.vehicle = vehicle;
        this.load = load;
        this.route = route;
        this.delivery = delivery;
        this.invoice = invoice;
    }
    Order.prototype.getClient = function () {
        this.client;
    };
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
    function ClientSporadic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.discout = 0;
        return _this;
    }
    return ClientSporadic;
}(Client));
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.plate = '';
        this.model = '';
        this.loadCapacity = 0;
        this.typeLoad = '';
        this.status = false;
    }
    Vehicle.prototype.setPlate = function (plate) {
        this.plate = plate;
    };
    Vehicle.prototype.getPlate = function () {
        this.plate;
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
    function Load() {
        this.weight = 0;
        this.volume = 0;
        this.type = '';
        this.route = new Route;
        this.boardingDate = new Date;
        this.deliveryDate = new Date;
    }
    return Load;
}());
var Driver = /** @class */ (function () {
    function Driver() {
        this.name = '';
        this.cnh = 0;
        this.category = '';
        this.experience = '';
        this.vehicle = new Vehicle;
    }
    return Driver;
}());
var Route = /** @class */ (function () {
    function Route() {
        this.origin = '';
        this.destiny = '';
        this.distance = '';
        this.estimatedTime = new Date;
        this.avaliableVehicle = [];
    }
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
        this.itens = [];
    }
    Invoice.prototype.bordingLoad = function (load) {
        this.itens.push(load);
    };
    return Invoice;
}());
var clientVitor = new ClientContractor(10, 'Vitin Vida-Loka', '4722221366544', 'rua dos boy');
console.log(clientVitor);
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
