import React, { Component, PureComponent } from 'react'
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
                    {this.props.products.map((element, index) => {
                        return (
                            <Product key={index} product={element}></Product>
                        )
                    })}
                </div>
            </div>
         );
    }
}

