import { connect } from "react-redux"
import { ADD_PRODUCT } from "../reducers/CartReducer"
import {ListProducts} from "./../components/ListProducts"


const mapStateTopProps = (state) => {
    return {
        products : state.products.products,
        loading : state.products.loading
    }
}
const mapActionToProps = (dispatch) => {
    return {
        addProductToCart : (product) => {
            
            dispatch({type:ADD_PRODUCT, payload : {product}})
        }
    }
}
export default connect(mapStateTopProps, mapActionToProps)(ListProducts)