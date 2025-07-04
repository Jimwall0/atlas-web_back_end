const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should round and sum two whole numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and sum numbers with decimals < 0.5', function () {
    assert.strictEqual(calculateNumber(1.2, 3.3), 4);
  });

  it('should round and sum numbers with decimals >= 0.5', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round down both if decimals < 0.5', function () {
    assert.strictEqual(calculateNumber(2.4, 2.4), 4);
  });

  it('should round up both if decimals >= 0.5', function () {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should handle negative numbers correctly', function () {
    assert.strictEqual(calculateNumber(-1.2, -1.7), -3);
  });

  it('should handle a mix of negative and positive numbers', function () {
    assert.strictEqual(calculateNumber(-1.5, 2.6), 2);
  });

  it('should round zero correctly', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
