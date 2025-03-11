export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(string) {
    if (typeof string !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = string;
  }

  get length() {
    return this._length;
  }

  set length(string) {
    if (typeof string !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = string;
  }

  get students() {
    return this._students;
  }

  set students(string) {
    if (!Array.isArray(string)) {
      throw new TypeError('Students must be an array');
    }
    this._students = string;
  }
}
