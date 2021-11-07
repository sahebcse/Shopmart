import axios from 'axios';

const URL = 'http://localhost:5000'

export const merchantSignup = (sendData)=> axios.post(`${URL}/merchant/signup`,sendData)