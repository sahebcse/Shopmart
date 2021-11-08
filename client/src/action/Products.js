import * as api from '../api'
import {AUTH, LOGOUT, LOAD_ALL_PRODUCTS} from '../static/ReducerConstants'

export const loadAllProducts = () => async (dispatch)=>
{
    try{
        const {data}=await api.getAllProducts()
        console.log('Inside the action')
        console.log(data)
        dispatch({type: LOAD_ALL_PRODUCTS, payload: data})
    }
    catch(error)
    {
        console.log(error)
    }
}