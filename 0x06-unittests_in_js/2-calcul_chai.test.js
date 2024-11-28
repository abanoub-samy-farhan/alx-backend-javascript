
const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;

describe('Calcul', () => {
  it('should return 4', () => {
    expect(calculateNumber('SUM', 1, 3)).to.be.equal(4);
  });

  it('should return 5', () => {
    expect(calculateNumber('SUM', 1.5, 3)).to.be.equal(5);
  });

  it('should return -4', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });

  it('should return 0.2', () => {
    expect(calculateNumber('DIVIDE', 1, 5)).to.be.equal(0.2);
  });
  it('should return error', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error');
  });
});
