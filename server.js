const express= require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jsonParser = bodyParser.json({limit:'500mb'});
const app = express();
app.use(cors());

const customerController = require('./src/controllers/customer.controller');
const addressController = require('./src/controllers/customer.address.controller');
const PORT = process.env.PORT || 4001;
app.listen(PORT,()=>{
  console.log("port-->",PORT)
});
app.get('/v1/customerById/:id',customerController.getCustomerById);
app.get('/v1/customer/addressById/:id',addressController.getCustomerAddressById);