/* services file that manage actions through api */

import axios from 'axios';
const BASE_URL = "http://localhost:4001"
const API = 'http://demo3277586.mockable.io/customers';

export const serviceSave = values => {
    return axios.post(`${API}v1/user/registration`, values)
};

export const serviceList = ()=> {
   return axios.get(`${API}`)
};

export const serviceDelete = (id)=> {
   return axios.post(`${API}v1/user/delete/${id}`,{})
}

// export const serviceById = (id)=> {
//    return axios.get(`${API}v1/user/id/${id}`)
// }
export const serviceById = (id)=> {
     return axios.get(`${BASE_URL}/v1/customerById/${id}`);
 }
//`http://demo3277586.mockable.io/customer/1`
 export const serviceAddressById = (id)=> {
    // const URL="https://dev.carbon.gcp.lowes.com/address-data/addresses";
    //  const headers={
    //      "x-customer-type":"DIY",
    //      "x-identity-id":id,
    //      "Access-Control-Allow-Origin": "*"
    //  }; 
    return axios.get(`${BASE_URL}/v1/customer/addressById/${id}`);
 }
export const serviceUpdate = (values)=> {
   return axios.post(`${API}v1/user/update`,values)
}


