const Statement = require ('../lib/statement');
describe('BankAccount class', () => {

    test('#printStatement will print the account history in the specified format', () => {
        mockedAccountHistory = [
            {type: 'Withdrawal', amount:500, date:'20/05/2022', balance:500},
            {type: 'Deposit', amount:200, date:'22/05/2022', balance:300}
        ]
        const statement = new Statement(mockedAccountHistory);
        expect(statement.printStatement()).toEqual('date || credit || debit || balance\r\n22/05/2022 || 200.00 || || 300.00\r\n20/05/2022 || || 500.00 || 500.00')
    })
})  
