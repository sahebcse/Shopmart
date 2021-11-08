import {combineReducers} from 'redux'

import User from './User'
import MerchantProduct from './MerchantProduct'
import Products from './Products'
import Store from './Store'

const reducer = combineReducers({User, MerchantProduct, Products, Store})

export default reducer