export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name needs to be a string');
    }
    this._name = name;
    if (typeof code !== 'string') {
      throw new TypeError('Code needs to be a string');
    }
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name needs to be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code needs to be a string');
    }
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
