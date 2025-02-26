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
var Conta = /** @class */ (function () {
    function Conta() {
    }
    Conta.prototype.transferir = function (valor, para) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            para.saldo += valor;
        }
    };
    return Conta;
}());
var Conta_Corrente = /** @class */ (function (_super) {
    __extends(Conta_Corrente, _super);
    function Conta_Corrente() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taxa_Juros = 1.2;
        _this.limite_Saque = 1000;
        return _this;
    }
    return Conta_Corrente;
}(Conta));
var Conta_Poupanca = /** @class */ (function (_super) {
    __extends(Conta_Poupanca, _super);
    function Conta_Poupanca() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taxa_Juros = 1.3;
        _this.limite_Saque = 500;
        return _this;
    }
    return Conta_Poupanca;
}(Conta));
var Conta_Investimento = /** @class */ (function (_super) {
    __extends(Conta_Investimento, _super);
    function Conta_Investimento() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taxa_Juros = 1.4;
        _this.limite_Saque = _this.saldo;
        return _this;
    }
    return Conta_Investimento;
}(Conta));
var Luut_Conta_Corrente = new Conta_Corrente;
Luut_Conta_Corrente.saldo = 1000;
Luut_Conta_Corrente.usuario = 'Luut';
var Vitor_Conta_Polpanca = new Conta_Poupanca;
Vitor_Conta_Polpanca.saldo = 500;
Vitor_Conta_Polpanca.usuario = 'Vitor';
Luut_Conta_Corrente.transferir(500, Vitor_Conta_Polpanca);
console.log(Luut_Conta_Corrente.saldo, Vitor_Conta_Polpanca.saldo);
