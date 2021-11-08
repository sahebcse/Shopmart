import { LOAD_STORE } from "../static/ReducerConstants";

const Store = (state={storeData: {name: "", logo: "", storeName: ""}, productsList: []},action)=>{
    switch (action.type) {
        case LOAD_STORE :
            return action.payload
        
        default:
            return state
    }
}

export default Store