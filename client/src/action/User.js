import * as api from '../api'

export const removeCartItemById = async (sendData)=>{
    try {
        const {data} = await api.removeCartItemById(sendData)

        console.log('success')
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteAllCartItems = async (sendData)=>{
    try {
        const {data} = await api.deleteAllCartItems(sendData)
        console.log('success')
    } catch (error) {
        console.log(error.message)
    }
}

export const getUserCartItems = async (sendData)=>{
    try {
        const {data} = await api.getUserCartItems(sendData)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const addToCart = async (sendData)=>{
    try {
        const {data} = await api.addToCart(sendData)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const productOrdered=(sendData)=>async (dispatch)=>{
    const {data} = await api.productOrdered(sendData)
}

export const getClientSecretKey=async (sendData)=>{
    console.log("secret")
    const {data} =await api.getClientSecretKey(sendData)
    console.log(data.clientSecret)
    return data;
}