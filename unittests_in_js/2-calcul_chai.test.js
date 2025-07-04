const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {

  describe('SUM', function(){
    it('should add two rounded numbers', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6); // 1 + 5
    });
  });
  
  describe('SUBTRACT', function(){
    it('should subtract two rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4); // 1 - 5
    });
  });

  describe('DIVIDE', function(){
    it('should divide two rounded numbers', function(){
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2); // 1 / 5
    });
    it('should return error when divde by 0', function(){
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error'); // Error
    });
  });
});
