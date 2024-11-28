const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should return 10', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const calculateNumber = sinon.stub(utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(calculateNumber, 'SUM', 100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is: 10');
    calculateNumber.restore();
    consoleSpy.restore();
  });
});