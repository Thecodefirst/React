import React, { PureComponent } from 'react'
import { createStore } from 'redux'  
import { Provider } from 'react-redux'
import reducer from '@src/store/reducer';

import Pace from  '@src/utils/pace'
import '@src/statics/pace/pace.css'

import routes from '@src/routes';

const store = createStore(
    reducer
);
class App extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            text: 'Hello World'
        }
    }
    render() {
        console.log(Pace.start())
        return (
            <Provider store={store}>
                {routes}
            </Provider>
        )
    }
}
export default App