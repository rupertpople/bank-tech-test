const BankAccount = require ('../lib/bankAccount');
const MockDate = require('mockdate');

describe('BankAccount class', () => {

    beforeEach(() => {
        MockDate.set('05/20/2022');
        bankaccount = new BankAccount();
    });

    test('#BankAccount constructs with an accountHistory that is an empty array and a balance of 0', () => {
        expect(bankaccount.accountHistory).toEqual([]);
        expect(bankaccount.balance).toEqual(0);
    })

    test('#deposit will take an amount and store the information in the accountHistory', () => {
        bankaccount.deposit(500);
        expect(bankaccount.accountHistory).toEqual([{type:'Deposit', balance:500, amount:500, date:'20/05/2022'}]);
    })

    test('#withdraw will take an amount and store the information in the accountHistory', () => {
        bankaccount.withdraw(500);
        expect(bankaccount.accountHistory).toEqual([{type:'Withdrawal', balance:-500, amount:500, date:'20/05/2022'}]);
    })

    test('printStatement will print the account history in the specified format', () => {
        bankaccount.deposit(1000);
        MockDate.set('05/21/2022');
        bankaccount.deposit(2000);
        MockDate.set('05/23/2022');
        bankaccount.withdraw(500);
        global.console.log = jest.fn()
        bankaccount.printStatement();
        expect(console.log).toHaveBeenLastCalledWith('date || credit || debit || balance\r\n23/05/2022 || || 500.00 || 2500.00\r\n21/05/2022 || 2000.00 || || 3000.00\r\n20/05/2022 || 1000.00 || || 1000.00');
    })

})
