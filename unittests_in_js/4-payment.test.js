const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function(){
    it('should call Utils.calculateNumber with SUM, 100, 20', function(){
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const logSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(stub, 'SUM', 100, 20);
        sinon.assert.calledOnce(logSpy);
        sinon.assert.calledWith(logSpy, 'The total is: 10');
        stub.restore();
        logSpy.restore();
    });
});
