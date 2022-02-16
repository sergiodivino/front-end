class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia= agencia;
        this.numero= numero;
        this.tipo = tipo;
        this._saldo =0;
    }
    set saldo(valor){
        this._saldo=valor;
    }
    get saldo(){
        return this._saldo;
    }
    sacar(valor){
        if(valor > this._saldo){
            return console.log('saque negado; saldo insuficiente');
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor (agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo =  'corrente';
        this._cartaoCredito = cartaoCredito;       

    }

    set cartaoCredito(valor){
            this._cartaoCredito = valor;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupaca';

    }
    sacar(valor){
        if (valor > this._saldo){
            console.log("saldo insuficiente")
        }
        this._saldo = this._saldo - valor;
       
    }
}

class ContaUniversitaria extends ContaBancaria{//extende ContaBancaria
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'uiversitaria';
    }

    sacar(valor){
     
        if(valor  >this._saldo){
            return console.log("operação negada, saldo insuficiente");
        }
        this._saldo = this._saldo - valor;
        
    }
}