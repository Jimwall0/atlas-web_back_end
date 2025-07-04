const request = require('supertest');
const { expect } = require('chai');
const app = require('./api'); // your Express app

describe('Index page', function () {
  it('should return status 200', async function () {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
  });

  it('should return the correct message', async function () {
    const response = await request(app).get('/');
    expect(response.text).to.equal('Welcome to the payment system');
  });

  it('should have content-type text/html or text/plain', async function () {
    const response = await request(app).get('/');
    expect(response.headers['content-type']).to.match(/text\/html|text\/plain/);
  });
});
