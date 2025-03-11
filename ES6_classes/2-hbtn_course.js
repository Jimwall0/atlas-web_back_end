export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(string) {
    this._name = string;
  }

  set length(string) {
    this._length = string;
  }

  set students(string) {
    this._students = string;
  }
}