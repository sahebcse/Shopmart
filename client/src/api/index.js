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


export const getAllProducts= () => axios.get(`${URL}/products`)

export const getStore = (id) => axios.get(`${URL}/merchant/${id}`)

export const searchProducts= (data) => axios.get(`${URL}/product/search/${data}`)

export const addReview=(sendData) => axios.post(`${URL}/product/${sendData.productId}/review`, sendData)