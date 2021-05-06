import { connect } from "react-redux"
import { DELETE_PRODUCT, UPDATE_PRODUCT } from "../reducers/CartReducer"
import {Cart} from "./../components/Cart"

const mapStateTopProps = (state) => {
    return {
        cart : state.cart.cart
    }
}

const mapActionToProps = (dispatch) => {
    return {
        deleteProduct : (id) => {
            dispatch({type:DELETE_PRODUCT, payload : {productId : id}})
        },
        updateQty : (id, qty) => {
            dispatch({type:UPDATE_PRODUCT, payload:{productId:id, qty:qty}})
        }
    }
}

export default connect(mapStateTopProps,mapActionToProps)(Cart)