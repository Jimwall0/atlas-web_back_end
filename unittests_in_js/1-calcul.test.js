const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should add two rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6); // 1 + 5
    });

    it('should add two negative numbers', function () {
      assert.strictEqual(calculateNumber('SUM', -1.2, -3.8), -5); // -1 + -4
    });
  });

  describe('SUBTRACT', function () {
    it('should subtract two rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.3), 3); // 6 - 2
    });

    it('should handle negative result', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3); // 1 - 4
    });
  });

  describe('DIVIDE', function () {
    it('should divide two rounded numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, 2.0), 3.5); // 7 / 2
    });

    it('should return "Error" when dividing by zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 10.0, 0.2), 'Error'); // 10 / 0
    });

    it('should handle divide result less than 1', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.3, 3.7), 0.25); // 1 / 4
    });
  });

  describe('Invalid type', function () {
    it('should throw error for unknown type', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid operation type/);
    });
  });
});
