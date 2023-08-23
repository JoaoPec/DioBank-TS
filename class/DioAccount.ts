export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance += valor
      console.log(`Voce depositou R$${valor}`)
    }
  }

  withdraw = (saque: number): void => {
    if (this.validateStatus()) {
      if (saque <= this.balance) {
        this.balance -= saque
        console.log(`Voce sacou R$${saque}`)
      }
    }
  }

  getBalance = (): void => {
    console.log(`Atualmente você está com um saldo de ${this.balance}`)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
  isValid = () => {
    return this.validateStatus
  }
  
}
