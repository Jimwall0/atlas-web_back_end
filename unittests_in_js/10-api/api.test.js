const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Express app
const baseURL = 'http://localhost:7865';

describe('Index page', function () {
  it('should return status 200', function (done) {
    request.get(`${baseURL}/`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', function (done) {
    request.get(`${baseURL}/`, function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have content-type text/html or text/plain', function (done) {
    request.get(`${baseURL}/`, function (error, response, body) {
      expect(response.headers['content-type']).to.match(/text\/html|text\/plain/);
      done();
    });
  });
});

describe('Cart Page', function () {
  it('should be a number', function (done) {
    request.get(`${baseURL}/cart/1`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
      done();
    });
  });
  it('should not be a number', function (done) {
    request.get(`${baseURL}/cart/one`, function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Not Found');
      done();
    });
  });
});

describe('Login Page', function () {
  it('should be an object', function (done) {
    const custom = {
      url: `${baseURL}/login`,
      method: 'POST',
      json: true,
      body: { userName: 'Pan' }
    };
    request.post(custom, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Pan');
      done();
    });
  });
});

describe('Payment Page', function () {
  it('should be an object', function (done) {
    const payments = {
      url: `${baseURL}/available_payments`,
      method: 'GET',
      json: true,
    }
    request.get(payments, function (done) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal({
        payment_method: {
          credit_cards: true,
          paypal: false
        }
      });
    });
  });
});
