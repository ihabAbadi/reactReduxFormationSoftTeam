import { getProducts } from "../services/ProductService"

export const SEARCH_PRODUCT = "search_product"

const initialState = {products : getProducts()}
const reducer = (state, action)  => {
    switch(action.type) {
        case SEARCH_PRODUCT:
            return {...state, products : [...getProducts(action.payload.search)]}
        default:
            return {...initialState}
    }
   
}

export default reducer