import {combineReducers} from 'redux'

import User from './User'
import Products from './Products'
import Store from './Store'

const reducer = combineReducers({User, Products, Store})

export default reducer