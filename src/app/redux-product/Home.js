import React, { PureComponent } from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import ListProducts from "./containers/ListProducts"
import Search from './containers/Search';
class Home extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Provider store={store}>
                <Search></Search>
                <ListProducts/>
            </Provider>
         );
    }
}
 
export default Home;