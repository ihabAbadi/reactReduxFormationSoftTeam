import { connect } from "react-redux"
import {ListProducts} from "./../components/ListProducts"


const mapStateTopProps = (state) => {
    console.log(state)
    return {
        products : state.products.products
    }
}

export default connect(mapStateTopProps)(ListProducts)