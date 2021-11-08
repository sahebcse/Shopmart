import axios from 'axios';

const URL = 'http://localhost:5000'

//merchant api
export const merchantSignup = (sendData)=> axios.post(`${URL}/merchant/signup`,sendData)

export const merchantLogin = (sendData)=> axios.post(`${URL}/merchant/login`,sendData)

export const addNewProduct = (sendData)=> axios.post(`${URL}/product`,sendData)

export const getMerchantProducts = (sendData)=>axios.get(`${URL}/products/merchant/${sendData}`)

//user api  
export const deleteAllCartItems = (sendData)=> axios.delete(`${URL}//users/deletecart/${sendData.id}`)

export const getUserCartItems = (sendData)=> axios.get(`${URL}/users/getusercart/${sendData.id}`)

export const removeCartItemById = (sendData)=> axios.post(`${URL}/users/removeCartItemById`,sendData)