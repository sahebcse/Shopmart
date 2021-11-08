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