const expect = require('chai').expect;
const PaymentToken = require('./6-payment_token.js');

describe('PaymentToken', () => {
  it('should return a token', (done) => {
    PaymentToken(true).then((res) => {
      expect(res).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});