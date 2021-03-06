import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  login: null,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set("login", "true");
    default:
      return state;
  }
};
