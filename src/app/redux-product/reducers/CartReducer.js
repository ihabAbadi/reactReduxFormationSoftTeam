

export const ADD_PRODUCT = "add_product"
export const DELETE_PRODUCT = "delete_product"
export const UPDATE_PRODUCT = "update_product"

const initialState = {cart : []}

const addProduct = (state,product) => {
    let found = false
    
    const tmpCart = []
    
    for(let p of state.cart) {
        const newProduct = {...p}
        if(p.id == product.id) {
            newProduct.qty++
            found = true
        }
        tmpCart.push(newProduct)
    }

    if(!found)
        tmpCart.push({...product, qty:1})
    
    return {...state,cart:tmpCart}
}

const deleteProduct = (state,id) => {
    const tmpCart = []
    state.cart.forEach(p=> {
        if(p.id != id)
            tmpCart.push(p)
    })
    return {...state,cart:tmpCart}
}

const updateQty = (state, id, newQty) => {
    const tmpCart = []
    state.cart.forEach(p=> {
        const newProduct = {...p}
        if(p.id == id) {
            newProduct.qty = parseInt(newQty)
        }
        tmpCart.push(newProduct)
    })
    return {...state,cart:tmpCart}
}

const reducer = (state, action) => {
        switch(action.type){
            case ADD_PRODUCT:
            return {...addProduct(state,action.payload.product)}
            case DELETE_PRODUCT:
            return{...deleteProduct(state,action.payload.productId)}
            case UPDATE_PRODUCT:
                return {...updateQty(state,action.payload.productId, action.payload.qty)}
            default:
                return {...initialState}
        }
}

export default reducer