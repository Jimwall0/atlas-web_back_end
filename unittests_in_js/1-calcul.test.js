const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {

  describe('SUM', function(){
    it('should add two rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6); // 1 + 5
    });
  });
  
  describe('SUB', function(){
    it('should subtract two rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUB', 1.4, 4.5), -4) // 1 - 5
    })
  })
});
