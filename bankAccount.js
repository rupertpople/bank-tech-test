const Deposit = require ('./deposit')
const Withdrawal = require ('./withdrawal')

class BankAccount {
    constructor() {
        this.accountHistory = []
        this.balance = 0
    }

    deposit(amount){
        const deposit = new Deposit(amount);
        this.#depositUpdateBalanceandHistory(deposit)
    }

    withdraw(amount){
        const withdrawal = new Withdrawal(amount);
        this.#withdrawalUpdateBalanceandHistory(withdrawal);
    }



    #depositUpdateBalanceandHistory(deposit){
        this.balance += deposit.amount
        const depositinfo = deposit.info()
        depositinfo['balance'] = this.balance
        this.accountHistory.push(depositinfo);
    }

    #withdrawalUpdateBalanceandHistory(deposit){
        this.balance -= deposit.amount
        const depositinfo = deposit.info()
        depositinfo['balance'] = this.balance
        this.accountHistory.push(depositinfo);
    }


}



module.exports = BankAccount;