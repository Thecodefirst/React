import React, { PureComponent } from 'react'

class Index extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            text: 'Hello World'
        }
    }
    render() {
        return (
            <div>{this.state.text}</div>
        )
    }
}
export default Index