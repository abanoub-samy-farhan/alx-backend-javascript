import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        if (typeof amount === 'number') {
            this._amount = amount;
        } else throw TypeError("amount have to be a number");
        if (currency instanceof Currency) {
            this._currency = currency;
        } else throw TypeError("currency have to be a currency");
    }

    get amount() {
        return this._amount;
    }
    set amount(newamount) {
        if (typeof newamount === 'number') this._amount = newamount;
        else throw TypeError("amount have to be a number");
    }

    get currency() {
        return this._currency;
    }
    set currency(newcurrency) {
        if (newcurrency instanceof Currency) this._currency = newcurrency;
        else throw TypeError("currency have to be a string");
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount === 'number' && typeof conversionRate === 'number') {
            return amount * conversionRate;
        } else {
            throw TypeError("amount and conversionRate have to be a number");
        }
    }
}