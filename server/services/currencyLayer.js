const axios = require('axios')
const { CURRENCY_LAYER_KEY } = require('../config')

const convert = (amount, from = 'COP', to = 'USD') => {
  return axios.get(`http://api.currencylayer.com/convert?access_key=${CURRENCY_LAYER_KEY}&from=${from}&to=${to}&amount=${amount}`)
    .then(response => response.data);
}

module.exports = { convert }
