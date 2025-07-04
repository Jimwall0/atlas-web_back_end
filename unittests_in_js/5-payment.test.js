const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function(){
    let logSpy;
    beforeEach(function(){
        logSpy = sinon.spy(console, 'log');
    });
    afterEach(function(){
        logSpy.restore();
    });
    it('will call sendPaymentRequestToAPI with 100 and 20', function () {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(logSpy);
        sinon.assert.calledWithExactly(logSpy, 'The total is: 120');
    });

    it('will call sendPaymentRequestToAPI with 10 and 10', function () {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledOnce(logSpy);
        sinon.assert.calledWithExactly(logSpy, 'The total is: 20');
    });
});