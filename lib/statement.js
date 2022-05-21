class Statement{
    constructor(transactions) {
        this.transactions = transactions;
    }

    printStatement() {
        const statement = this.#createLines();
        return this.#formatStatement(statement);
    }

    #createLines(){
        this.formattedTransactions = this.transactions.map((transaction) => {
            if (transaction.type === 'Deposit') {
                return `${transaction.date} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)}`;
            } else {
                return `${transaction.date} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)}`;
            }
        });
        this.formattedTransactions.push('date || credit || debit || balance');
        return this.formattedTransactions
    }

    #formatStatement(statement){
        statement.reverse();
        statement.join();
        const formattedStatement = String(statement).split(",").join("\r\n");
        return formattedStatement
    }
    
}

module.exports = Statement;