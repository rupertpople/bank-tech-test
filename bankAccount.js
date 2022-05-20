const Deposit = require ('./deposit')
const Withdrawal = require ('./withdrawal')

class BankAccount {
    constructor() {
        this.accountHistory = []
    }

    deposit(amount){
        const deposit = new Deposit(amount)
        this.accountHistory.push(deposit.info())
    }

    withdraw(amount){
        const withdrawal = new Withdrawal(amount)
        this.accountHistory.push(withdrawal.info())
    }
}

module.exports = BankAccount;