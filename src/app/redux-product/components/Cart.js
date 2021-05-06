import React, { PureComponent } from 'react'

export class Cart extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <div>
                <h1>Panier</h1>
                {this.props.cart.map((element,index) => (
                    <CartProduct key={index} product={element} deleteProduct={this.props.deleteProduct} updateQty={this.props.updateQty}></CartProduct>)
                )}
            </div>
        )
    }
}


const CartProduct = (props) => {
    // console.log(props)
    // const product = {props}
    return(
        <div>
            <span>title : {props.product.title}</span>
            <span>price : {props.product.price} €</span>
            <span>Qty : {props.product.qty}</span>
            <span>Total : {props.product.qty * props.product.price }€</span>
            <input type="number" value={props.product.qty} onChange={(e) => props.updateQty(props.product.id, e.target.value)} />
            <button onClick={() => props.deleteProduct(props.product.id)}>Supprimer</button>
        </div>
    )
}