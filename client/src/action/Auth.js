import * as api from '../api'
import {AUTH, LOGOUT} from '../static/ReducerConstants'

export const merchantSignup = (sendData,navigate)=> async (dispatch) => {
    try {
        const merchantInfo = {result:sendData.result, address:sendData.selectedCSC, bankDetails:sendData.bankDetails}
        const {data} = await api.merchantSignup(merchantInfo)
        dispatch({type:AUTH, payload:{result:data, token:sendData.token}})        
        navigate(`/merchant/${data._id}`)
    } catch (error) {
        console.log(error.message)
    }
}

export const merchantLogin = (sendData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.merchantLogin({email:sendData.result.email})
        dispatch({type:AUTH, payload:{result:data, token:sendData.token}})
        navigate(`/merchant/${data._id}`)
    } catch (error) {
        console.log(error.message)
    }
}