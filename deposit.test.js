const Deposit = require ('./deposit')

describe('Deposit class', () => {

    beforeAll(() => {
        jest.useFakeTimers(new Date(2022, 5, 20));
    });

    test('Deposit constructs with given amount', () => {
        let deposit = new Deposit(500);
        expect(deposit.amount).toEqual(500);
    })

    test('#formatDate creates the date format DD-MM-YYY', () => {
        let deposit = new Deposit(500)
        expect(deposit.formatDate()).toEqual('20-05-2022')

    })

    test('#info stores the amount and date in format DD-MM-YYYY in array', () =>{
        let deposit = new Deposit(500);
        expect(deposit.info()).toEqual([500,'20-05-2022'])
    })
})