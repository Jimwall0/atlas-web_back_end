const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should round and sum two whole numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
});
