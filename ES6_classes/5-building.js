export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate an abstract class Building directly')
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft needs to be a number');
    }
    this._sqft = sqft;
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
