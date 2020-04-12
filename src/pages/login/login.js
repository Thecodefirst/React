import React, { PureComponent } from 'react';

import { connect } from "react-redux";
import { actionCreators } from "./store";

import { LoginContent } from "./style";

class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      logoText: 'PUBG',
      UserNameStatus: false,
      PassWordStatus: false,
      username: '',
      password: ''
    }
  }
  handleLogin = () => {
    this.props.login(this.state.username,this.state.password)
  }
  getUserName = (e) => {
    this.setState({
      username: e.target.value
    });
  }
  getPassWord = (e) => {
    this.setState({
      password: e.target.value
    });
  }
  render() {
    let userInfo = this.props.userInfo
    return (
      <LoginContent>
        <div className="Login">
          {userInfo.get('userName')}
          {userInfo.get('passWord')}
          <input onChange={this.getUserName}/>
          <input onChange={this.getPassWord}/>
          <button onClick={this.handleLogin}>submit</button>
        </div>
      </LoginContent>
    );
  }
}

const mapState = state => ({
  userInfo: state.getIn(['login','userInfo'])
})

const mapDispatch = dispatch => ({
  login: (username,password) => dispatch(actionCreators.login(username,password))
})

export default connect(
  mapState,
  mapDispatch
)(Login)
