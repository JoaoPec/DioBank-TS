import { DioAccount } from "./DioAccount";

export class SuperAccount extends DioAccount {
doc_id: number
    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }

    deposit = (valor: number): void => {
        if (this.isValid()) {
            valor += 10
            this.balance += valor
        }
    };
}


