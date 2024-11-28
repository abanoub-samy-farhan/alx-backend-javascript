const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should return 4', () => {
    const calculateNumber = sinon.spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(1, 3);
    sinon.assert.calledWith(calculateNumber, 'SUM', 1, 3);
    calculateNumber.restore();
  });
});