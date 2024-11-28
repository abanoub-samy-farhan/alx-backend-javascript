const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consoleSpy.restore();
  });
  it('should return total is 120', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is: 120');
    sinon.assert.calledOnce(consoleSpy);
  });
  it('should return total is 20', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consoleSpy, 'The total is: 20');
    sinon.assert.calledOnce(consoleSpy);
  });
});