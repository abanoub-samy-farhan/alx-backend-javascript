
const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('Calcul', () => {
  it('should return 4', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });

  it('should return 5', () => {
    assert.equal(calculateNumber('SUM', 1.5, 3), 5);
  });

  it('should return -4', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return 0.2', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 5), 0.2);
  });
  it('should return error', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
