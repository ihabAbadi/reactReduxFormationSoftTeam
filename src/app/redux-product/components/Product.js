import React, { PureComponent } from 'react'

export class Product extends PureComponent  {
    constructor(props) {
        super(props);
    }



    render() { 
        const {product} = this.props
        return ( 
            <div className="col-3 p-2">
                <div className="row justify-content-center">
                    <div className="col">{product.title}</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">{product.price}</div>
                </div>
                <div className="row">
                    {/* <button className="btn btn-danger col" onClick={() => this.props.deleteProduct(product.id)}>supprimer</button>
                    <button className="btn btn-primary col" onClick={() => this.props.edit(product)}>modifier</button> */}
                    <button className="btn btn-secondary col" onClick={() => this.props.addProductToCart(product)}>Ajouter panier</button>

                </div>
            </div>
         );
    }
}
 
