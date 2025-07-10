const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // your Express app

let server;

before((done) => {
  server = app.listen(7865, done);
});

after((done) => {
  server.close(done);
})

describe('Index page', function () {
  it('should return status 200', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have content-type text/html or text/plain', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.headers['content-type']).to.match(/text\/html|text\/plain/);
      done();
    });
  });
});

