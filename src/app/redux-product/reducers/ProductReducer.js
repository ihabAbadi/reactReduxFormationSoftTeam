import { getProducts, getProductsAync } from "../services/ProductService"

export const SEARCH_PRODUCT = "search_product"
export const START_SEARCH= "start_search"

const initialState = {products : getProducts(),loading : false}

export const callGetProductsAsync = (search) => {
    return dispatch => {
        dispatch({type:START_SEARCH})
        getProductsAync(search).then(res => {
            dispatch({type:SEARCH_PRODUCT, data:res})
        })
    }
}
const reducer = (state, action)  => {
    switch(action.type) {
        case START_SEARCH:
            return{...state, loading:true}
        case SEARCH_PRODUCT:
            return {...state, products : [...action.data],loading:false}
        default:
            return {...initialState}
    }
   
}

export default reducer