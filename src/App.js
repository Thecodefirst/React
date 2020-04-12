import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import store from "@src/store";
import Pace from  '@src/utils/pace'
import '@src/statics/pace/pace.css'

import routes from '@src/routes';

class App extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            text: 'Hello World'
        }
    }
    render() {
        return (
            <Provider store={store}>
                {routes}
            </Provider>
        )
    }
}
export default App