const Transaction = require ('../lib/transaction');
const Statement = require ('./statement');

class BankAccount {
    constructor() {
        this.accountHistory = []
        this.balance = 0
    }

    deposit(amount){
        const deposit = new Transaction(amount);
        this.#depositUpdateBalanceandHistory(deposit);
    }

    withdraw(amount){
        const withdrawal = new Transaction(amount);
        this.#withdrawalUpdateBalanceandHistory(withdrawal);
    }

    printStatement(){
        const statement = new Statement(this.accountHistory);
        console.log(statement.printStatement());    
    }
    
    #depositUpdateBalanceandHistory(deposit){
        this.balance += deposit.amount;
        const depositinfo = deposit.info();
        depositinfo['balance'] = this.balance;
        depositinfo['type'] = 'Deposit';
        this.accountHistory.push(depositinfo);
    }

    #withdrawalUpdateBalanceandHistory(deposit){
        this.balance -= deposit.amount;
        const depositinfo = deposit.info();
        depositinfo['balance'] = this.balance;
        depositinfo['type'] = 'Withdrawal';
        this.accountHistory.push(depositinfo);
    }
}



module.exports = BankAccount;