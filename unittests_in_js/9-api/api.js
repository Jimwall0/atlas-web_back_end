const express = require('express');

const app = express();

const PORT = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    if (!/^\d+$/.test(req.params.id)){
        return res.status(404).send('Not Found');
    }
    res.send(`Payment methods for cart :${req.params.id}`);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
  });
}

module.exports = app;