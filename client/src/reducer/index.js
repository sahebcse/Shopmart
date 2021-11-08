import {combineReducers} from 'redux'

import User from './User'
import MerchantProduct from './MerchantProduct'

const reducer = combineReducers({User, MerchantProduct})

export default reducer