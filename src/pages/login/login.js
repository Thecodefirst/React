import React from 'react';
import { Container } from '@material-ui/core'

import TextField from './components/TextField'
import { LoginContent } from "./style";

class Login extends React.Component {
  state = {
    logoText: 'PUBG',
    UserNameStatus: false,
    PassWordStatus: false,
  }
  callbackUserName(val) {
    console.log(val)
    if(val.length < 3){
      this.setState({ UserNameStatus: true })
    }else{
      this.setState({ UserNameStatus: false })
    }
  }
  callbackPassword(val) {
    console.log(val)
    if(val.length < 3){
      this.setState({ PassWordStatus: true })
    }else{
      this.setState({ PassWordStatus: false })
    }
  }
  render() {
    return (
      <LoginContent>
        <div className="Login">
          <Container maxWidth="md">
            <div className="logo">{this.state.logoText}</div>
            <TextField error={this.state.UserNameStatus} defaultValue="UserName" label="UserName" callback = {this.callbackUserName.bind(this)}/>
            <TextField error={this.state.PassWordStatus} defaultValue="PassWord" label="PassWord" callback = {this.callbackPassword.bind(this)}/>
          </Container>
        </div>
      </LoginContent>
    );
  }
}

export default Login;
