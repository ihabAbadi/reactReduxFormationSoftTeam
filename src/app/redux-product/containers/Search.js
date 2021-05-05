import { connect } from "react-redux"
import { SEARCH_PRODUCT } from "../reducers/ProductReducer"
import {Search} from "./../components/Search"

const mapActionToProps = (dispatch) => {
    return {
        search : (value) => {
            dispatch({type : SEARCH_PRODUCT, payload : {search : value}})
        }
    }
}

export default connect(null,mapActionToProps)(Search)