import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SuperAccount } from './class/SuperAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)

peopleAccount.deposit(20)
peopleAccount.withdraw(15)
peopleAccount.getBalance()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(25)
companyAccount.withdraw(10)
companyAccount.getLoan(5)
companyAccount.getBalance()
console.log(companyAccount)
const superAccount = new SuperAccount(14, "João", 10)
superAccount.deposit(10)
superAccount.getBalance()