import { connect } from "react-redux"
import { callGetProductsAsync, SEARCH_PRODUCT } from "../reducers/ProductReducer"
import {Search} from "./../components/Search"

const mapActionToProps = (dispatch) => {
    return {
        search : (value) => {
            // dispatch({type:SEARCH_PRODUCT, payload:{search:value}})
            dispatch(callGetProductsAsync(value))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loading : state.products.loading
    }
}

export default connect(mapStateToProps,mapActionToProps)(Search)