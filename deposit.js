class Deposit{
    constructor(amount) {
        this.amount = amount
    }

    formatDate() {
        const today = new Date();
        var dd = today.getDate()
        var mm = today.getMonth()+1;
        const yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0'+dd; 
        } 
        if (mm < 10) {
            mm = '0'+mm;
        } 
        this.date = dd+'-'+mm+'-'+yyyy
        return this.date
    }

    info() {
        return [this.amount, this.formatDate()]
    }
}

module.exports = Deposit;