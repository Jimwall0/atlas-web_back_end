export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft needs to be a number');
    }
    this._sqft = sqft;
    if (
      this.constructor !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage
    ) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft needs to be a number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    console.log(this);
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
