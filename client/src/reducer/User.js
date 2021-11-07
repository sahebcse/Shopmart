import {AUTH, LOGIN, LOGOUT} from '../static/ReducerConstants'

const User = (state={authData:null},action)=>{
    switch (action.type) {
        case AUTH :
            localStorage.setItem('profile', JSON.stringify({...action.payload}))
            return {...state, authData:action.payload}
        
        case LOGOUT :
            window.localStorage.removeItem('profile')
            return {...state,authData:null}
        
        default:
            return state
    }
}

export default User