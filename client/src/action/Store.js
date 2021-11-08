import * as api from '../api'
import {AUTH, LOGOUT, LOAD_ALL_PRODUCTS, LOAD_STORE} from '../static/ReducerConstants'

export const loadStore = (id) => async (dispatch)=>
{
    try{
        const {data}=await api.getStore(id)
        console.log("Reached the store loader")
        console.log(data)
        const storeData={
            name: data.name,
            storeName: data.storeName,
            logo: data.logo, 
        }
        const tempData={
            storeData: storeData, productsList: data.products
        }
        console.log(tempData)
        dispatch({type: LOAD_STORE, payload: tempData})
    }
    catch(error)
    {

    }
}