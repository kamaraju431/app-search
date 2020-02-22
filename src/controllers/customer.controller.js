const request = require("request");

exports.getCustomerById = (req, res, next) => {
  if (req && req.params && req.params.id) {
    // const options = {
    //   method: 'GET',
    //   url: "https://dev.carbon.lowes.com/customer-data/customers/"`${req.params.id}`,
    //   headers:
    //     { 'x-customer-type': 'DIY' }
    // };
     const URL = `https://dev.carbon.lowes.com/customer-data/customers/${req.params.id}`;
    //callbacks
    const getCustomerByIdSuccCB = result => {
      res.json(result);
    };
    const getCustomerByIdErrCB = error => {
      res.status(500).json({ error });
    };
    getCustomerById(URL, getCustomerByIdSuccCB, getCustomerByIdErrCB);
  } else {
    res.status(400).json({ error: 'Bad Request' });
  }
  function getCustomerById(URL, successCB, errorCB) {
    request.get(URL,{headers: { 'x-customer-type': 'DIY' }}, (error, response, body) => {
      try {
        console.log(body)
        successCB(JSON.parse(body));
      } catch (Exception) {
        errorCB({ message: Exception, status: 500 });
      }
    });
  };
}