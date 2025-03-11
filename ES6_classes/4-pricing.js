import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount needs to be a number');
    }
    this._amount = amount;
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency needs to be Currency object');
    }
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount needs to be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency needs to be a Currency object');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount needs to be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('ConversionRate needs to be a number');
    }
    return amount * conversionRate;
  }
}
