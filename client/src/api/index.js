import axios from 'axios';

const URL = 'http://localhost:5000'

export const merchantSignup = (sendData)=> axios.post(`${URL}/merchant/signup`,sendData)

export const merchantLogin = (sendData)=> axios.post(`${URL}/merchant/login`,sendData)

export const getAllProducts= () => axios.get(`${URL}/products`)

export const getStore = (id) => axios.get(`${URL}/merchant/${id}`)

export const searchProducts= (data) => axios.get(`${URL}/product/search/${data}`)