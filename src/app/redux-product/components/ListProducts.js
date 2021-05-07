import React, { PureComponent } from 'react'
import { Product } from './Product';

export class ListProducts extends PureComponent {
    constructor(props) {
        super(props);


    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="container">
                <div className="row ">
                    {!this.props.loading ?
                    this.props.products.map((element, index) => {
                        return (
                            <Product addProductToCart={this.props.addProductToCart} key={index} product={element}></Product>
                        )
                    }) : null
                    }
                </div>
            </div>
        );
    }
}

