const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('Calcul', () => {
  it('should return 4', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('should return 5', () => {
    assert.equal(calculateNumber(1.5, 3), 5);
  });

  it('should return 6', () => {
    assert.equal(calculateNumber(1.4, 3.5), 5);
  });

  it('should return 4', () => {
    assert.equal(calculateNumber(1.4, 3.2), 4);
  });

  it('should return 0', () => {
    assert.equal(calculateNumber(-4.1, 4.4), 0);
  });
});