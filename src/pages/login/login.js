import React from 'react';
import { Container } from '@material-ui/core'

import TextField from './components/TextField'

import { connect } from "react-redux";
import { actionCreators } from "./store";

import { LoginContent } from "./style";
class Login extends React.Component {
  state = {
    logoText: 'PUBG',
    UserNameStatus: false,
    PassWordStatus: false,
    username: 'kaiserDu',
    password: 'kaiserDu'
  }
  callbackUserName(val) {
    if(val.length < 3){
      this.setState({ UserNameStatus: true })
    }else{
      this.setState({ UserNameStatus: false, username: val })
    }
  }
  callbackPassword(val) {
    if(val.length < 3){
      this.setState({ PassWordStatus: true })
    }else{
      this.setState({ PassWordStatus: false, password: val })
    }
  }
  submitBtn = () => {
    let data = this.state
    // console.log(immutable.Map.isMap(this.props.userInfo))
    // debugger
    this.props.login(data.username,data.password)
  }
  render() {
    let userInfo = this.props.userInfo
    console.log(userInfo)
    return (
      <LoginContent>
        <div className="Login">
          <Container maxWidth="md">
            <div className="logo">{this.state.logoText}</div>
            <TextField error={this.state.UserNameStatus} defaultValue="UserName" label="UserName" callback = {this.callbackUserName.bind(this)}/>
            <TextField error={this.state.PassWordStatus} defaultValue="PassWord" label="PassWord" callback = {this.callbackPassword.bind(this)}/>
            <button className="submitBtn" onClick={this.submitBtn}>{`${userInfo.userName}++++${userInfo.passWord}`}</button>
          </Container>
        </div>
      </LoginContent>
    );
  }
}

const mapState = state => ({
  userInfo: state.toJS().login.userInfo
})

const mapDispatch = dispatch => ({
  login: (username,password) => dispatch(actionCreators.login(username,password))
})

export default connect(
  mapState,
  mapDispatch
)(Login)
