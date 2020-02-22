const request = require("request");

exports.getCustomerAddressById = (req, res, next) => {
  if (req && req.params && req.params.id) {
    // const options = {
    //   method: 'GET',
    //   url: 'https://dev.carbon.gcp.lowes.com/address-data/addresses',
    //   headers:
    //     { 'x-customer-type': 'DIY',
    //     'x-identity-id':`${req.params.id}` }
    // };
     const URL = 'https://dev.carbon.gcp.lowes.com/address-data/addresses';
    //callbacks
    const getCustomerAddressByIdSuccCB = result => {
      res.json(result);
    };
    const getCustomerAddressByIdErrCB = error => {
      res.status(500).json({ error });
    };
    getCustomerAddressById(URL, getCustomerAddressByIdSuccCB, getCustomerAddressByIdErrCB);
  } else {
    res.status(400).json({ error: 'Bad Request' });
  }
  function getCustomerAddressById(URL, successCB, errorCB) {
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