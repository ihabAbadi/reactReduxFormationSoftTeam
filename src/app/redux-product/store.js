import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./reducers/ProductReducer"
import CartReducer from "./reducers/CartReducer"
import { functionMiddleware } from './middlewares/ExempleMidlleware'
export const store = configureStore({
    reducer : {
        products : ProductReducer,
        cart : CartReducer
    },
    
})