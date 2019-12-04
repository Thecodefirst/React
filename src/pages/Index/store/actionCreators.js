import * as constants from "./constants";

export const changeLogin = value => ({
  type: constants.CHANGE_LOGIN,
  value: value
});

export const login = (accout, password) => {
  return dispatch => {
    dispatch(changeLogin());
  };
};
