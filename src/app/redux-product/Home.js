import React, { PureComponent } from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import ListProducts from "./containers/ListProducts"
import Search from './containers/Search';
import Cart from './containers/Cart';
class Home extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Provider store={store}>
                <Search></Search>
                <ListProducts/>
                <Cart></Cart>
            </Provider>
         );
    }
}
 
export default Home;