const expect = require('chai').expect;
const request = require('request');

describe('GET /', () => {
  it('should return a string', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      if (err) throw err;
      expect(body).to.be.equal('Welcome to the payment system');
      expect(res.statusCode).to.be.equal(200);
      expect(typeof body).to.be.equal('string');
      done();
    });
  });
});