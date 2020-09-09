export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia
    }

    get agencia() {
        return this._agencia
    }

    get saldo() {
        return this._saldo
    }

    get cliente() {
        return this._cliente
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    sacar(valor) {
        let taxa = 1
        return this._sacar(valor, taxa)
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado
        } 

        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this._saldo += valor
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}