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

    printStatement(){
        const formattedAccounts = this.#formatAccountHistory()
        return formattedAccounts.join('\r\n');
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

    #formatAccountHistory(){
        const formattedHistory = this.accountHistory.map((action) => {
            if (action.type === 'Deposit') {
                return `${action.date} || ${action.amount.toFixed(2)} || || ${action.balance.toFixed(2)}`;
            } else {
                return `${action.date} || || ${action.amount.toFixed(2)} || ${action.balance.toFixed(2)}`;
            }
        })
        formattedHistory.push('date || credit || debit || balance')
        formattedHistory.reverse()
        return formattedHistory
    }

}



module.exports = BankAccount;