import * as constants from "./constants";

const changeLogin = value => ({
  type: constants.USER_INFO,
  value: value
});

export const login = (accout, password) => {
  let userInfo = {
    userName: accout,
    passWord: password
  }
  return dispatch => {
    dispatch(changeLogin(userInfo));
  };
};
