import React, { PureComponent } from 'react'
import { connect } from 'react-redux';

class OtherComponent extends PureComponent {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 
            <div>
                Value of counter {this.props.counter.value}
                <button onClick={() => this.props.increment()}>+</button>
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
}

const mapActionToProps = (dispatch) => {
    return {
        increment : () => dispatch({type:'Increment'})
    }
}
export default connect(mapStateToProps, mapActionToProps)(OtherComponent)