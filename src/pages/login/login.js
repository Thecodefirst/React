import React from 'react';
import { Container } from '@material-ui/core'

import TextField from './components/TextField'
import { LoginContent } from "./style";

class Login extends React.Component {
  state = {
    logoText: 'PUBG'
  }
  callback(val) {
    console.log(val)
  }
  render() {
    return (
      <LoginContent>
        <div className="Login">
          <Container maxWidth="md">
            <div className="logo">{this.state.logoText}</div>
            <div>
            <TextField state={this.state.logoText}  callback = {this.callback}/>
            </div>
          </Container>
        </div>
      </LoginContent>
    );
  }
}

export default Login;
