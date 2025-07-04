const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('5-payment');

describe('sendPaymentRequestToApi', function(){
    it('will call sendPaymentRequestToAPI with 100 and 20', function(){
        const logSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(logSpy);
        sinon.assert.calledWithExactly(logSpy, 'The total is: 120');
        logSpy.restore();
    });
    it('will call sendPaymentRequestToAPI with 10 and 10', function(){
        const logSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledOnce(logSpy);
        sinon.assert.calledWithExactly(logSpy, 'The total is: 20');
        logSpy.restore();
    });
});