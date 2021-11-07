import axios from 'axios';

const URL = 'http://localhost:5000'

export const merchantSignup = (sendData)=> axios.post(`${URL}/merchant/signup`,sendData)

export const merchantLogin = (sendData)=> axios.post(`${URL}/merchant/login`,sendData)

export const addNewProduct = (sendData)=> axios.post(`${URL}/product`,sendData)

export const getMerchantProducts = (sendData)=>axios.get(`${URL}/products/merchant/${sendData}`)