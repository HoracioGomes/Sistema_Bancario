import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"

const cliente1 = new Cliente("Joao", 5544332211)
const conta1 = new ContaCorrente(cliente1,5599)
conta1._saldo = 0

const cliente2 = new Cliente("Maria", 6622335448)
const conta2 = new ContaPoupanca(0,cliente2,5599)

conta1.depositar(400)
conta2.depositar(1000)


//Testando Get
console.log("conta1 - cpf: "+conta1._cliente.cpf)
console.log("conta1 - saldo: "+conta1.saldo)
console.log("conta2 - cpf: "+conta2._cliente.cpf)
console.log("conta2 - saldo: "+conta2.saldo)



