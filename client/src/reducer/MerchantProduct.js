import {GET_MERCHANT_PRODUCTS, ADD_NEW_PRODUCT} from '../static/ReducerConstants'

const MerchantProducts = (merchantProducts=[],action)=>{
    switch (action.type) {
        case GET_MERCHANT_PRODUCTS :
            return action.payload
        
        case ADD_NEW_PRODUCT :
            return [...merchantProducts, action.payload]
        
        default:
            return merchantProducts
    }
}

export default MerchantProducts