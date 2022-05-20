const Withdrawal = require ('./withdrawal')

describe('Withdrawal class', () => {

    beforeAll(() => {
        jest.useFakeTimers(new Date(2022, 5, 20));
    });

    test('Withdrawal constructs with given amount', () => {
        let withdrawal = new Withdrawal(500);
        expect(withdrawal.amount).toEqual(500);
    })

    test('#formatDate creates the date format DD-MM-YYY', () => {
        let withdrawal = new Withdrawal(500)
        expect(withdrawal.formatDate()).toEqual('20/05/2022')

    })

    test('#info stores the amount and date in format DD-MM-YYYY in array', () =>{
        let withdrawal = new Withdrawal(500);
        expect(withdrawal.info()).toEqual({type:'Withdrawal', amount:500, date:'20/05/2022'});
    })
})