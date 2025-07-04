const Utils = require('./utils')
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const temp = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${temp}`);
}

module.exports = sendPaymentRequestToApi;