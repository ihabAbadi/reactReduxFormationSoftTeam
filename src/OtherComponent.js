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
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
}
export default connect(mapStateToProps)(OtherComponent)