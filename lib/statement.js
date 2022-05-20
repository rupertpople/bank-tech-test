class Statement{
    constructor(transactions) {
        this.transactions = transactions;
    }

    printStatement() {
        const formattedTransactions = this.#formatAccountHistory();
        return formattedTransactions.join('\r\n');
        
    }

    #formatAccountHistory(){
        const formattedTransactions = this.transactions.map((transaction) => {
            if (transaction.type === 'Deposit') {
                return `${transaction.date} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)}`;
            } else {
                return `${transaction.date} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)}`;
            }
        });
        formattedTransactions.push('date || credit || debit || balance');
        formattedTransactions.reverse();
        return formattedTransactions;
    }
}

module.exports = Statement;