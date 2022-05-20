const BankAccount = require ('./bankAccount');

describe('BankAccount class', () => {

    beforeAll(() => {
        jest.useFakeTimers(new Date(2022, 5, 20));
    });

    test('#BankAccount constructs with an accountHistory that is an empty array', () => {
        let bankaccount = new BankAccount();
        expect(bankaccount.accountHistory).toEqual([])
    })

    test('#deposit will take an amount and store the information in the accountHistory'), () => {
        let bankaccount = new BankAccount();
        const MockedDeposit = {

        }
        expect(bankaccount.accounthistory).toEqual([500,'20-05-2022'])
    }

    test('#deposit will take an amount and store the information in the accountHistory'), () => {
        let bankaccount = new BankAccount();
        const MockedDeposit = {
            
        }
        expect(bankaccount.accounthistory).toEqual([500,'20-05-2022'])
    }

    test('#deposit will take an amount and store the information in the accountHistory'), () => {
        let bankaccount = new BankAccount();
        const MockedDeposit = {
            
        }
        expect(bankaccount.accounthistory).toEqual([500,'20-05-2022'])
    }
})
