const BankAccount = require ('./bankAccount');

describe('BankAccount class', () => {

    beforeAll(() => {
        jest.useFakeTimers(new Date(2022, 5, 20));
    });

    test('#BankAccount constructs with an accountHistory that is an empty array and a balance of 0', () => {
        let bankaccount = new BankAccount();
        expect(bankaccount.accountHistory).toEqual([]);
        expect(bankaccount.balance).toEqual(0);
    })

    test('#deposit will take an amount and store the information in the accountHistory', () => {
        let bankaccount = new BankAccount();
        bankaccount.deposit(500);
        expect(bankaccount.accountHistory).toEqual([{type:'Deposit', balance:500, amount:500, date:'20/05/2022'}]);
    })

    test('#withdraw will take an amount and store the information in the accountHistory', () => {
        let bankaccount = new BankAccount();
        bankaccount.withdraw(500);
        expect(bankaccount.accountHistory).toEqual([{type:'Withdrawal', balance:-500, amount:500, date:'20/05/2022'}]);
    })

})
