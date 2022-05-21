const Transaction = require ('../lib/transaction');
const MockDate = require('mockdate');

describe('Transaction class', () => {

    beforeEach(() => {
        MockDate.set('05/20/2022');
        transaction = new Transaction(500);
    });

    test('Transaction constructs with given amount', () => {
        expect(transaction.amount).toEqual(500);
    })

    test('#formatDate creates the date format DD-MM-YYY', () => {
        expect(transaction.formatDate()).toEqual('20/05/2022');

    })

    test('#info stores the amount and date in format DD-MM-YYYY in an object', () =>{
        expect(transaction.info()).toEqual({amount:500, date:'20/05/2022'});
    })
})