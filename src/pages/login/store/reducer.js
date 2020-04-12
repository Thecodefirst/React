import * as constants from "./constants";
import { fromJS } from "immutable";
const defaultState = fromJS({
  userInfo: {
    userName: 'kaiserDu',
    passWord: 'kaiserDu'
  },
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.USER_INFO:
      return state.set('userInfo', action.value)
    default:
      return state;
  }
};
