const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with correct response when success is true', async function () {
    const result = await getPaymentTokenFromAPI(true);
    expect(result).to.deep.equal({ data: 'Successful response from the API' });
  });
});
