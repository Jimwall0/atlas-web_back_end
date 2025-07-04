const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function(){
    it('should call Utils.calculateNumber with SUM, 100, 20', function(){
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, 'SUM', 100, 20);
        spy.restore();
    });
});
