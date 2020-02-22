const request = require("request");

exports.getCustomerCardsById = (req, res, next) => {
  if (req && req.params && req.params.id) {
    // const options = {
    //   method: 'GET',
    //   url: 'https://dev.carbon.gcp.lowes.com/address-data/addresses',
    //   headers:
    //     { 'x-customer-type': 'DIY',
    //     'x-identity-id':`${req.params.id}` }
    // };
     const URL = 'https://dev.carbon.gcp.lowes.com/card-data/cards';
    //callbacks
    const getCustomerCardsByIdSuccCB = result => {
      res.json(result);
    };
    const getCustomerCardsByIdErrCB = error => {
      res.status(500).json({ error });
    };
    getCustomerCardsById(URL, getCustomerCardsByIdSuccCB, getCustomerCardsByIdErrCB);
  } else {
    res.status(400).json({ error: 'Bad Request' });
  }
  function getCustomerCardsById(URL, successCB, errorCB) {
    request.get(URL,{headers:
      { 'x-customer-type': 'DIY',
      'x-identity-id':`${req.params.id}` }}, (error, response, body) => {
      try {
        console.log(body)
        successCB(JSON.parse(body));
      } catch (Exception) {
        errorCB({ message: Exception, status: 500 });
      }
    });
  };
}