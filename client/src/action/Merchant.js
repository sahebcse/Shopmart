import * as api from '../api'
import {GET_MERCHANT_PRODUCTS,ADD_NEW_PRODUCT} from '../static/ReducerConstants'

export const addNewProduct = (sendData) => async (dispatch) => {
    try {
        const {data} = await api.addNewProduct(sendData)
        console.log(data)
        dispatch({type: ADD_NEW_PRODUCT, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const getMerchantProducts = (sendData) => async (dispatch) => {
    try {
        const {data} = await api.getMerchantProducts(sendData)
        console.log(data)
        dispatch({type:GET_MERCHANT_PRODUCTS, payload:data})
    } catch (error) {
        console.log(error.message)
    }
}